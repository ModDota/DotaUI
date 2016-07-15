enum SilenceState {
    None = 0,
    Abilities = 1,
    Passives = 2,
    All = 3
}

enum AbilityState {
    Default = 0,
    Active,
    AbilityPhase,
    Cooldown,
    Muted
}
class AbilityPanel {
    panel: Panel;
    ability: number;
    abilityName: string;
    ownerUnit: number;
    level: number;
    maxLevel: number;
    learning: boolean;
    autocast: boolean;
    state: AbilityState;

    pips: Panel[];

    /* Initialise this ability panel with an ability (like a constructor). */
    constructor(parent: Panel, ability: number, unit: number) {
        // Create panel
        this.panel = $.CreatePanel( "Panel", parent, "" );
        this.panel.BLoadLayoutSnippet( "AbilityPanel" );

        this.panel.SetPanelEvent("onmouseover", this.showTooltip.bind(this));
        this.panel.SetPanelEvent("onmouseout", this.hideTooltip.bind(this));
        this.panel.SetPanelEvent("onactivate", this.onLeftClick.bind(this));
        this.panel.SetPanelEvent("oncontextmenu", this.onRightClick.bind(this));

        // Set up panel logic
        this.ability = ability;
        this.abilityName = Abilities.GetAbilityName(ability);
        this.ownerUnit = unit;
        this.level = 0;
        this.maxLevel = Abilities.GetMaxLevel(this.ability);
        this.learning = false;
        this.autocast = false;
        this.state = AbilityState.Default;

        this.pips = [];

        // Set the ability image.
        let image = <AbilityImage>this.panel.FindChildTraverse("AbilityImage");
        image.abilityname = this.abilityName;
        image.contextEntityIndex = this.ownerUnit;

        // Set a special style for passive abilities
        if (Abilities.IsPassive(this.ability)) {
            this.panel.FindChildTraverse("AbilityFrame").AddClass("Passive");
        }

        // Set a special style for autocast abilities
        if (Abilities.IsAutocast(this.ability)) {
            this.panel.FindChildTraverse("AutocastPanel").style.visibility = "visible";
        }

        // We do not want to know this for enemies - but we can
        if (!Entities.IsEnemy(unit)) {
            // Add ability pips.
            this.addLevelPips();

            // Set the level of the ability.
            this.setLevel(Abilities.GetLevel(this.ability));
        }

        // Hide mana label by default
        this.panel.FindChildTraverse("ManaLabel").style.visibility = "collapse";

        // Set hotkey panel.
        let hotkey = Abilities.GetKeybind(this.ability);
        if (Abilities.IsPassive(this.ability)) {
            this.panel.FindChildTraverse("HotkeyLabel").style.visibility = "collapse";
        } else {
            (<Label>this.panel.FindChildTraverse("HotkeyLabel")).text = hotkey;
        }
    }

    /* Add level pips. */
    addLevelPips(): void {
        // Add pips.
        let pipContainer = this.panel.FindChildTraverse("PipContainer");

        if (this.maxLevel < 8) {
            for (let i = 0; i < this.maxLevel; i++) {
                let pip = $.CreatePanel("Panel", pipContainer, "");
                if (i < this.level) {
                    pip.AddClass("LeveledPip");
                } else {
                    pip.AddClass("EmptyPip");
                }
                if (this.maxLevel > 5) {
                    pip.AddClass("Small");
                }
                this.pips.push(pip);
            }
        } else {
            // Add pips for levels > 8
            let pipLabel = <Label>$.CreatePanel("Label", pipContainer, "");
            pipLabel.text = "0/" + this.maxLevel;
            this.pips[0] = pipLabel;
        }
    }

