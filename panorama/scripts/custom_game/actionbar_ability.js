(function() {
    var ABILITY_STATE_DEFAULT = 0,
        ABILITY_STATE_ACTIVE = 1,
        ABILITY_STATE_ABILITY_PHASE = 2,
        ABILITY_STATE_COOLDOWN = 3;

    var currentState = ABILITY_STATE_DEFAULT;
    var panel = $.GetContextPanel();

    /* Initialise this ability panel with a slot and ability (like a constructor). */
    panel.init = function(slot, ability, unit) {
        // Do some bookkeeping
        panel.ability = ability;
        panel.abilityName = Abilities.GetAbilityName(ability);
        panel.ownerUnit = unit;

        // Set the ability image.
        $( "#AbilityImage" ).abilityname = panel.abilityName;
        $( "#AbilityImage" ).contextEntityIndex = panel.ability;

        // Set a special style for passive abilities
        if (Abilities.IsPassive(panel.ability)) {
            $( "#AbilityFrame" ).AddClass("Passive");
        }

        // Set the level of the ability.
        panel.setLevel(Abilities.GetLevel(panel.ability));

        //check cooldowns
    }

    /* Show the ability tooltip */
    panel.showTooltip = function() {
        var abilityButton = $("#AbilityButton");
        $.DispatchEvent("DOTAShowAbilityTooltipForEntityIndex", abilityButton, panel.abilityName, panel.ownerUnit);
    }

    /* Hide the tooltip */
    panel.hideTooltip = function() {
        var abilityButton = $("#AbilityButton");
        $.DispatchEvent("DOTAHideAbilityTooltip", abilityButton);
    }

    /* Start cooldown animation based on current duration and the total duration */
    panel.startCooldown = function(duration) {
        // Do the radial clip thing.
        var totalDuration = Abilities.GetCooldownLength(panel.ability);
        $("#cooldownswipe").style.opacity = "0.75";
        $("#cooldownswipe").style.transitionDuration = totalDuration+".0s";
        $("#cooldownswipe").style.clip = "radial(50% 50%, 0deg, 0deg)";
        $.Schedule(duration, function() {
            $("#cooldownswipe").style.opacity = "0";
            $("#cooldownswipe").style.clip = "radial(50% 50%, 0deg, -360deg)";
        });
    }

    /* Set the level of the ability */
    panel.setLevel = function(level) {
        // If level == 0 desaturate image with css, otherwise revert
        if (level == 0) {
            $("#AbilityImage").AddClass("NotLearned");
        } else {
            $("#AbilityImage").RemoveClass("NotLearned");
        }

        // Add pips.
        var pipContainer = $("#PipContainer");
        var maxLevel = Abilities.GetMaxLevel(panel.ability);
        for (var i = 0; i < maxLevel; i++) {
            var pip = $.CreatePanel( "Panel", pipContainer, "" );
            if (i < level) {
                pip.AddClass("LeveledPip");
            } else {
                pip.AddClass("EmptyPip");
            }
        }
    }

    /* Check for changes in the ability state */
    panel.update = function() {
        var state = ABILITY_STATE_DEFAULT;
        if (Abilities.GetLocalPlayerActiveAbility() === panel.ability) {
            state = ABILITY_STATE_ACTIVE;
        }
        else if (Abilities.IsInAbilityPhase(panel.ability)) {
            state = ABILITY_STATE_ABILITY_PHASE;
        }
        else if (!Abilities.IsCooldownReady(panel.ability)) {
            state = ABILITY_STATE_COOLDOWN;
        }

        if (state !== currentState) {
            if (state === ABILITY_STATE_DEFAULT) {
                $("#AbilityImage").RemoveClass("Active");
                $("#AbilityImage").RemoveClass("AbilityPhase");
                $("#AbilityImage").RemoveClass("Cooldown");
            } else if (state === ABILITY_STATE_ACTIVE) {
                $("#AbilityImage").AddClass("Active");
                $("#AbilityImage").RemoveClass("AbilityPhase");
                $("#AbilityImage").RemoveClass("Cooldown");
            } else if (state === ABILITY_STATE_ABILITY_PHASE) {
                $("#AbilityImage").RemoveClass("Active");
                $("#AbilityImage").AddClass("AbilityPhase");
                $("#AbilityImage").RemoveClass("Cooldown");
            } else if (state === ABILITY_STATE_COOLDOWN) {
                $("#AbilityImage").RemoveClass("Active");
                $("#AbilityImage").RemoveClass("AbilityPhase");
                $("#AbilityImage").AddClass("Cooldown");

                panel.startCooldown(Abilities.GetCooldownTimeRemaining(panel.ability));
            }

            currentState = state;
        }
    }
})();