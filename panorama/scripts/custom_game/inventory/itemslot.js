// Generated by TypeScript
var ItemState;
(function (ItemState) {
    ItemState[ItemState["Default"] = 0] = "Default";
    ItemState[ItemState["Active"] = 1] = "Active";
    ItemState[ItemState["AbilityPhase"] = 2] = "AbilityPhase";
    ItemState[ItemState["Cooldown"] = 3] = "Cooldown";
    ItemState[ItemState["Muted"] = 4] = "Muted";
})(ItemState || (ItemState = {}));
function altDump(name, object) {
    $.Msg("=====================================");
    $.Msg("This is a giant dump in " + name);
    $.Msg("=====================================");
    for (var v in object) {
        if (typeof object[v] == "object") {
            $.Msg(v + " = {");
            for (var w in object[v]) {
                $.Msg("\t" + v + "." + w + " = " + ("" + object[v][w]));
            }
            $.Msg("}");
        }
        else {
            $.Msg(name + "." + v + " = (" + typeof object[v] + ") " + object[v]);
        }
    }
    $.Msg("=====================================");
}
var ItemPanel = (function () {
    function ItemPanel(parent, slot) {
        this.keybind = "";
        this.slot = slot;
        this.panel = $.CreatePanel("Panel", parent, "");
        this.panel.BLoadLayoutSnippet("itemSlot");
        $.RegisterEventHandler("DragStart", this.panel, this.onDragStart.bind(this));
        $.RegisterEventHandler("DragEnd", this.panel, this.onDragEnd.bind(this));
        $.RegisterEventHandler("DragDrop", this.panel, this.onDragDrop.bind(this));
        this.update();
    }
    ItemPanel.prototype.onDragStart = function (panelID, dragCallbacks) {
        //If we are empty, fuck dragging.
        if (this.item == -1) {
            return true;
        }
        var panel = $.CreatePanel("Image", this.panel, "dragImage");
        panel.SetAttributeInt("itemID", this.item);
        panel.SetAttributeInt("unitID", this.unit);
        panel.SetImage("s2r://panorama/images/items/" + Items.GetAbilityTextureSF(this.item) + ".png");
        dragCallbacks.displayPanel = panel;
        dragCallbacks.offsetX = 0;
        dragCallbacks.offsetY = 0;
        return true;
    };
    ItemPanel.prototype.onDragEnd = function (panelID, draggedPanel) {
        var isSwapping = draggedPanel.GetAttributeInt("swapping", 0);
        if (!isSwapping) {
            $.Msg("Drop this bitch");
            var itemID = draggedPanel.GetAttributeInt("itemID", -1);
            var unitID = draggedPanel.GetAttributeInt("unitID", -1);
            Game.DropItemAtCursor(unitID, itemID);
        }
        draggedPanel.DeleteAsync(0);
        return true;
    };
    ItemPanel.prototype.onDragDrop = function (panelID, draggedPanel) {
        draggedPanel.SetAttributeInt("swapping", 1);
        if (draggedPanel.GetAttributeInt("itemID", -1) == this.item) {
            return true;
        }
        Game.PrepareUnitOrders({
            OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_ITEM,
            TargetIndex: this.slot,
            AbilityIndex: draggedPanel.GetAttributeInt("itemID", -1)
        });
        return true;
    };
    ItemPanel.prototype.update = function () {
        this.unit = Players.GetQueryUnit(Players.GetLocalPlayer());
        if (this.unit === -1) {
            this.unit = Players.GetLocalPlayerPortraitUnit();
        }
        this.item = Entities.GetItemInSlot(this.unit, this.slot);
        this.itemName = Abilities.GetAbilityName(this.item);
        if (this.keybind == "") {
            this.keybind = Abilities.GetKeybind(this.item);
            this.panel.FindChildTraverse("hotkey").text = this.keybind;
        }
        this.panel.SetHasClass("Muted", Items.IsMuted(this.item));
        this.panel.SetHasClass("Primary", Items.ShouldDisplayCharges(this.item));
        this.panel.SetHasClass("Secondary", Items.ShowSecondaryCharges(this.item));
        //Due to the native of inverting IsPassive, need to do empty checks first.
        if (this.item == -1) {
            this.panel.RemoveClass("Active");
        }
        else {
            this.panel.SetHasClass("Active", !Abilities.IsPassive(this.item));
        }
        //WTF Valve, why not just have secondary being secondary and primary being primary!
        if (Abilities.GetToggleState(this.item) || !Items.ShowSecondaryCharges(this.item)) {
            this.panel.FindChildTraverse("primary").text = Items.GetDisplayedCharges(this.item).toString();
            this.panel.FindChildTraverse("secondary").text = Items.GetSecondaryCharges(this.item).toString();
        }
        else {
            this.panel.FindChildTraverse("secondary").text = Items.GetDisplayedCharges(this.item).toString();
            this.panel.FindChildTraverse("primary").text = Items.GetSecondaryCharges(this.item).toString();
        }
        var itemImage = this.panel.FindChildTraverse("bg");
        itemImage.SetImage("s2r://panorama/images/items/" + ((this.item == -1) ? "emptyitembg" : Items.GetAbilityTextureSF(this.item)) + ".png");
    };
    return ItemPanel;
}());