    /* Set the level of the ability */
    setLevel(level: number): void {
        // Get the mana cost
        let manaCost = Abilities.GetManaCost(this.ability);

        // Set level
        this.level = level;

        // Only show level information for allies
        if (!Entities.IsEnemy(this.ownerUnit)) {
            // If level == 0 desaturate image with css, otherwise revert
            if (level === 0) {
                this.panel.FindChildTraverse("AbilityImage").AddClass("NotLearned");
                this.panel.FindChildTraverse("ManaLabel").style.visibility = "collapse";
            } else {
                this.panel.FindChildTraverse("AbilityImage").RemoveClass("NotLearned");

                if (manaCost > 0) {
                    this.panel.FindChildTraverse("ManaLabel").style.visibility = "visible";
                    (<Label>this.panel.FindChildTraverse("ManaLabel")).text = String(manaCost);
                } else {
                    this.panel.FindChildTraverse("ManaLabel").style.visibility = "collapse";
                }
            }

            // Set pips.
            if (this.maxLevel < 8) {
                let pipContainer = this.panel.FindChildTraverse("PipContainer");
                for (let i = 0; i < level; i++) {
                    let pip = this.pips[i];
                    if (pip.BHasClass("EmptyPip") || pip.BHasClass("AvailablePip")) {
                        pip.RemoveClass("EmptyPip");
                        pip.RemoveClass("AvailablePip");
                        pip.AddClass("LeveledPip");
                    }
                }

                // Set the level + 1 pip to available if it is
                if (level < this.maxLevel) {
                    if (Abilities.CanAbilityBeUpgraded(this.ability) === AbilityLearnResult_t.ABILITY_CAN_BE_UPGRADED
                     && Entities.GetAbilityPoints(this.ownerUnit) > 0) {
                        this.pips[level].RemoveClass("EmptyPip");
                        this.pips[level].AddClass("AvailablePip");
                    } else {
                        this.pips[level].RemoveClass("AvailablePip");
                        this.pips[level].AddClass("EmptyPip");
                    }
                }
            } else {
                (<Label>this.pips[0]).text = level + "/" + this.maxLevel;
            }
        }
    }

    /* Re-initialise when fetching this existing panel again. */
    reinit(): void {
        // We do not want to know this for enemies - but we can
        if (!Entities.IsEnemy(this.ownerUnit)) {
            // Set the level of the ability.
            this.setLevel(Abilities.GetLevel(this.ability));
        }

        // Check if we can still upgrade.
        this.setLearnMode(this.learning);

        // Update hotkey label, can change because of slot swapping
        let hotkey = Abilities.GetKeybind(this.ability);
        (<Label>this.panel.FindChildTraverse("HotkeyLabel")).text = hotkey;

        // Do not play shine on panels that came off cooldown while looking away
        if (this.state === AbilityState.Cooldown && Abilities.IsCooldownReady(this.ability)) {
            this.state = AbilityState.Default;
            this.panel.FindChildTraverse("AbilityImage").RemoveClass("Active");
            this.panel.FindChildTraverse("AbilityImage").RemoveClass("AbilityPhase");
            this.panel.FindChildTraverse("AbilityImage").RemoveClass("Cooldown");
            this.panel.FindChildTraverse("AbilityPhaseMask").style.visibility = "collapse";
            this.panel.FindChildTraverse("CooldownLabel").style.visibility = "collapse";
        }
    }

    setLearnMode(learnMode: boolean): void {
        // Make sure to cast by default.
        this.learning = false;

        // Check if we're in learn mode (NOTE: Bug in CanAbilityBeUpgraded (inverted))
        if (learnMode && Abilities.CanAbilityBeUpgraded(this.ability) === AbilityLearnResult_t.ABILITY_CAN_BE_UPGRADED) {
            this.panel.FindChildTraverse("LearnOverlay").style.visibility = "visible";
            this.panel.FindChildTraverse("AbilityImage").RemoveClass("NotLearned");
            this.learning = true;
        } else {
            this.panel.FindChildTraverse("LearnOverlay").style.visibility = "collapse";
            if (this.level === 0 || Entities.IsEnemy(this.ownerUnit)) {
                this.panel.FindChildTraverse("AbilityImage").AddClass("NotLearned");
            }
        }
    }

    /* Show the ability tooltip */
    showTooltip(): void {
        let abilityButton = this.panel.FindChildTraverse("AbilityButton");
        $.DispatchEvent("DOTAShowAbilityTooltipForEntityIndex", abilityButton, this.abilityName, this.ownerUnit);
    }

    /* Hide the tooltip */
    hideTooltip(): void {
        let abilityButton = this.panel.FindChildTraverse("AbilityButton");
        $.DispatchEvent("DOTAHideAbilityTooltip", abilityButton);
    }

    onLeftClick(): void {
        if (this.learning) {
            Abilities.AttemptToUpgrade(this.ability);
        } else {
            Abilities.ExecuteAbility(this.ability, this.ownerUnit, false);
        }
    }

    onRightClick(): void {
        if (Abilities.IsAutocast(this.ability)) {
            // Abilities.
            // Turn on autocast
            Game.PrepareUnitOrders({
                OrderType : dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO,
                AbilityIndex : this.ability,
                ShowEffects : true
            });
        }
    }

