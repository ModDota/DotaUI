interface CDOTA_PanoramaScript_GameEvents {
    Subscribe(eventName:string, callback:Function);
}
//TODO: FINISH THIS
interface CScriptBindingPR_Players {
    GetLocalPlayer() : number;
    GetGold(playerID:number) : number;
    GetLocalPlayerPortraitUnit() : number;
    GetQueryUnit(playerID:number) : number;
}
interface CScriptBindingPR_Entities {
    IsEnemy(entityID:number) : boolean;
    PassivesDisabled(entityID:number) : boolean;
    IsSilenced(entityID:number) : boolean;
    IsHexed(entityID:number) : boolean;
    GetAbilityCount(entityID:number) : number;
    GetAbility(entityID:number, slot:number) : number;
    GetAbilityPoints(entityID:number) : number;
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
    GetAutoCastState(entityID:number) : number;
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
//TODO: Items

interface PrepareUnitOrdersArgument {
    OrderType : number; //TODO: enum
    AbilityIndex : number;
    ShowEffects: boolean;
}
interface CScriptBindingPR_Game {
    IsInAbilityLearnMode() : boolean;
    PrepareUnitOrders(order:PrepareUnitOrdersArgument) : void;
}

interface Panel {
    LoadLayoutAsync(path:String, unknown:boolean, unknown2:boolean) : void;
    RemoveAndDeleteChildren() : void;
    AddClass(name:String) : void;
    RemoveClass(name:String) : void;
    style : CSSStyleDeclaration;
    MoveChildAfter(child:Panel, afterChild:Panel) : void;
}
interface Label extends Panel {
    text : string;
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

declare module "dota" {
    export = $;
}
declare var $ : DollarStatic;
declare var GameEvents : CDOTA_PanoramaScript_GameEvents;
declare var Players : CScriptBindingPR_Players;
declare var Abilities : CScriptBindingPR_Abilities;
declare var Entities : CScriptBindingPR_Entities;
declare var Game : CScriptBindingPR_Game;