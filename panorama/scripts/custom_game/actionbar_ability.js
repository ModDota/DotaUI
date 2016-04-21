(function() {
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
    panel.startCooldown = function(duration, totalDuration) {
        // Do the radial clip thing.
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
})();