    startCooldown(duration: number): void {
        // Do the radial clip thing.
        let totalDuration = Abilities.GetCooldownLength(this.ability);
        let cooldownPanel = this.panel.FindChildTraverse("cooldownswipe");
        cooldownPanel.style.opacity = "0.75";
        cooldownPanel.style.transitionDuration = totalDuration + "s";
        cooldownPanel.style.clip = "radial(50% 50%, 0deg, 0deg)";

        // Schedule hiding of the panel
        $.Schedule(duration, function() {
            cooldownPanel.style.opacity = "0";
            cooldownPanel.style.clip = "radial(50% 50%, 0deg, -360deg)";
        });

        // Make cooldown label visible
        let cooldownLabel = <Label>this.panel.FindChildTraverse("CooldownLabel");
        cooldownLabel.text = String(Math.ceil(duration));
        cooldownLabel.style.visibility = "visible";

        // Start the schedule loop
        $.Schedule(duration % 1.0, this.updateCooldown.bind(this));
    }

    updateCooldown() {
        if (Abilities.IsCooldownReady(this.ability)) {
            this.panel.FindChildTraverse("CooldownLabel").style.visibility = "collapse";
            return;
        }

        let cooldown = Abilities.GetCooldownTimeRemaining(this.ability);
        (<Label>this.panel.FindChildTraverse("CooldownLabel")).text = String(Math.ceil(cooldown));

        $.Schedule(1.0, this.updateCooldown.bind(this));
    }

    setSilenceState(state: SilenceState) {
        let silenceMask = this.panel.FindChildTraverse("SilencedMask");
        if (state !== SilenceState.None) {
            silenceMask.style.visibility = "visible";
        } else {
            silenceMask.style.visibility = "collapse";
        }
    }

    update() {
        let state = AbilityState.Default;
        if (Abilities.GetLocalPlayerActiveAbility() === this.ability) {
            state = AbilityState.Active;
        }
        else if (Abilities.IsInAbilityPhase(this.ability) || Abilities.GetToggleState(this.ability)) {
            state = AbilityState.AbilityPhase;
        }
        else if (!Abilities.IsCooldownReady(this.ability)) {
            state = AbilityState.Cooldown;
        }

        let abilityImage = this.panel.FindChildTraverse("AbilityImage");
        let abilityPhaseMask = this.panel.FindChildTraverse("AbilityPhaseMask");
        let cooldownLabel = this.panel.FindChildTraverse("CooldownLabel");
        let cdShineMask = this.panel.FindChildTraverse("CDShineMask");
        let autocastMask = this.panel.FindChildTraverse("AutocastMask");

        if (state !== this.state) {
            if (state === AbilityState.Default) {
                abilityImage.RemoveClass("Active");
                abilityImage.RemoveClass("AbilityPhase");
                abilityImage.RemoveClass("Cooldown");
                abilityPhaseMask.style.visibility = "collapse";
                cooldownLabel.style.visibility = "collapse";

                if (this.state === AbilityState.Cooldown) {
                    cdShineMask.AddClass("CooldownEndShine");
                }
            } else if (state === AbilityState.Active) {
                abilityImage.AddClass("Active");
                abilityImage.RemoveClass("AbilityPhase");
                abilityImage.RemoveClass("Cooldown");
                abilityPhaseMask.style.visibility = "collapse";
                cooldownLabel.style.visibility = "collapse";
            } else if (state === AbilityState.AbilityPhase) {
                abilityImage.RemoveClass("Active");
                abilityImage.AddClass("AbilityPhase");
                abilityImage.RemoveClass("Cooldown");
                abilityPhaseMask.style.visibility = "visible";
                cooldownLabel.style.visibility = "collapse";
            } else if (state === AbilityState.Cooldown) {
                abilityImage.RemoveClass("Active");
                abilityImage.RemoveClass("AbilityPhase");
                abilityImage.AddClass("Cooldown");
                abilityPhaseMask.style.visibility = "collapse";
                cdShineMask.RemoveClass("CooldownEndShine");

                this.startCooldown(Abilities.GetCooldownTimeRemaining(this.ability));
            }

            this.state = state;
        }

        // Check autocast state
        if (Abilities.GetAutoCastState(this.ability) !== this.autocast) {
            this.autocast = Abilities.GetAutoCastState(this.ability);

            if (this.autocast) {
                autocastMask.style.visibility = "visible";
            } else {
                autocastMask.style.visibility = "collapse";
            }
        }
    }
}