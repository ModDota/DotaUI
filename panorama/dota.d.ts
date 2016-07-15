interface CDOTA_PanoramaScript_GameEvents {
    Subscribe(eventName:string, callback:Function);
}

interface CScriptBindingPR_Players {
/**
 * Get the maximum number of players in the game.
**/
GetMaxPlayers() : number;

/**
 * Get the maximum number of players on teams.
**/
GetMaxTeamPlayers() : number;

/**
 * Get the local player ID.
**/
GetLocalPlayer() : number;

/**
 * Is the nth player a valid player?
**/
IsValidPlayerID(iPlayerID : number) : boolean;

/**
 * Return the name of a player.
**/
GetPlayerName(iPlayerID : number) : string;

/**
 * Get the entity index of the hero controlled by this player.
**/
GetPlayerHeroEntityIndex(iPlayerID : number) : number;

/**
 * Get the entities this player has selected.
**/
GetSelectedEntities(iPlayerID : number) : any[];

/**
 * Get the entities this player is querying.
**/
GetQueryUnit(iPlayerID : number) : number;

/**
 * Get local player current portrait unit. (ie. Player's hero or primary selected unit.)
**/
GetLocalPlayerPortraitUnit() : number;

/**
 * Can the player buy back?
**/
CanPlayerBuyback(iPlayerID : number) : boolean;

/**
 * Does this player have a custom game ticket?
**/
HasCustomGameTicketForPlayerID(iPlayerID : number) : boolean;

/**
 * The number of assists credited to a player.
**/
GetAssists(iPlayerID : number) : number;

/**
 *
**/
GetClaimedDenies(iPlayerID : number) : number;

/**
 *
**/
GetClaimedMisses(iPlayerID : number) : number;

/**
 * The number of deaths a player has suffered.
**/
GetDeaths(iPlayerID : number) : number;

/**
 * The number of denies credited to a player.
**/
GetDenies(iPlayerID : number) : number;

/**
 * The amount of gold a player has.
**/
GetGold(iPlayerID : number) : number;

/**
 * The number of kills credited to a player.
**/
GetKills(iPlayerID : number) : number;

/**
 *
**/
GetLastBuybackTime(iPlayerID : number) : number;

/**
 *
**/
GetLastHitMultikill(iPlayerID : number) : number;

/**
 * The number of last hits credited to a player.
**/
GetLastHits(iPlayerID : number) : number;

/**
 *
**/
GetLastHitStreak(iPlayerID : number) : number;

/**
 * The current level of a player.
**/
GetLevel(iPlayerID : number) : number;

/**
 *
**/
GetMisses(iPlayerID : number) : number;

/**
 *
**/
GetNearbyCreepDeaths(iPlayerID : number) : number;

/**
 * Total reliable gold for this player.
**/
GetReliableGold(iPlayerID : number) : number;

/**
 *
**/
GetRespawnSeconds(iPlayerID : number) : number;

/**
 *
**/
GetStreak(iPlayerID : number) : number;

/**
 * Total gold earned in this game by this player.
**/
GetTotalEarnedGold(iPlayerID : number) : number;

/**
 * Total xp earned in this game by this player.
**/
GetTotalEarnedXP(iPlayerID : number) : number;

/**
 * Total unreliable gold for this player.
**/
GetUnreliableGold(iPlayerID : number) : number;

/**
 * Get the team this player is on.
**/
GetTeam(iPlayerID : number) : number;

/**
 * Average gold earned per minute for this player.
**/
GetGoldPerMin(iPlayerID : number) : number;

/**
 * Average xp earned per minute for this player.
**/
GetXPPerMin(iPlayerID : number) : number;

/**
 * Return the name of the hero a player is controlling.
**/
GetPlayerSelectedHero(iPlayerID : number) : string;

/**
 * Get the player color.
**/
GetPlayerColor(iPlayerID : number) : number;

/**
 * Is this player a spectator.
**/
IsSpectator(iPlayerID : number) : boolean;

/**
 * .
**/
PlayerPortraitClicked(nClickedPlayerID : number, bHoldingCtrl : boolean, bHoldingAlt : boolean) : void;

/**
 * .
**/
BuffClicked(nEntity : number, nBuffSerial : number, bAlert : boolean) : void;
}
interface CScriptBindingPR_Entities {
    IsEnemy(entityID:number) : boolean;
    PassivesDisabled(entityID:number) : boolean;
    IsSilenced(entityID:number) : boolean;
    IsHexed(entityID:number) : boolean;
    GetAbilityCount(entityID:number) : number;
    GetAbility(entityID:number, slot:number) : number;
    GetAbilityPoints(entityID:number) : number;
    GetItemInSlot(entityID:number, slot:number) : number;
}
interface CScriptBindingPR_Abilities {
    GetAbilityName(entityID:number) : string;
    GetMaxLevel(entityID:number) : number;
    IsAttributeBonus(entityID:number) : boolean;
    IsHidden(entityID:number) : boolean;
    IsPassive(entityID:number) : boolean;
    IsAutocast(entityID:number) : boolean;
    GetLevel(entityID:number) : number;
    GetKeybind(entityID:number) : string;
    IsCooldownReady(entityID:number) : boolean;
    GetAutoCastState(entityID:number) : boolean;
    GetCooldownTimeRemaining(entityID:number) : number;
    GetToggleState(entityID:number) : number;
    IsInAbilityPhase(entityID:number) : boolean;
    GetLocalPlayerActiveAbility() : number;
    CanAbilityBeUpgraded(entityID:number) : AbilityLearnResult_t;
    GetManaCost(entityID:number) : number;
    GetCooldownLength(entityID:number) : number;
    ExecuteAbility(entityID:number, caster:number, quickCast:boolean) : void;
    AttemptToUpgrade(entityID:number) : void;
}
interface CScriptBindingPR_Items {
    GetAbilityTextureSF(entityID:number): string;
}

