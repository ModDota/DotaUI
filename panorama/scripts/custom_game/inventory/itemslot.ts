enum ItemState {
    Default = 0,
    Active,
    AbilityPhase,
    Cooldown,
    Muted
}
class ItemPanel {
    panel: Panel;
    slot: number;
    unit: number;

    item:number;
    itemName:string;

    state: ItemState;
    
    constructor(parent: Panel, slot:number) {
        this.slot = slot;
        this.panel = $.CreatePanel( "Panel", parent, "" );
        this.panel.BLoadLayoutSnippet( "itemSlot" );
        this.update();
    }
    update() {
        this.unit = Players.GetQueryUnit(Players.GetLocalPlayer());
        if (this.unit === -1 ) {
            this.unit = Players.GetLocalPlayerPortraitUnit();
        }
        this.item = Entities.GetItemInSlot(this.unit, this.slot);
        this.itemName = Abilities.GetAbilityName(this.item);
        let itemImage = <Image>this.panel.FindChildTraverse("bg");
        itemImage.SetImage("s2r://panorama/images/items/" + ((this.item == -1) ? "emptyitembg" : Items.GetAbilityTextureSF(this.item)) + ".png");
    }
}