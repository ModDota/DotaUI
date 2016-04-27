(function() {
    var SILENCE_NONE = 0,
        SILENCE_ABILITIES = 1,
        SILENCE_PASSIVES = 2,
        SILENCE_ALL = 3;

    var ItemDB = {
        587   : "default",
        10150 : "dire",
        10324 : "portal"
    }
    
    var units = {};
    var currentUnit = -1;
    var abilities = {};
    var learnMode = false;
    var silenceState = SILENCE_NONE;

    /* Set actionpanel for a specified unit. */
    function SetActionPanel(unit) {
        var abilityContainer = $("#AbilitiesContainer");

        // Get rid of the old abilities first.
        for (var ab in abilities) {
            abilities[ab].style.visibility = "collapse";
        }

        // Remove old ability layout
        abilityContainer.RemoveClass("AbilityLayout" + countAbilityLayout(currentUnit));

        //Set the new current unit
        currentUnit = unit;

        // Retrieve panels we made previously to avoid deletion or excessive panels.
        if (units[unit] !== undefined) {
            abilities = units[unit];
        }
        else {
            units[unit] = {};
            abilities = units[unit];
        }

        // Update abilities on the action bar (can be swapped on invoker/rubick).
        updateVisibleAbilities();

        // Can not enter a unit in learn mode
        learnMode = false;
        for (var ab in abilities) {
            abilities[ab].setLearnMode(learnMode);
        }

        // Set silence state only for allies
        if (!Entities.IsEnemy(unit)){
            silenceState = getSilenceState(unit);
            for (var ab in abilities) {
                abilities[ab].setSilenceState(silenceState);
            }
        }

        // Set ability layout
        abilityContainer.AddClass("AbilityLayout" + countAbilityLayout(unit));
    }

    /* Selection changed to a unit the player controls. */
    function onUpdateSelectedUnit(event) {
        var unit = Players.GetLocalPlayerPortraitUnit();
        SetActionPanel(unit);
    }

    /* Selection changed to a unit the player does not control. */
    function onUpdateQueryUnit(event) {
        var unit = Players.GetQueryUnit(Players.GetLocalPlayer());
        
        // Filter out invalid units (happens when switching back to the hero from a query unit.)
        // This also fires an update_selected_unit event so should be handled fine.
        if (unit != -1) {
            SetActionPanel(unit);
        }
    }

    function onStatsChanged(event) {
        //Ability points changed - reinit all abilities
        for (var ab in abilities) {
            abilities[ab].reinit();
        }

        //Update stats?
    }

    function onAbilityChanged(event) {
        updateVisibleAbilities();
    }
    
    function onSteamInventoryChanged(event) {
        var skinName = ItemDB[event.itemdef];
        $.Msg(skinName);
        if (skinName !== undefined) {
            $("#minimapborder").style.backgroundImage = "url('s2r://panorama/images/hud/"+skinName+"/actionpanel/minimapborder.png');";
            $("#spacer_16_9").style.backgroundImage = "url('s2r://panorama/images/hud/"+skinName+"/actionpanel/spacer_16_9.png');";
            //TODO: spacer_16_10
            //TODO: portrait
            $("#portrait_wide").style.backgroundImage = "url('s2r://panorama/images/hud/"+skinName+"/actionpanel/portrait_wide.png');";
            $("#center_left_wide").style.backgroundImage = "url('s2r://panorama/images/hud/"+skinName+"/actionpanel/center_left_wide.png');";
            //TODO: center_left
            $("#center_right").style.backgroundImage = "url('s2r://panorama/images/hud/"+skinName+"/actionpanel/center_right.png');";
            $.Msg($("#minimapborder").style.backgroundImage);
        }
        $.Msg(event);
    }

    function updateVisibleAbilities() {
        var abilityContainer = $("#AbilitiesContainer");

        //Hide all abilities
        for (var ab in abilities) {
            abilities[ab].style.visibility = "collapse";
        }

        //Show only the visible abilities
        var slot = 0;
        var abilityCount = Entities.GetAbilityCount(currentUnit) - 1;
        while (slot < abilityCount) {
            // Get ability.
            var ability = Entities.GetAbility(currentUnit, slot);

            // Stop once an invalid ability is found (or just continue and ignore?)
            if (ability === -1) {
                break;
            }

            if (!Abilities.IsAttributeBonus(ability) && !Abilities.IsHidden(ability)) {
                if (abilities[ability] !== undefined) {
                    abilities[ability].style.visibility = "visible";
                    
                    //Reinit the ability to check for changes
                    abilities[ability].reinit();
                } 
                else {
                    // Create new panel and load the layout.
                    var abilityPanel = $.CreatePanel( "Panel", abilityContainer, "" );
                    abilityPanel.LoadLayoutAsync( "file://{resources}/layout/custom_game/actionbar_ability.xml", false, false );
                    
                    // Initialise the ability panel.
                    abilityPanel.init(ability, currentUnit);

                    // Keep ability for later
                    abilities[ability] = abilityPanel;
                }

                if (slot > 0) {
                    var previousAbility = Entities.GetAbility(currentUnit, slot - 1);
                    if (abilities[previousAbility] !== undefined) {
                        abilityContainer.MoveChildAfter(abilities[ability], abilities[previousAbility]);
                    }
                }
            }

            slot++;
        }
    }

    /* Count the abilities to show up in the ability layout. */
    function countAbilityLayout(unit) {
        var count = 0;
        for (var slot = 0; slot < Entities.GetAbilityCount(currentUnit); slot++) {
            var ability = Entities.GetAbility(unit, slot);

            if (ability == -1) {
                break;
            }

             if (!Abilities.IsAttributeBonus(ability) && !Abilities.IsHidden(ability)) {
                count++;
             }
        }
        return count;
    }

    /* Get the silence state (abilities, passives or both) */
    function getSilenceState(unit) {
        var state = SILENCE_NONE;
        if (Entities.IsSilenced(unit) || Entities.IsHexed(unit)) state += SILENCE_ABILITIES;
        if (Entities.PassivesDisabled(unit)) state += SILENCE_PASSIVES;
        return state
    }

    /* Update loop */
    function onUpdate() {
        //Check if we are in ability learn mode
        if (Game.IsInAbilityLearnMode() !== learnMode) {
            learnMode = Game.IsInAbilityLearnMode();
            for (var ab in abilities) {
                abilities[ab].setLearnMode(learnMode);
            }
        }

        //Make ability state only visible to allies (this can be commented out to see enemy ability states!)
        if (!Entities.IsEnemy(currentUnit)) {
            //Check silence state
            var silenceS = getSilenceState(currentUnit);
            if (silenceS !== silenceState) {
                silenceState = silenceS;
                for (var ab in abilities) {
                    abilities[ab].setSilenceState(silenceState);
                }
            }

            // Update all abilities.
            for (var ab in abilities) {
                abilities[ab].update();
            }
        }

        $.Schedule(0.005, onUpdate);
    }

    // Bind query unit update event
    GameEvents.Subscribe("dota_player_update_selected_unit", onUpdateSelectedUnit);
    GameEvents.Subscribe("dota_player_update_query_unit", onUpdateQueryUnit);

    GameEvents.Subscribe("dota_portrait_unit_stats_changed", onStatsChanged);
    GameEvents.Subscribe("dota_ability_changed", onAbilityChanged);
    //Listen for hacky inventory updates
    GameEvents.Subscribe("inventory_updated", onSteamInventoryChanged);

    //Set default unit
    var unit = Players.GetQueryUnit(Players.GetLocalPlayer());
    if (unit === -1 ) {
        unit = Players.GetLocalPlayerPortraitUnit();
    }
    SetActionPanel(unit);

    //Listen to dota_action_success to determine cast state
    onUpdate();

    //Listen for level up event - dota_ability_changed

    //Listen for casts (cooldown starts)
})();