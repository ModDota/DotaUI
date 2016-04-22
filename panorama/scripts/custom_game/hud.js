(function() {

    /* Set actionpanel for a specified unit. */
    function SetActionPanel(unit) {
        var abilityContainer = $("#AbilitiesContainer");

        // Get rid of the old abilities first.
        abilityContainer.RemoveAndDeleteChildren();

        // Add new abilities
        var abilityCount = Entities.GetAbilityCount(unit) -1;
        var slot = 0;

        while (slot < abilityCount) {
            // Get ability.
            var ability = Entities.GetAbility(unit, slot);

            // Stop once an invalid ability is found (or just continue and ignore?)
            if (ability == -1) {
                break;
            }

            // Skip abilities not on the cast bar (attribute bonus).
            if (!Abilities.IsAttributeBonus(ability)) {
                // Create new panel and load the layout.
                var abilityPanel = $.CreatePanel( "Panel", abilityContainer, "" );
                abilityPanel.BLoadLayout( "file://{resources}/layout/custom_game/actionbar_ability.xml", false, false );
                
                // Initialise the ability panel.
                abilityPanel.init(slot, ability, unit);
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

    // Bind query unit update event
    GameEvents.Subscribe("dota_player_update_selected_unit", onUpdateSelectedUnit);
    GameEvents.Subscribe("dota_player_update_query_unit", onUpdateQueryUnit);

    //Listen to dota_action_success to determine cast state

    //Listen for level ups

    //Listen for casts (cooldown starts)
})();