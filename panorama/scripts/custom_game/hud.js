(function() {
    var abilities = {};

    /* Set actionpanel for a specified unit. */
    function SetActionPanel(unit) {
        var abilityContainer = $("#AbilitiesContainer");

        // Get rid of the old abilities first.
        abilities = {};
        abilityContainer.RemoveAndDeleteChildren();

        // Add new abilities
        var abilityCount = Entities.GetAbilityCount(unit) -1;
        var slot = 0;

        while (slot < abilityCount) {
            // Get ability.
            var ability = Entities.GetAbility(unit, slot);

            // Stop once an invalid ability is found (or just continue and ignore?)
            if (ability === -1) {
                break;
            }

            // Skip abilities not on the cast bar (attribute bonus).
            if (!Abilities.IsAttributeBonus(ability)) {
                // Create new panel and load the layout.
                var abilityPanel = $.CreatePanel( "Panel", abilityContainer, "" );
                abilityPanel.BLoadLayout( "file://{resources}/layout/custom_game/actionbar_ability.xml", false, false );
                
                // Initialise the ability panel.
                abilityPanel.init(slot, ability, unit);

                // Keep ability for later
                abilities[ability] = abilityPanel;
            }

            // Increment slot for next ability.
            slot++;
        }
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

    /* Handle the action success event to check if an ability is being cast. */
    function onActionSuccess(event) {
        var activeAbility = Abilities.GetLocalPlayerActiveAbility();

        if (activeAbility !== -1) {
            if (abilities[activeAbility] !== undefined) {
                if (Abilities.IsInAbilityPhase(activeAbility)) {
                    abilities[activeAbility].setActive(false);
                    abilities[activeAbility].setAbilityPhase(true);
                } else {
                    abilities[activeAbility].setActive(true);
                }
            }
        } else {
            for (var ab in abilities) {
                abilities[ab].setActive(false);
                abilities[activeAbility].setAbilityPhase(false);
            }
        }
    }

    /* Handle ability changed (level up?) event */
    function onAbilityCHanged(event) {

    }

    // Bind query unit update event
    GameEvents.Subscribe("dota_player_update_selected_unit", onUpdateSelectedUnit);
    GameEvents.Subscribe("dota_player_update_query_unit", onUpdateQueryUnit);

    //Listen to dota_action_success to determine cast state
    GameEvents.Subscribe("dota_action_success", onActionSuccess);

    //Listen for level up event - dota_ability_changed

    //Listen for casts (cooldown starts)
})();