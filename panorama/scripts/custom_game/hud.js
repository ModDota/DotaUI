function Component(name, path) {
    var hud = $("#ZooHUD");
    var panel = $.CreatePanel( "Panel", hud, name );
    panel.LoadLayoutAsync( "file://{resources}/layout/custom_game/"+path, false, false );                    
}

(function(){
    // Force reload
    var hud = $("#ZooHUD");
    hud.RemoveAndDeleteChildren();
})();