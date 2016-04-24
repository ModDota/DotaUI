(function() {
    var units = {};
    var abilities = {};

    /* Set actionpanel for a specified unit. */
    function SetActionPanel(unit) {
        var abilityContainer = $("#AbilitiesContainer");

        // Get rid of the old abilities first.
        for (var ab in abilities) {
            abilities[ab].style.visibility = "collapse";
        }

        // Remove old ability layout
        abilityContainer.RemoveClass("AbilityLayout" + Object.keys(abilities).length);
        
        // Retrieve panels we made previously to avoid deletion or excessive panels.
        if (units[unit] !== undefined) {
            abilities = units[unit];
            for (var ab in abilities) {
                abilities[ab].reinit();
                abilities[ab].style.visibility = "visible";
            }
        }
        else {
            // Add new abilities
            var abilityCount = Entities.GetAbilityCount(unit) -1;
            var slot = 0;

            var newAbilities = {};

            while (slot < abilityCount) {
                // Get ability.
                var ability = Entities.GetAbility(unit, slot);

                // Stop once an invalid ability is found (or just continue and ignore?)
                if (ability === -1) {
                    break;
                }

                // Skip abilities not on the cast bar (attribute bonus).
                if (!Abilities.IsAttributeBonus(ability) && !Abilities.IsHidden(ability)) {
                    // Create new panel and load the layout.
                    var abilityPanel = $.CreatePanel( "Panel", abilityContainer, "" );
                    abilityPanel.LoadLayoutAsync( "file://{resources}/layout/custom_game/actionbar_ability.xml", false, false );
                    
                    // Initialise the ability panel.
                    abilityPanel.init(slot, ability, unit);

                    // Keep ability for later
                    newAbilities[ability] = abilityPanel;
                }

                // Increment slot for next ability.
                slot++;
            }

            units[unit] = newAbilities;
            abilities = newAbilities;
        }

        $.Msg(Object.keys(abilities));
        abilityContainer.AddClass("AbilityLayout" + Object.keys(abilities).length);
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

    /* Update loop */
    function onUpdate() {
        // Update all abilities.
        for (var ab in abilities) {
            abilities[ab].update();
        }

        $.Schedule(0.005, onUpdate);
    }

    // Bind query unit update event
    GameEvents.Subscribe("dota_player_update_selected_unit", onUpdateSelectedUnit);
    GameEvents.Subscribe("dota_player_update_query_unit", onUpdateQueryUnit);

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