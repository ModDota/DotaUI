/// <reference path="../../dota.d.ts" />

function Component(name: string, path: string) {
    let hud = $("#ZooHUD");
    let panel = $.CreatePanel( "Panel", hud, name );
    panel.LoadLayoutAsync( "file://{resources}/layout/custom_game/" + path, false, false );
    $.Msg("Adding component ", name);
}

(function(){
    // Force reload
    let hud = $("#ZooHUD");
    hud.RemoveAndDeleteChildren();
    $.Msg("reloading");
})();