interface PrepareUnitOrdersArgument {
    OrderType : dotaunitorder_t;
    AbilityIndex : number;
    ShowEffects: boolean;
}
interface CScriptBindingPR_Game {
    IsInAbilityLearnMode() : boolean;
    PrepareUnitOrders(order:PrepareUnitOrdersArgument) : void;
}

interface Panel {
    LoadLayoutAsync(path:String, unknown:boolean, unknown2:boolean) : void;
    BLoadLayoutSnippet(path: string);
    RemoveAndDeleteChildren() : void;
    AddClass(name:String) : void;
    RemoveClass(name:String) : void;
    style : CSSStyleDeclaration;
    MoveChildAfter(child:Panel, afterChild:Panel) : void;
    FindChildTraverse(id: string): Panel;
    BHasClass(className: string): boolean;
    SetPanelEvent(event: string, handler: Function): void;
}
interface Label extends Panel {
    text: string;
}
interface Image extends Panel {
    /**
     * Sets the image of this Image.
     * Example: image.SetImage("s2r://panorama/images/hud/hudv2_iconglyph.png")
     */
    SetImage(path:string): void;
    SetScaling(scale:string): void;
}
interface AbilityImage extends Image {
    abilityname: string;
    contextEntityIndex: number;
}
interface ItemImage extends Image {
    itemname: string;
    contextEntityIndex: number;
}

interface DollarStatic {
    (selector: string) : Panel;
    CreatePanel(type:String, root:Panel, name:String) : Panel;
    Msg(...args:any[]) : void;
    GetContextPanel() : Panel;
    Schedule(time:number, callback:Function);
    DispatchEvent(event:string, reference?:Panel, ...any:any[]);
}

declare enum dotaunitorder_t {
    DOTA_UNIT_ORDER_NONE = 0,
    DOTA_UNIT_ORDER_MOVE_TO_POSITION = 1	,
    DOTA_UNIT_ORDER_MOVE_TO_TARGET = 2	,
    DOTA_UNIT_ORDER_ATTACK_MOVE = 3	,
    DOTA_UNIT_ORDER_ATTACK_TARGET = 4	,
    DOTA_UNIT_ORDER_CAST_POSITION = 5	,
    DOTA_UNIT_ORDER_CAST_TARGET = 6	,
    DOTA_UNIT_ORDER_CAST_TARGET_TREE = 7,	
    DOTA_UNIT_ORDER_CAST_NO_TARGET = 	8,	
    DOTA_UNIT_ORDER_CAST_TOGGLE = 9	,
    DOTA_UNIT_ORDER_HOLD_POSITION = 10,	
    DOTA_UNIT_ORDER_TRAIN_ABILITY = 11	,
    DOTA_UNIT_ORDER_DROP_ITEM = 12	,
    DOTA_UNIT_ORDER_GIVE_ITEM = 13	,
    DOTA_UNIT_ORDER_PICKUP_ITEM = 14,	
    DOTA_UNIT_ORDER_PICKUP_RUNE = 15,	
    DOTA_UNIT_ORDER_PURCHASE_ITEM = 16,	
    DOTA_UNIT_ORDER_SELL_ITEM = 17	,
    DOTA_UNIT_ORDER_DISASSEMBLE_ITEM = 18,	
    DOTA_UNIT_ORDER_MOVE_ITEM = 19	,
    DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO = 20,	
    DOTA_UNIT_ORDER_STOP = 21	,
    DOTA_UNIT_ORDER_TAUNT = 22	,
    DOTA_UNIT_ORDER_BUYBACK = 23,	
    DOTA_UNIT_ORDER_GLYPH = 24	,
    DOTA_UNIT_ORDER_EJECT_ITEM_FROM_STASH = 25,	
    DOTA_UNIT_ORDER_CAST_RUNE = 26	,
    DOTA_UNIT_ORDER_PING_ABILITY = 27	,
    DOTA_UNIT_ORDER_MOVE_TO_DIRECTION = 28	,
    DOTA_UNIT_ORDER_PATROL = 29	,
    DOTA_UNIT_ORDER_VECTOR_TARGET_POSITION = 30	,
    DOTA_UNIT_ORDER_RADAR = 31
}
declare enum AbilityLearnResult_t {
    ABILITY_CAN_BE_UPGRADED = 0	,
    ABILITY_CANNOT_BE_UPGRADED_NOT_UPGRADABLE = 1,
    ABILITY_CANNOT_BE_UPGRADED_AT_MAX = 2	,
    ABILITY_CANNOT_BE_UPGRADED_REQUIRES_LEVEL = 3	,
    ABILITY_NOT_LEARNABLE = 4
}

declare var $ : DollarStatic;
declare var GameEvents : CDOTA_PanoramaScript_GameEvents;
declare var Players : CScriptBindingPR_Players;
declare var Abilities : CScriptBindingPR_Abilities;
declare var Items : CScriptBindingPR_Items;
declare var Entities : CScriptBindingPR_Entities;
declare var Game : CScriptBindingPR_Game;