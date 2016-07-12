/// <reference path="../../../dota.d.ts" />

(function() {
    var ItemDB = {
        587   : "default",
        10150 : "dire",
        10324 : "portal",
        10346 : "mana_pool"
    }
    function onSteamInventoryChanged(event) {
        var skinName = ItemDB[event.itemdef];
        $.Msg(skinName);
        if (skinName !== undefined) {
            $("#spacer").style.backgroundImage = "url('s2r://panorama/images/hud/"+skinName+"/inventory/spacer.png');";
            //WTF DO WE DO NOW WITH DIFFERENT RESOLUTIONS!!
            $("#rocks").style.backgroundImage = "url('s2r://panorama/images/hud/"+skinName+"/inventory/rocks_16_9.png');";
            $("#background").style.backgroundImage = "url('s2r://panorama/images/hud/"+skinName+"/inventory/background_wide.png');";
        }
        $.Msg(event);
    }
    function onGoldChanged(event) {
        (<Label>$("#goldCount")).text = Players.GetGold(Players.GetLocalPlayer()).toString(); //TODO: handle selecting allied units.
    }
    function onShopChanged(event) {
        if (event.shopmask > 0) {
            $("#shop").AddClass("ShopActive");
        } else {
            $("#shop").RemoveClass("ShopActive");
        }
        $.Msg(event);
    }
    //Listen for hacky inventory updates
    GameEvents.Subscribe("inventory_updated", onSteamInventoryChanged);
    
    //Listen to inventory updates
    //"dota_inventory_changed"
    
    //Listen to gold updates
    //"dota_money_changed"
    GameEvents.Subscribe("dota_money_changed", onGoldChanged);
    
    //Listen to shop changes (shop button glow) (should this be done globally in hud.js applied to ZooHud?)
    //"dota_player_shop_changed"
    GameEvents.Subscribe("dota_player_shop_changed", onShopChanged);
    
    //Listen to glyph updates
    //"dota_glyph_used"
})();