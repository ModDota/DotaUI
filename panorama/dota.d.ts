/*
    Typescript definition file of the DotA 2 Panorama API.

    This file contains information on the API and how it should be used. This file can be used
    just as reference, or when writing Typescript to compile into Panorama JS.

    To use this file with typescript for Panorama, install typescript and reference this file
    (make sure the path is correct):

    /// <reference path="../../../dota.d.ts" />

    Any javascript compiled from this typescript should be Panorama-compatible and run in Panorama.
    Issues or bugs in the definitions can be reported by making an issue on GitHub:
    https://github.com/ModDota/DotaUI.
*/

type abilityID = number;
type buffID = number;
type entityID = number;
type itemID = number;

interface CDOTA_PanoramaScript_GameEvents {
    /**
     * Subscribe to a game event
     */
    Subscribe(pEventName: string, funcVal: Function): number;

    /**
     * Unsubscribe from a game event
     */
    Unsubscribe(nCallbackHandle: number): void;

    /**
     * Send a custom game event
     */
    SendCustomGameEventToServer(pEventName: string, jsObject: any[]): void;

    /**
     * Send a client-side event using gameeventmanager (only useful for a few specific events)
     */
    SendEventClientSide(pEventName: string, jsObject: any[]): void;
}
interface CDOTA_PanoramaScript_GameUI {
    /**
     * Control whether the default UI is enabled
     */
    SetDefaultUIEnabled(nElementType: number, bVisible: boolean): void;

    /**
     * Get the current UI configuration
     */
    CustomUIConfig(): {};

    /**
     * Create a minimap ping at the given location
     */
    PingMinimapAtLocation(vec3: Function): void;

    /**
     * Install a mouse input filter
     */
    SetMouseCallback(callbackFn: Function): void;

    /**
     *
     */
    EnableAliMode(bEnable: boolean, nPort: number, offsetVal: Function, flScale: number): void;

    /**
     * Get the current mouse position.
     */
    GetCursorPosition(): void;

    /**
     * Return the entity index of the entity under the given screen position.
     */
    FindScreenEntities(screenPos: [number, number]): entityID[];

    /**
     * Get the world position of the screen position, or null if the cursor is out of the world.
     */
    GetScreenWorldPosition(screenPos: [number, number]): [number, number, number];

    /**
     * Install a mouse input filter
     */
    WasMousePressed(nButtonNum: number): boolean;

    /**
     * Install a mouse input filter
     */
    WasMouseDoublePressed(nButtonNum: number): boolean;

    /**
     * Install a mouse input filter
     */
    IsMouseDown(nButtonNum: number): boolean;

    /**
     * Is the shift button pressed?
     */
    IsShiftDown(): boolean;

    /**
     * Is the alt button pressed?
     */
    IsAltDown(): boolean;

    /**
     * Is the control button pressed?
     */
    IsControlDown(): boolean;

    /**
     * Get the current UI click interaction mode.
     */
    GetClickBehaviors(): CLICK_BEHAVIORS;

    /**
     * Select a unit, adding it to the group or replacing the current selection.
     */
    SelectUnit(nEntityIndex: number, bAddToGroup: boolean): void;

    /**
     * Set the minimum camera pitch angle.
     */
    SetCameraPitchMin(flPitchMin: number): void;

    /**
     * Set the maximum camera pitch angle.
     */
    SetCameraPitchMax(flPitchMax: number): void;

    /**
     * Set the camera's yaw.
     */
    SetCameraYaw(flCameraYaw: number): void;

    /**
     * Offset the camera's look at point.
     */
    SetCameraLookAtPositionHeightOffset(flCameraLookAtHeightOffset: number): void;

    /**
     * Set the camera distance from the look at point.
     */
    SetCameraDistance(flDistance: number): void;

    /**
     * Set the gap between the bottom of the screen and the game rendering viewport. (Value expressed as pixels in a normalized 1024x768 viewport.)
     */
    SetRenderBottomInsetOverride(nInset: number): void;

    /**
     * Set the gap between the top of the screen and the game rendering viewport. (Value expressed as pixels in a normalized 1024x768 viewport.)
     */
    SetRenderTopInsetOverride(nInset: number): void;

    /**
     * Set the camera target for the local player, or -1 to clear.
     */
    SetCameraTarget(nTargetEntIndex: number): void;

    /**
     * Set the camera target as position for the local player over specified lerp.
     */
    SetCameraTargetPosition(vec3: Function, flLerp: number): void;
}
interface TableValue {
    key: string;
    value: any;
}
interface CDOTA_PanoramaScript_CustomNetTables {
    /**
     * Get a key from a custom net table
     */
    GetTableValue(pTableName: string, pKeyName: string): any;

    /**
     * Get all values from a custom net table
     */
    GetAllTableValues(pTableName: string): TableValue[];

    /**
     * Register a callback when a particular custom net table changes
     */
    SubscribeNetTableListener(callback: (table_name: string, key: string, value: any) => void): void;

    /**
     * Unsubscribe from a game event
     */
    UnsubscribeNetTableListener(nCallbackHandle: number): void;
}
interface CScriptBindingPR_Players {
        /**
     * Get the maximum number of players in the game.
     */
    GetMaxPlayers(): number;

    /**
     * Get the maximum number of players on teams.
     */
    GetMaxTeamPlayers(): number;

    /**
     * Get the local player ID.
     */
    GetLocalPlayer(): number;

    /**
     * Is the nth player a valid player?
     */
    IsValidPlayerID(iPlayerID: number): boolean;

    /**
     * Return the name of a player.
     */
    GetPlayerName(iPlayerID: number): string;

    /**
     * Get the entity index of the hero controlled by this player.
     */
    GetPlayerHeroEntityIndex(iPlayerID: number): number;

    /**
     * Get the entities this player has selected.
     */
    GetSelectedEntities(iPlayerID: number): number[];

    /**
     * Get the entities this player is querying.
     */
    GetQueryUnit(iPlayerID: number): entityID;

    /**
     * Get local player current portrait unit. (ie. Player's hero or primary selected unit.)
     */
    GetLocalPlayerPortraitUnit(): entityID;

    /**
     * Can the player buy back?
     */
    CanPlayerBuyback(iPlayerID: number): boolean;

    /**
     * Does this player have a custom game ticket?
     */
    HasCustomGameTicketForPlayerID(iPlayerID: number): boolean;

    /**
     * The number of assists credited to a player.
     */
    GetAssists(iPlayerID: number): number;

    /**
     *
     */
    GetClaimedDenies(iPlayerID: number): number;

    /**
     *
     */
    GetClaimedMisses(iPlayerID: number): number;

    /**
     * The number of deaths a player has suffered.
     */
    GetDeaths(iPlayerID: number): number;

    /**
     * The number of denies credited to a player.
     */
    GetDenies(iPlayerID: number): number;

    /**
     * The amount of gold a player has.
     */
    GetGold(iPlayerID: number): number;

    /**
     * The number of kills credited to a player.
     */
    GetKills(iPlayerID: number): number;

    /**
     *
     */
    GetLastBuybackTime(iPlayerID: number): number;

    /**
     *
     */
    GetLastHitMultikill(iPlayerID: number): number;

    /**
     * The number of last hits credited to a player.
     */
    GetLastHits(iPlayerID: number): number;

    /**
     *
     */
    GetLastHitStreak(iPlayerID: number): number;

    /**
     * The current level of a player.
     */
    GetLevel(iPlayerID: number): number;

    /**
     *
     */
    GetMisses(iPlayerID: number): number;

    /**
     *
     */
    GetNearbyCreepDeaths(iPlayerID: number): number;

    /**
     * Total reliable gold for this player.
     */
    GetReliableGold(iPlayerID: number): number;

    /**
     *
     */
    GetRespawnSeconds(iPlayerID: number): number;

    /**
     *
     */
    GetStreak(iPlayerID: number): number;

    /**
     * Total gold earned in this game by this player.
     */
    GetTotalEarnedGold(iPlayerID: number): number;

    /**
     * Total xp earned in this game by this player.
     */
    GetTotalEarnedXP(iPlayerID: number): number;

    /**
     * Total unreliable gold for this player.
     */
    GetUnreliableGold(iPlayerID: number): number;

    /**
     * Get the team this player is on.
     */
    GetTeam(iPlayerID: number): DOTATeam_t;

    /**
     * Average gold earned per minute for this player.
     */
    GetGoldPerMin(iPlayerID: number): number;

    /**
     * Average xp earned per minute for this player.
     */
    GetXPPerMin(iPlayerID: number): number;

    /**
     * Return the name of the hero a player is controlling.
     */
    GetPlayerSelectedHero(iPlayerID: number): string;

    /**
     * Get the player color.
     */
    GetPlayerColor(iPlayerID: number): number;

    /**
     * Is this player a spectator.
     */
    IsSpectator(iPlayerID: number): boolean;

    /**
     * .
     */
    PlayerPortraitClicked(nClickedPlayerID: number, bHoldingCtrl: boolean, bHoldingAlt: boolean): void;

    /**
     * .
     */
    BuffClicked(nEntity: entityID, nBuffSerial: number, bAlert: boolean): void;
}
interface CScriptBindingPR_Entities {
    /**
     * Get the world origin of the entity.
     */
    GetAbsOrigin(nEntityIndex: entityID): [number, number, number];

    /**
     * Get the forward vector of the entity.
     */
    GetForward(nEntityIndex: entityID): [number, number, number];

    /**
     * Get the right vector of the entity.
     */
    GetRight(nEntityIndex: entityID): [number, number, number];

    /**
     * Get the up vector of the entity.
     */
    GetUp(nEntityIndex: entityID): [number, number, number];

    /**
     * Get all the building entities.
     */
    GetAllBuildingEntities(): entityID[];

    /**
     * Get all the hero entities.
     */
    GetAllHeroEntities(): entityID[];

    /**
     * Get all the entities with a given name.
     */
    GetAllEntitiesByName(pszName: string): entityID[];

    /**
     * Get all the entities with a given classname.
     */
    GetAllEntitiesByClassname(pszName: string): entityID[];

    /**
     * Get all the creature entities.
     */
    GetAllCreatureEntities(): entityID[];

    /**
     * Get all the entities.
     */
    GetAllEntities(): entityID[];

    /**
     * 
     */
    CanBeDominated(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    HasAttackCapability(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    HasCastableAbilities(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    HasFlyingVision(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    HasFlyMovementCapability(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    HasGroundMovementCapability(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    HasMovementCapability(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    HasScepter(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    HasUpgradeableAbilities(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    HasUpgradeableAbilitiesThatArentMaxed(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsAlive(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsAncient(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsAttackImmune(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsBarracks(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsBlind(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsBoss(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsRoshan(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsBuilding(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsCommandRestricted(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsConsideredHero(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsControllableByAnyPlayer(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsCourier(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsCreature(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsCreep(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsCreepHero(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsDeniable(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsDominated(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsEnemy(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsEvadeDisabled(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsFort(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsFrozen(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsGeneratedByEconItem(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsHallofFame(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsDisarmed(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsHero(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsHexed(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsIllusion(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsInRangeOfFountain(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsInventoryEnabled(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsInvisible(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsInvulnerable(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsLaneCreep(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsLowAttackPriority(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsMagicImmune(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsMuted(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsNeutralUnitType(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsNightmared(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsOther(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsOutOfGame(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsOwnedByAnyPlayer(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsPhantom(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsRangedAttacker(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsRealHero(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsRooted(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsSelectable(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsShop(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsSilenced(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsSpeciallyDeniable(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsStunned(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsSummoned(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsTower(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsUnselectable(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsWard(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsZombie(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    NoHealthBar(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    NoTeamMoveTo(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    NoTeamSelect(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    NotOnMinimap(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    NotOnMinimapForEnemies(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    NoUnitCollision(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    PassivesDisabled(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    ProvidesVision(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    UsesHeroAbilityNumbers(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    IsMoving(nEntityIndex: entityID): boolean;

    /**
     * 
     */
    GetAbilityCount(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetCombatClassAttack(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetCombatClassDefend(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetCurrentVisionRange(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetDamageBonus(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetDamageMax(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetDamageMin(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetDayTimeVisionRange(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetHealth(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetHealthPercent(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetHealthThinkRegen(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetLevel(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetMaxHealth(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetNightTimeVisionRange(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetStates(nEntityIndex: entityID): modifierstate[];

    /**
     * 
     */
    GetTotalPurchasedUpgradeGoldCost(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetTeamNumber(nEntityIndex: entityID): DOTATeam_t;

    /**
     * 
     */
    GetAttackRange(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetAttackSpeed(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetAttacksPerSecond(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetBaseAttackTime(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetBaseMagicalResistanceValue(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetBaseMoveSpeed(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetBonusPhysicalArmor(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetCollisionPadding(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetEffectiveInvisibilityLevel(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetHasteFactor(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetHullRadius(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetIdealSpeed(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetIncreasedAttackSpeed(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetMana(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetManaThinkRegen(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetMaxMana(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetMagicalArmorValue(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetPaddedCollisionRadius(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetPercentInvisible(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetPhysicalArmorValue(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetProjectileCollisionSize(nEntityIndex: entityID): number;

    /**
     * Returns the radius of the bounding ring of the unit.
     */
    GetRingRadius(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetSecondsPerAttack(nEntityIndex: entityID): number;

    /**
     * 
     */
    ManaFraction(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetClassname(nEntityIndex: entityID): string;

    /**
     * 
     */
    GetDisplayedUnitName(nEntityIndex: entityID): string;

    /**
     * 
     */
    GetSelectionGroup(nEntityIndex: entityID): string;

    /**
     * 
     */
    GetSoundSet(nEntityIndex: entityID): string;

    /**
     * 
     */
    GetUnitLabel(nEntityIndex: entityID): string;

    /**
     * 
     */
    GetUnitName(nEntityIndex: entityID): string;

    /**
     * 
     */
    GetTotalDamageTaken(nEntityIndex: entityID): number;

    /**
     * 
     */
    IsControllableByPlayer(nEntityIndex: entityID, nPlayerIndex: number): boolean;

    /**
     * 
     */
    GetChosenTarget(nEntityIndex: entityID): number;

    /**
     * 
     */
    HasItemInInventory(nEntityIndex: entityID, pItemName: string): boolean;

    /**
     * 
     */
    GetRangeToUnit(nEntityIndex: entityID, nEntityIndex2: entityID): number;

    /**
     * 
     */
    IsEntityInRange(nEntityIndex: entityID, nEntityIndex2: entityID, flRange: number): boolean;

    /**
     * 
     */
    GetMoveSpeedModifier(nEntityIndex: entityID, flBaseSpeed: number): number;

    /**
     * 
     */
    CanAcceptTargetToAttack(nEntityIndex: entityID, nEntityIndex2: entityID): boolean;

    /**
     * 
     */
    InState(nEntityIndex: entityID, nState: modifierstate): boolean;

    /**
     * 
     */
    GetArmorForDamageType(nEntityIndex: entityID, iDamageType: DAMAGE_TYPES): number;

    /**
     * 
     */
    GetArmorReductionForDamageType(nEntityIndex: entityID, iDamageType: DAMAGE_TYPES): number;

    /**
     * 
     */
    IsInRangeOfShop(nEntityIndex: entityID, iShopType: number, bSpecific: boolean): boolean;

    /**
     * 
     */
    GetNumItemsInStash(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetNumItemsInInventory(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetItemInSlot(nEntityIndex: entityID, nSlotIndex: number): itemID;

    /**
     * 
     */
    GetAbility(nEntityIndex: entityID, nSlotIndex: number): abilityID;

    /**
     * 
     */
    GetAbilityByName(nEntityIndex: entityID, pszAbilityName: string): abilityID;

    /**
     * 
     */
    GetNumBuffs(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetBuff(nEntityIndex: entityID, nBufIndex: number): buffID;

    /**
     * 
     */
    GetAbilityPoints(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetCurrentXP(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetNeededXPToLevel(nEntityIndex: entityID): number;

    /**
     * Get the currently selected entities
     */
    GetSelectionEntities(): entityID[];

    /**
     * Is this a valid entity index?
     */
    IsValidEntity(nEntityIndex: entityID): boolean;

    /**
     * Is this entity an item container in the world?
     */
    IsItemPhysical(nEntityIndex: entityID): boolean;

    /**
     * Get the item contained in this physical item container.
     */
    GetContainedItem(nEntityIndex: entityID): itemID;
}
interface CScriptBindingPR_Abilities {
    /**
     * 
     */
    GetAbilityName(nEntityIndex: abilityID): string;

    /**
     * 
     */
    GetAbilityTextureName(nEntityIndex: abilityID): string;

    /**
     * 
     */
    GetAssociatedPrimaryAbilities(nEntityIndex: abilityID): abilityID[];

    /**
     * 
     */
    GetAssociatedSecondaryAbilities(nEntityIndex: abilityID): abilityID[];

    /**
     * 
     */
    GetHotkeyOverride(nEntityIndex: abilityID): string;

    /**
     * 
     */
    GetIntrinsicModifierName(nEntityIndex: abilityID): string;

    /**
     * 
     */
    GetSharedCooldownName(nEntityIndex: abilityID): string;

    /**
     * 
     */
    AbilityReady(nEntityIndex: abilityID): number;

    /**
     * Returns an AbilityLearnResult_t
     */
    CanAbilityBeUpgraded(nEntityIndex: abilityID): AbilityLearnResult_t;

    /**
     * 
     */
    CanBeExecuted(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    GetAbilityDamage(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetAbilityDamageType(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetAbilityTargetFlags(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetAbilityTargetTeam(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetAbilityTargetType(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetAbilityType(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetBehavior(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetCastRange(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetChannelledManaCostPerSecond(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetCurrentCharges(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetEffectiveLevel(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetHeroLevelRequiredToUpgrade(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetLevel(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetManaCost(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetMaxLevel(nEntityIndex: abilityID): number;

    /**
     * 
     */
    AttemptToUpgrade(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    CanLearn(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    GetAutoCastState(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    GetToggleState(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    HasScepterUpgradeTooltip(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    IsActivated(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    IsActivatedChanging(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    IsAttributeBonus(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    IsAutocast(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    IsCooldownReady(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    IsDisplayedAbility(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    IsHidden(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    IsHiddenWhenStolen(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    IsInAbilityPhase(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    IsItem(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    IsMarkedAsDirty(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    IsMuted(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    IsOnCastbar(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    IsOnLearnbar(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    IsOwnersGoldEnough(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    IsOwnersGoldEnoughForUpgrade(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    IsOwnersManaEnough(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    IsPassive(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    IsRecipe(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    IsSharedWithTeammates(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    IsStealable(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    IsStolen(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    IsToggle(nEntityIndex: abilityID): boolean;

    /**
     * 
     */
    GetAOERadius(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetBackswingTime(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetCastPoint(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetChannelStartTime(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetChannelTime(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetCooldown(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetCooldownLength(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetCooldownTime(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetCooldownTimeRemaining(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetDuration(nEntityIndex: abilityID): number;

    /**
     * 
     */
    GetUpgradeBlend(nEntityIndex: abilityID): number;

    /**
     * Get the local player's current active ability. (Pre-cast targetting state.)
     */
    GetLocalPlayerActiveAbility(): abilityID;

    /**
     * 
     */
    GetCaster(nAbilityIndex: abilityID): entityID;

    /**
     * 
     */
    GetCustomValueFor(nAbilityIndex: abilityID, pszAbilityVarName: string): number;

    /**
     * 
     */
    GetLevelSpecialValueFor(nAbilityIndex: abilityID, szName: string, nLevel: number): number;

    /**
     * 
     */
    GetSpecialValueFor(nAbilityIndex: abilityID, szName: string): number;

    /**
     * 
     */
    IsCosmetic(nAbilityIndex: abilityID, nTargetEntityIndex: entityID): boolean;

    /**
     * Attempt to execute the specified ability (Equivalent to clicking the ability in the HUD action bar)
     */
    ExecuteAbility(nAbilityEntIndex: abilityID, nCasterEntIndex: entityID, bIsQuickCast: boolean): boolean;

    /**
     * Attempt to double-tap (self-cast) the specified ability (Equivalent to double-clicking the ability in the HUD action bar)
     */
    CreateDoubleTapCastOrder(nAbilityEntIndex: abilityID, nCasterEntIndex: entityID): void;

    /**
     * Ping the specified ability (Equivalent to alt-clicking the ability in the HUD action bar)
     */
    PingAbility(nAbilityIndex: abilityID): void;

    /**
     * Returns the keybind (as a string) for the specified ability.
     */
    GetKeybind(nAbilityEntIndex: abilityID): string;
}
interface CScriptBindingPR_Buffs {
    /**
     * Returns the name of the modifier.
     */
    GetName(nEntityIndex: entityID, nBuffIndex: buffID): string;

    /**
     * Returns the classname of the modifier.
     */
    GetClass(nEntityIndex: entityID, nBuffIndex: buffID): string;

    /**
     * Returns the modifier icon texture.
     */
    GetTexture(nEntityIndex: entityID, nBuffIndex: buffID): string;

    /**
     * Returns the total duration of the modifier.
     */
    GetDuration(nEntityIndex: entityID, nBuffIndex: buffID): number;

    /**
     * Returns the time at which the modifier will expire.
     */
    GetDieTime(nEntityIndex: entityID, nBuffIndex: buffID): number;

    /**
     * Returns the time until the modifier expires.
     */
    GetRemainingTime(nEntityIndex: entityID, nBuffIndex: buffID): number;

    /**
     * Returns the time elapsed since the creation of the modifier.
     */
    GetElapsedTime(nEntityIndex: entityID, nBuffIndex: buffID): number;

    /**
     * Returns the time at which the modifier was created.
     */
    GetCreationTime(nEntityIndex: entityID, nBuffIndex: buffID): number;

    /**
     * Returns the keybind (as a string) for the specified ability.
     */
    GetStackCount(nEntityIndex: entityID, nBuffIndex: buffID): number;

    /**
     * Returns true if the modifier is a debuff (red icon), false otherwise.
     */
    IsDebuff(nEntityIndex: entityID, nBuffIndex: buffID): boolean;

    /**
     * Returns the keybind (as a string) for the specified ability.
     */
    IsHidden(nEntityIndex: entityID, nBuffIndex: buffID): boolean;

    /**
     * Returns the entity that created the modifier (possibly on another entity).
     */
    GetCaster(nEntityIndex: entityID, nBuffIndex: buffID): entityID;

    /**
     * Returns the entity to which the modifier is applied.
     */
    GetParent(nEntityIndex: entityID, nBuffIndex: buffID): entityID;

    /**
     * Returns the ability associated with the modifier.
     */
    GetAbility(nEntityIndex: entityID, nBuffIndex: buffID): abilityID;
}
interface CScriptBindingPR_Items {
    /**
     *
     */
    ShouldDisplayCharges(nEntityIndex: itemID): boolean;

    /**
     *
     */
    AlwaysDisplayCharges(nEntityIndex: itemID): boolean;

    /**
     *
     */
    ShowSecondaryCharges(nEntityIndex: itemID): boolean;

    /**
     *
     */
    CanBeSoldByLocalPlayer(nEntityIndex: itemID): boolean;

    /**
     *
     */
    CanDoubleTapCast(nEntityIndex: itemID): boolean;

    /**
     *
     */
    ForceHideCharges(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsAlertableItem(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsCastOnPickup(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsDisassemblable(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsDroppable(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsInnatelyDisassemblable(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsKillable(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsMuted(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsPermanent(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsPurchasable(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsRecipe(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsRecipeGenerated(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsSellable(nEntityIndex: itemID): boolean;

    /**
     *
     */
    IsStackable(nEntityIndex: itemID): boolean;

    /**
     *
     */
    ProRatesChargesWhenSelling(nEntityIndex: itemID): boolean;

    /**
     *
     */
    RequiresCharges(nEntityIndex: itemID): boolean;

    /**
     *
     */
    CanBeExecuted(nEntityIndex: itemID): number;

    /**
     *
     */
    GetCost(nEntityIndex: itemID): number;

    /**
     *
     */
    GetCurrentCharges(nEntityIndex: itemID): number;

    /**
     *
     */
    GetSecondaryCharges(nEntityIndex: itemID): number;

    /**
     *
     */
    GetDisplayedCharges(nEntityIndex: itemID): number;

    /**
     *
     */
    GetInitialCharges(nEntityIndex: itemID): number;

    /**
     *
     */
    GetItemColor(nEntityIndex: itemID): number;

    /**
     *
     */
    GetShareability(nEntityIndex: itemID): EShareAbility;

    /**
     *
     */
    GetAbilityTextureSF(nEntityIndex: itemID): string;

    /**
     *
     */
    GetAssembledTime(nEntityIndex: itemID): number;

    /**
     *
     */
    GetPurchaseTime(nEntityIndex: itemID): number;

    /**
     *
     */
    GetPurchaser(nItemID: itemID): entityID;

    /**
     * Attempt to have the local player disassemble the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerDisassembleItem(nItem: itemID): boolean;

    /**
     * Attempt to have the local player drop the specified item from its stash. Returns false if the order wasn't issued.
     */
    LocalPlayerDropItemFromStash(nItem: itemID): boolean;

    /**
     * Attempt to have the local player alert allies about the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerItemAlertAllies(nItem: itemID): boolean;

    /**
     * Attempt to have the local player move the specified item to its stash. Returns false if the order wasn't issued.
     */
    LocalPlayerMoveItemToStash(nItem: itemID): boolean;

    /**
     * Attempt to have the local player sell the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerSellItem(nItem: itemID): boolean;
}

interface PrepareUnitOrdersArgument {
    OrderType?: dotaunitorder_t;
    TargetIndex?: number;
    Position?: [number, number, number];
    AbilityIndex?: number;
    OrderIssuer?: any; // TODO: OrderIssuer_t - not in enums, entityID?
    UnitIndex?: number;
    QueueBehavior?: OrderQueueBehavior_t;
    ShowEffects?: boolean;
}

interface CScriptBindingPR_Game {
    /**
     *
     */
    Time(): number;

    /**
     *
     */
    GetGameTime(): number;

    /**
     *
     */
    GetDOTATime(bIncludePreGame: boolean, bIncludeNegativeTime: boolean): number;

    /**
     *
     */
    IsGamePaused(): boolean;

    /**
     *
     */
    IsInToolsMode(): boolean;

    /**
     * Return the team id of the winning team.
     */
    GetGameWinner(): number;

    /**
     *
     */
    GetStateTransitionTime(): number;

    /**
     * Get the difficulty setting of the game.
     */
    GetCustomGameDifficulty(): number;

    /**
     * Returns true if the user has enabled flipped HUD
     */
    IsHUDFlipped(): boolean;

    /**
     * Returns the width of the display.
     */
    GetScreenWidth(): number;

    /**
     * Returns the height of the display.
     */
    GetScreenHeight(): number;

    /**
     * Converts the specified x,y,z world co-ordinate into an x screen coordinate. Returns -1 if behind the camera
     */
    WorldToScreenX(x: number, y: number, z: number): number;

    /**
     * Converts the specified x,y,z world co-ordinate into a y screen coordinate. Returns -1 if behind the camera
     */
    WorldToScreenY(x: number, y: number, z: number): number;

    /**
     * Converts the specified x, y screen coordinates into a x, y, z world coordinates.
     */
    ScreenXYToWorld(nX: number, nY: number): [number, number, number];

    /**
     * Returns the keybind (as a string) for the requested ability slot.
     */
    GetKeybindForAbility(iSlot: number): string;

    /**
     *
     */
    GetNianFightTimeLeft(): number;

    /**
     *
     */
    GetState(): DOTA_GameState;

    /**
     *
     */
    GameStateIs(nState: DOTA_GameState): boolean;

    /**
     *
     */
    GameStateIsBefore(nState: DOTA_GameState): boolean;

    /**
     *
     */
    GameStateIsAfter(nState: DOTA_GameState): boolean;

    /**
     *
     */
    AddCommand(pszCommandName: string, callback: Function, pszDescription: string, nFlags: number): void;

    /**
     *
     */
    GetLocalPlayerID(): number;

    /**
     * Assign the local player to the specified team
     */
    PlayerJoinTeam(nTeamID: DOTATeam_t): void;

    /**
     * Assign the currently unassigned players to teams
     */
    AutoAssignPlayersToTeams(): void;

    /**
     * Shuffle the team assignments of all of the players currently assigned to a team.
     */
    ShufflePlayerTeamAssignments(): void;

    /**
     * Set the remaining seconds in team setup before the game starts. -1 to stop the countdown timer
     */
    SetRemainingSetupTime(flSeconds: number): void;

    /**
     * Set the amount of time in seconds that will be set as the remaining time when all players are assigned to a team.
     */
    SetAutoLaunchDelay(flSeconds: number): void;

    /**
     * Enable or disable automatically starting the game once all players are assigned to a team
     */
    SetAutoLaunchEnabled(bEnable: boolean): void;

    /**
     * Return true of false indicating if automatically starting the game is enabled.
     */
    GetAutoLaunchEnabled(): boolean;

    /**
     * Lock the team selection preventing players from swiching teams.
     */
    SetTeamSelectionLocked(bLockTeams: boolean): void;

    /**
     * Returns true or false to indicate if team selection is locked
     */
    GetTeamSelectionLocked(): boolean;

    /**
     * Get all team IDs
     */
    GetAllTeamIDs(): DOTATeam_t[];

    /**
     * Get all player IDs
     */
    GetAllPlayerIDs(): number[];

    /**
     * Get unassigned player IDs
     */
    GetUnassignedPlayerIDs(): number[];

    /**
     * Get info about the player hero ultimate ability
     */
    GetPlayerUltimateStateOrTime(nPlayerID: number): number;

    /**
     * Whether the local player has muted text and voice chat for the specified player id
     */
    IsPlayerMuted(nPlayerID: number): boolean;

    /**
     * Set whether the local player has muted text and voice chat for the specified player id
     */
    SetPlayerMuted(nPlayerID: number, bMuted: boolean): void;

    /**
     * Get detailed information for the given team
     */
    GetTeamDetails(nTeam: number): Object;

    /**
     * Get details for the local player
     */
    GetLocalPlayerInfo(): Object;

    /**
     * Get info about the player items.
     */
    GetPlayerItems(nPlayerID: number): itemID[];

    /**
     * Get info about the given player
     */
    GetPlayerInfo(nPlayerID: number): Object;

    /**
     * Get player IDs for the given team
     */
    GetPlayerIDsOnTeam(nTeam: DOTATeam_t): number[];

    /**
     *
     */
    ServerCmd(pMsg: string): void;

    /**
     *
     */
    FinishGame(): void;

    /**
     * Emit a sound for the local player. Returns an integer handle that can be passed to StopSound. (Returns 0 on failure.)
     */
    EmitSound(pSoundEventName: string): number;

    /**
     * Stop a current playing sound on the local player. Takes handle from a call to EmitSound.
     */
    StopSound(nHandle: number): void;

    /**
     * Return information about the current map.
     */
    GetMapInfo(): Object;

    /**
     * Orders from the local player - takes a single arguments object that supports: dotaunitorder_t OrderType, ent_index TargetIndex, vector Position, ent_index AbilityIndex, OrderIssuer_t OrderIssuer, ent_index UnitIndex, OrderQueueBehavior_t QueueBehavior, bool ShowEffects.
     */
    PrepareUnitOrders(args: PrepareUnitOrdersArgument): void;

    /**
     * Order a unit to drop the specified item at the current cursor location.
     */
    DropItemAtCursor(nControlledUnitEnt: entityID, nItemEnt: itemID): void;

    /**
     *
     */
    EnterAbilityLearnMode(): void;

    /**
     *
     */
    EndAbilityLearnMode(): void;

    /**
     *
     */
    IsInAbilityLearnMode(): boolean;
}

interface DollarStatic {
    (selector: string) : Panel;
    CreatePanel(type: string, root: Panel, name: string): Panel;
    Msg(...args: any[]): void;
    GetContextPanel(): Panel;
    Schedule(time: number, callback: Function);
    DispatchEvent(event: string, reference?: Panel, ...args: any[]);
    Localize(token: string, parent?: Panel);
}

interface Panel {
    LoadLayoutAsync(path: string, unknown: boolean, unknown2: boolean): void;
    BLoadLayoutSnippet(path: string);
    RemoveAndDeleteChildren(): void;
    AddClass(name: string): void;
    RemoveClass(name: string): void;
    style: CSSStyleDeclaration;
    MoveChildAfter(child: Panel, afterChild: Panel): void;
    FindChildTraverse(id: string): Panel;
    BHasClass(className: string): boolean;
    SetPanelEvent(event: string, handler: Function): void;
    SetDialogVariableInt(field: string, value: number): void;
}

interface Label extends Panel {
    text: string;
}

interface Image extends Panel {
    /**
     * Sets the image of this Image.
     * Example: image.SetImage("s2r://panorama/images/hud/hudv2_iconglyph.png")
     */
    SetImage(path: string): void;
    SetScaling(scale: string): void;
}

interface AbilityImage extends Image {
    abilityname: string;
    contextEntityIndex: number;
}

interface ItemImage extends Image {
    itemname: string;
    contextEntityIndex: number;
}

declare enum DOTA_GameState {
    DOTA_GAMERULES_STATE_INIT = 0,
    DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD = 1,
    DOTA_GAMERULES_STATE_HERO_SELECTION = 3,
    DOTA_GAMERULES_STATE_STRATEGY_TIME = 4,
    DOTA_GAMERULES_STATE_PRE_GAME = 6,
    DOTA_GAMERULES_STATE_GAME_IN_PROGRESS = 7,
    DOTA_GAMERULES_STATE_POST_GAME = 8,
    DOTA_GAMERULES_STATE_DISCONNECT = 9,
    DOTA_GAMERULES_STATE_TEAM_SHOWCASE = 5,
    DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP = 2,
    DOTA_GAMERULES_STATE_LAST = 0
}

declare enum DOTA_GC_TEAM {
    DOTA_GC_TEAM_GOOD_GUYS = 0,
    DOTA_GC_TEAM_BAD_GUYS = 1,
    DOTA_GC_TEAM_BROADCASTER = 2,
    DOTA_GC_TEAM_SPECTATOR = 3,
    DOTA_GC_TEAM_PLAYER_POOL = 4,
    DOTA_GC_TEAM_NOTEAM = 5
}

declare enum DOTAConnectionState_t {
    DOTA_CONNECTION_STATE_UNKNOWN = 0,
    DOTA_CONNECTION_STATE_NOT_YET_CONNECTED = 1,
    DOTA_CONNECTION_STATE_CONNECTED = 2,
    DOTA_CONNECTION_STATE_DISCONNECTED = 3,
    DOTA_CONNECTION_STATE_ABANDONED = 4,
    DOTA_CONNECTION_STATE_LOADING = 5,
    DOTA_CONNECTION_STATE_FAILED = 6
}

declare enum dotaunitorder_t {
    DOTA_UNIT_ORDER_NONE = 0,
    DOTA_UNIT_ORDER_MOVE_TO_POSITION = 1,
    DOTA_UNIT_ORDER_MOVE_TO_TARGET = 2,
    DOTA_UNIT_ORDER_ATTACK_MOVE = 3,
    DOTA_UNIT_ORDER_ATTACK_TARGET = 4,
    DOTA_UNIT_ORDER_CAST_POSITION = 5,
    DOTA_UNIT_ORDER_CAST_TARGET = 6,
    DOTA_UNIT_ORDER_CAST_TARGET_TREE = 7,
    DOTA_UNIT_ORDER_CAST_NO_TARGET = 8,
    DOTA_UNIT_ORDER_CAST_TOGGLE = 9,
    DOTA_UNIT_ORDER_HOLD_POSITION = 10,
    DOTA_UNIT_ORDER_TRAIN_ABILITY = 11,
    DOTA_UNIT_ORDER_DROP_ITEM = 12,
    DOTA_UNIT_ORDER_GIVE_ITEM = 13,
    DOTA_UNIT_ORDER_PICKUP_ITEM = 14,
    DOTA_UNIT_ORDER_PICKUP_RUNE = 15,
    DOTA_UNIT_ORDER_PURCHASE_ITEM = 16,
    DOTA_UNIT_ORDER_SELL_ITEM = 17,
    DOTA_UNIT_ORDER_DISASSEMBLE_ITEM = 18,
    DOTA_UNIT_ORDER_MOVE_ITEM = 19,
    DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO = 20,
    DOTA_UNIT_ORDER_STOP = 21,
    DOTA_UNIT_ORDER_TAUNT = 22,
    DOTA_UNIT_ORDER_BUYBACK = 23,
    DOTA_UNIT_ORDER_GLYPH = 24,
    DOTA_UNIT_ORDER_EJECT_ITEM_FROM_STASH = 25,
    DOTA_UNIT_ORDER_CAST_RUNE = 26,
    DOTA_UNIT_ORDER_PING_ABILITY = 27,
    DOTA_UNIT_ORDER_MOVE_TO_DIRECTION = 28,
    DOTA_UNIT_ORDER_PATROL = 29,
    DOTA_UNIT_ORDER_VECTOR_TARGET_POSITION = 30,
    DOTA_UNIT_ORDER_RADAR = 31,
    DOTA_UNIT_ORDER_SET_ITEM_COMBINE_LOCK = 32,
    DOTA_UNIT_ORDER_CONTINUE = 33
}

declare enum DOTA_OVERHEAD_ALERT {
    OVERHEAD_ALERT_GOLD = 0,
    OVERHEAD_ALERT_DENY = 1,
    OVERHEAD_ALERT_CRITICAL = 2,
    OVERHEAD_ALERT_XP = 3,
    OVERHEAD_ALERT_BONUS_SPELL_DAMAGE = 4,
    OVERHEAD_ALERT_MISS = 5,
    OVERHEAD_ALERT_DAMAGE = 6,
    OVERHEAD_ALERT_EVADE = 7,
    OVERHEAD_ALERT_BLOCK = 8,
    OVERHEAD_ALERT_BONUS_POISON_DAMAGE = 9,
    OVERHEAD_ALERT_HEAL = 10,
    OVERHEAD_ALERT_MANA_ADD = 11,
    OVERHEAD_ALERT_MANA_LOSS = 12,
    OVERHEAD_ALERT_LAST_HIT_EARLY = 13,
    OVERHEAD_ALERT_LAST_HIT_CLOSE = 14,
    OVERHEAD_ALERT_LAST_HIT_MISS = 15,
    OVERHEAD_ALERT_MAGICAL_BLOCK = 16
}

declare enum DOTA_HeroPickState {
    DOTA_HEROPICK_STATE_NONE = 0,
    DOTA_HEROPICK_STATE_AP_SELECT = 1,
    DOTA_HEROPICK_STATE_SD_SELECT = 2,
    DOTA_HEROPICK_STATE_INTRO_SELECT = 3,
    DOTA_HEROPICK_STATE_RD_SELECT = 4,
    DOTA_HEROPICK_STATE_CM_INTRO = 5,
    DOTA_HEROPICK_STATE_CM_CAPTAINPICK = 6,
    DOTA_HEROPICK_STATE_CM_BAN1 = 7,
    DOTA_HEROPICK_STATE_CM_BAN2 = 8,
    DOTA_HEROPICK_STATE_CM_BAN3 = 9,
    DOTA_HEROPICK_STATE_CM_BAN4 = 10,
    DOTA_HEROPICK_STATE_CM_BAN5 = 11,
    DOTA_HEROPICK_STATE_CM_BAN6 = 12,
    DOTA_HEROPICK_STATE_CM_BAN7 = 13,
    DOTA_HEROPICK_STATE_CM_BAN8 = 14,
    DOTA_HEROPICK_STATE_CM_BAN9 = 15,
    DOTA_HEROPICK_STATE_CM_BAN10 = 16,
    DOTA_HEROPICK_STATE_CM_SELECT1 = 17,
    DOTA_HEROPICK_STATE_CM_SELECT2 = 18,
    DOTA_HEROPICK_STATE_CM_SELECT3 = 19,
    DOTA_HEROPICK_STATE_CM_SELECT4 = 20,
    DOTA_HEROPICK_STATE_CM_SELECT5 = 21,
    DOTA_HEROPICK_STATE_CM_SELECT6 = 22,
    DOTA_HEROPICK_STATE_CM_SELECT7 = 23,
    DOTA_HEROPICK_STATE_CM_SELECT8 = 24,
    DOTA_HEROPICK_STATE_CM_SELECT9 = 25,
    DOTA_HEROPICK_STATE_CM_SELECT10 = 26,
    DOTA_HEROPICK_STATE_CM_PICK = 27,
    DOTA_HEROPICK_STATE_AR_SELECT = 28,
    DOTA_HEROPICK_STATE_MO_SELECT = 29,
    DOTA_HEROPICK_STATE_FH_SELECT = 30,
    DOTA_HEROPICK_STATE_CD_INTRO = 31,
    DOTA_HEROPICK_STATE_CD_CAPTAINPICK = 32,
    DOTA_HEROPICK_STATE_CD_BAN1 = 33,
    DOTA_HEROPICK_STATE_CD_BAN2 = 34,
    DOTA_HEROPICK_STATE_CD_BAN3 = 35,
    DOTA_HEROPICK_STATE_CD_BAN4 = 36,
    DOTA_HEROPICK_STATE_CD_BAN5 = 37,
    DOTA_HEROPICK_STATE_CD_BAN6 = 38,
    DOTA_HEROPICK_STATE_CD_SELECT1 = 39,
    DOTA_HEROPICK_STATE_CD_SELECT2 = 40,
    DOTA_HEROPICK_STATE_CD_SELECT3 = 41,
    DOTA_HEROPICK_STATE_CD_SELECT4 = 42,
    DOTA_HEROPICK_STATE_CD_SELECT5 = 43,
    DOTA_HEROPICK_STATE_CD_SELECT6 = 44,
    DOTA_HEROPICK_STATE_CD_SELECT7 = 45,
    DOTA_HEROPICK_STATE_CD_SELECT8 = 46,
    DOTA_HEROPICK_STATE_CD_SELECT9 = 47,
    DOTA_HEROPICK_STATE_CD_SELECT10 = 48,
    DOTA_HEROPICK_STATE_CD_PICK = 49,
    DOTA_HEROPICK_STATE_BD_SELECT = 50,
    DOTA_HERO_PICK_STATE_ABILITY_DRAFT_SELECT = 51,
    DOTA_HERO_PICK_STATE_ARDM_SELECT = 52,
    DOTA_HEROPICK_STATE_ALL_DRAFT_SELECT = 53,
    DOTA_HERO_PICK_STATE_CUSTOMGAME_SELECT = 54,
    DOTA_HEROPICK_STATE_COUNT = 55
}

declare enum DOTATeam_t {
    DOTA_TEAM_FIRST = 2,
    DOTA_TEAM_GOODGUYS = 2,
    DOTA_TEAM_BADGUYS = 3,
    DOTA_TEAM_NEUTRALS = 4,
    DOTA_TEAM_NOTEAM = 5,
    DOTA_TEAM_CUSTOM_1 = 6,
    DOTA_TEAM_CUSTOM_2 = 7,
    DOTA_TEAM_CUSTOM_3 = 8,
    DOTA_TEAM_CUSTOM_4 = 9,
    DOTA_TEAM_CUSTOM_5 = 10,
    DOTA_TEAM_CUSTOM_6 = 11,
    DOTA_TEAM_CUSTOM_7 = 12,
    DOTA_TEAM_CUSTOM_8 = 13,
    DOTA_TEAM_COUNT = 14,
    DOTA_TEAM_CUSTOM_MIN = 6,
    DOTA_TEAM_CUSTOM_MAX = 13,
    DOTA_TEAM_CUSTOM_COUNT = 8
}

declare enum DOTA_RUNES {
    DOTA_RUNE_INVALID = -1,
    DOTA_RUNE_DOUBLEDAMAGE = 0,
    DOTA_RUNE_HASTE = 1,
    DOTA_RUNE_ILLUSION = 2,
    DOTA_RUNE_INVISIBILITY = 3,
    DOTA_RUNE_REGENERATION = 4,
    DOTA_RUNE_BOUNTY = 5,
    DOTA_RUNE_ARCANE = 6,
    DOTA_RUNE_COUNT = 7
}

declare enum DOTA_UNIT_TARGET_TEAM {
    DOTA_UNIT_TARGET_TEAM_NONE = 0,
    DOTA_UNIT_TARGET_TEAM_FRIENDLY = 1,
    DOTA_UNIT_TARGET_TEAM_ENEMY = 2,
    DOTA_UNIT_TARGET_TEAM_CUSTOM = 4,
    DOTA_UNIT_TARGET_TEAM_BOTH = 3
}

declare enum DOTA_UNIT_TARGET_TYPE {
    DOTA_UNIT_TARGET_NONE = 0,
    DOTA_UNIT_TARGET_HERO = 1,
    DOTA_UNIT_TARGET_CREEP = 2,
    DOTA_UNIT_TARGET_BUILDING = 4,
    DOTA_UNIT_TARGET_COURIER = 16,
    DOTA_UNIT_TARGET_OTHER = 32,
    DOTA_UNIT_TARGET_TREE = 64,
    DOTA_UNIT_TARGET_CUSTOM = 128,
    DOTA_UNIT_TARGET_BASIC = 18,
    DOTA_UNIT_TARGET_ALL = 55
}

declare enum DOTA_UNIT_TARGET_FLAGS {
    DOTA_UNIT_TARGET_FLAG_NONE = 0,
    DOTA_UNIT_TARGET_FLAG_RANGED_ONLY = 2,
    DOTA_UNIT_TARGET_FLAG_MELEE_ONLY = 4,
    DOTA_UNIT_TARGET_FLAG_DEAD = 8,
    DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES = 16,
    DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES = 32,
    DOTA_UNIT_TARGET_FLAG_INVULNERABLE = 64,
    DOTA_UNIT_TARGET_FLAG_FOW_VISIBLE = 128,
    DOTA_UNIT_TARGET_FLAG_NO_INVIS = 256,
    DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS = 512,
    DOTA_UNIT_TARGET_FLAG_PLAYER_CONTROLLED = 1024,
    DOTA_UNIT_TARGET_FLAG_NOT_DOMINATED = 2048,
    DOTA_UNIT_TARGET_FLAG_NOT_SUMMONED = 4096,
    DOTA_UNIT_TARGET_FLAG_NOT_ILLUSIONS = 8192,
    DOTA_UNIT_TARGET_FLAG_NOT_ATTACK_IMMUNE = 16384,
    DOTA_UNIT_TARGET_FLAG_MANA_ONLY = 32768,
    DOTA_UNIT_TARGET_FLAG_CHECK_DISABLE_HELP = 65536,
    DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO = 131072,
    DOTA_UNIT_TARGET_FLAG_OUT_OF_WORLD = 262144,
    DOTA_UNIT_TARGET_FLAG_NOT_NIGHTMARED = 524288,
    DOTA_UNIT_TARGET_FLAG_PREFER_ENEMIES = 1048576
}

declare enum DOTALimits_t {
    DOTA_MAX_PLAYERS = 64,
    DOTA_MAX_TEAM = 24,
    DOTA_MAX_PLAYER_TEAMS = 10,
    DOTA_MAX_TEAM_PLAYERS = 24,
    DOTA_MAX_SPECTATOR_TEAM_SIZE = 40,
    DOTA_DEFAULT_MAX_TEAM = 5,
    DOTA_DEFAULT_MAX_TEAM_PLAYERS = 10
}

declare enum DOTAInventoryFlags_t {
    DOTA_INVENTORY_ALLOW_NONE = 0,
    DOTA_INVENTORY_ALLOW_MAIN = 1,
    DOTA_INVENTORY_ALLOW_STASH = 2,
    DOTA_INVENTORY_ALLOW_DROP_ON_GROUND = 4,
    DOTA_INVENTORY_ALLOW_DROP_AT_FOUNTAIN = 8,
    DOTA_INVENTORY_LIMIT_DROP_ON_GROUND = 16,
    DOTA_INVENTORY_ALL_ACCESS = 3
}

declare enum EDOTA_ModifyGold_Reason {
    DOTA_ModifyGold_Unspecified = 0,
    DOTA_ModifyGold_Death = 1,
    DOTA_ModifyGold_Buyback = 2,
    DOTA_ModifyGold_PurchaseConsumable = 3,
    DOTA_ModifyGold_PurchaseItem = 4,
    DOTA_ModifyGold_AbandonedRedistribute = 5,
    DOTA_ModifyGold_SellItem = 6,
    DOTA_ModifyGold_AbilityCost = 7,
    DOTA_ModifyGold_CheatCommand = 8,
    DOTA_ModifyGold_SelectionPenalty = 9,
    DOTA_ModifyGold_GameTick = 10,
    DOTA_ModifyGold_Building = 11,
    DOTA_ModifyGold_HeroKill = 12,
    DOTA_ModifyGold_CreepKill = 13,
    DOTA_ModifyGold_RoshanKill = 14,
    DOTA_ModifyGold_CourierKill = 15,
    DOTA_ModifyGold_SharedGold = 16
}

declare enum DOTAUnitAttackCapability_t {
    DOTA_UNIT_CAP_NO_ATTACK = 0,
    DOTA_UNIT_CAP_MELEE_ATTACK = 1,
    DOTA_UNIT_CAP_RANGED_ATTACK = 2
}

declare enum DOTAUnitMoveCapability_t {
    DOTA_UNIT_CAP_MOVE_NONE = 0,
    DOTA_UNIT_CAP_MOVE_GROUND = 1,
    DOTA_UNIT_CAP_MOVE_FLY = 2
}

declare enum EShareAbility {
    ITEM_FULLY_SHAREABLE = 0,
    ITEM_PARTIALLY_SHAREABLE = 1,
    ITEM_NOT_SHAREABLE = 2
}

declare enum DOTAMusicStatus_t {
    DOTA_MUSIC_STATUS_NONE = 0,
    DOTA_MUSIC_STATUS_EXPLORATION = 1,
    DOTA_MUSIC_STATUS_BATTLE = 2,
    DOTA_MUSIC_STATUS_PRE_GAME_EXPLORATION = 3,
    DOTA_MUSIC_STATUS_DEAD = 4,
    DOTA_MUSIC_STATUS_LAST = 5
}

declare enum DOTA_ABILITY_BEHAVIOR {
    DOTA_ABILITY_BEHAVIOR_NONE = 0,
    DOTA_ABILITY_BEHAVIOR_HIDDEN = 1,
    DOTA_ABILITY_BEHAVIOR_PASSIVE = 2,
    DOTA_ABILITY_BEHAVIOR_NO_TARGET = 4,
    DOTA_ABILITY_BEHAVIOR_UNIT_TARGET = 8,
    DOTA_ABILITY_BEHAVIOR_POINT = 16,
    DOTA_ABILITY_BEHAVIOR_AOE = 32,
    DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE = 64,
    DOTA_ABILITY_BEHAVIOR_CHANNELLED = 128,
    DOTA_ABILITY_BEHAVIOR_ITEM = 256,
    DOTA_ABILITY_BEHAVIOR_TOGGLE = 512,
    DOTA_ABILITY_BEHAVIOR_DIRECTIONAL = 1024,
    DOTA_ABILITY_BEHAVIOR_IMMEDIATE = 2048,
    DOTA_ABILITY_BEHAVIOR_AUTOCAST = 4096,
    DOTA_ABILITY_BEHAVIOR_OPTIONAL_UNIT_TARGET = 8192,
    DOTA_ABILITY_BEHAVIOR_OPTIONAL_POINT = 16384,
    DOTA_ABILITY_BEHAVIOR_OPTIONAL_NO_TARGET = 32768,
    DOTA_ABILITY_BEHAVIOR_AURA = 65536,
    DOTA_ABILITY_BEHAVIOR_ATTACK = 131072,
    DOTA_ABILITY_BEHAVIOR_DONT_RESUME_MOVEMENT = 262144,
    DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES = 524288,
    DOTA_ABILITY_BEHAVIOR_UNRESTRICTED = 1048576,
    DOTA_ABILITY_BEHAVIOR_IGNORE_PSEUDO_QUEUE = 2097152,
    DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL = 4194304,
    DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_MOVEMENT = 8388608,
    DOTA_ABILITY_BEHAVIOR_DONT_ALERT_TARGET = 16777216,
    DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK = 33554432,
    DOTA_ABILITY_BEHAVIOR_NORMAL_WHEN_STOLEN = 67108864,
    DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING = 134217728,
    DOTA_ABILITY_BEHAVIOR_RUNE_TARGET = 268435456,
    DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_CHANNEL = 536870912,
    DOTA_ABILITY_BEHAVIOR_VECTOR_TARGETING = 1073741824,
    DOTA_ABILITY_LAST_BEHAVIOR = 1073741824
}

declare enum DAMAGE_TYPES {
    DAMAGE_TYPE_NONE = 0,
    DAMAGE_TYPE_PHYSICAL = 1,
    DAMAGE_TYPE_MAGICAL = 2,
    DAMAGE_TYPE_PURE = 4,
    DAMAGE_TYPE_HP_REMOVAL = 8,
    DAMAGE_TYPE_ALL = 7
}

declare enum ABILITY_TYPES {
    ABILITY_TYPE_BASIC = 0,
    ABILITY_TYPE_ULTIMATE = 1,
    ABILITY_TYPE_ATTRIBUTES = 2,
    ABILITY_TYPE_HIDDEN = 3
}

declare enum SPELL_IMMUNITY_TYPES {
    SPELL_IMMUNITY_NONE = 0,
    SPELL_IMMUNITY_ALLIES_YES = 1,
    SPELL_IMMUNITY_ALLIES_NO = 2,
    SPELL_IMMUNITY_ENEMIES_YES = 3,
    SPELL_IMMUNITY_ENEMIES_NO = 4
}

declare enum DOTADamageFlag_t {
    DOTA_DAMAGE_FLAG_NONE = 0,
    DOTA_DAMAGE_FLAG_IGNORES_MAGIC_ARMOR = 1,
    DOTA_DAMAGE_FLAG_IGNORES_PHYSICAL_ARMOR = 2,
    DOTA_DAMAGE_FLAG_BYPASSES_INVULNERABILITY = 4,
    DOTA_DAMAGE_FLAG_BYPASSES_BLOCK = 8,
    DOTA_DAMAGE_FLAG_REFLECTION = 16,
    DOTA_DAMAGE_FLAG_HPLOSS = 32,
    DOTA_DAMAGE_FLAG_NO_DIRECTOR_EVENT = 64,
    DOTA_DAMAGE_FLAG_NON_LETHAL = 128,
    DOTA_DAMAGE_FLAG_USE_COMBAT_PROFICIENCY = 256,
    DOTA_DAMAGE_FLAG_NO_DAMAGE_MULTIPLIERS = 512
}

declare enum EDOTA_ModifyXP_Reason {
    DOTA_ModifyXP_Unspecified = 0,
    DOTA_ModifyXP_HeroKill = 1,
    DOTA_ModifyXP_CreepKill = 2,
    DOTA_ModifyXP_RoshanKill = 3
}

declare enum GameActivity_t {
    ACT_DOTA_IDLE = 1500,
    ACT_DOTA_IDLE_RARE = 1501,
    ACT_DOTA_RUN = 1502,
    ACT_DOTA_ATTACK = 1503,
    ACT_DOTA_ATTACK2 = 1504,
    ACT_DOTA_ATTACK_EVENT = 1505,
    ACT_DOTA_DIE = 1506,
    ACT_DOTA_FLINCH = 1507,
    ACT_DOTA_FLAIL = 1508,
    ACT_DOTA_DISABLED = 1509,
    ACT_DOTA_CAST_ABILITY_1 = 1510,
    ACT_DOTA_CAST_ABILITY_2 = 1511,
    ACT_DOTA_CAST_ABILITY_3 = 1512,
    ACT_DOTA_CAST_ABILITY_4 = 1513,
    ACT_DOTA_CAST_ABILITY_5 = 1514,
    ACT_DOTA_CAST_ABILITY_6 = 1515,
    ACT_DOTA_OVERRIDE_ABILITY_1 = 1516,
    ACT_DOTA_OVERRIDE_ABILITY_2 = 1517,
    ACT_DOTA_OVERRIDE_ABILITY_3 = 1518,
    ACT_DOTA_OVERRIDE_ABILITY_4 = 1519,
    ACT_DOTA_CHANNEL_ABILITY_1 = 1520,
    ACT_DOTA_CHANNEL_ABILITY_2 = 1521,
    ACT_DOTA_CHANNEL_ABILITY_3 = 1522,
    ACT_DOTA_CHANNEL_ABILITY_4 = 1523,
    ACT_DOTA_CHANNEL_ABILITY_5 = 1524,
    ACT_DOTA_CHANNEL_ABILITY_6 = 1525,
    ACT_DOTA_CHANNEL_END_ABILITY_1 = 1526,
    ACT_DOTA_CHANNEL_END_ABILITY_2 = 1527,
    ACT_DOTA_CHANNEL_END_ABILITY_3 = 1528,
    ACT_DOTA_CHANNEL_END_ABILITY_4 = 1529,
    ACT_DOTA_CHANNEL_END_ABILITY_5 = 1530,
    ACT_DOTA_CHANNEL_END_ABILITY_6 = 1531,
    ACT_DOTA_CONSTANT_LAYER = 1532,
    ACT_DOTA_CAPTURE = 1533,
    ACT_DOTA_SPAWN = 1534,
    ACT_DOTA_KILLTAUNT = 1535,
    ACT_DOTA_TAUNT = 1536,
    ACT_DOTA_THIRST = 1537,
    ACT_DOTA_CAST_DRAGONBREATH = 1538,
    ACT_DOTA_ECHO_SLAM = 1539,
    ACT_DOTA_CAST_ABILITY_1_END = 1540,
    ACT_DOTA_CAST_ABILITY_2_END = 1541,
    ACT_DOTA_CAST_ABILITY_3_END = 1542,
    ACT_DOTA_CAST_ABILITY_4_END = 1543,
    ACT_MIRANA_LEAP_END = 1544,
    ACT_WAVEFORM_START = 1545,
    ACT_WAVEFORM_END = 1546,
    ACT_DOTA_CAST_ABILITY_ROT = 1547,
    ACT_DOTA_DIE_SPECIAL = 1548,
    ACT_DOTA_RATTLETRAP_BATTERYASSAULT = 1549,
    ACT_DOTA_RATTLETRAP_POWERCOGS = 1550,
    ACT_DOTA_RATTLETRAP_HOOKSHOT_START = 1551,
    ACT_DOTA_RATTLETRAP_HOOKSHOT_LOOP = 1552,
    ACT_DOTA_RATTLETRAP_HOOKSHOT_END = 1553,
    ACT_STORM_SPIRIT_OVERLOAD_RUN_OVERRIDE = 1554,
    ACT_DOTA_TINKER_REARM1 = 1555,
    ACT_DOTA_TINKER_REARM2 = 1556,
    ACT_DOTA_TINKER_REARM3 = 1557,
    ACT_TINY_AVALANCHE = 1558,
    ACT_TINY_TOSS = 1559,
    ACT_TINY_GROWL = 1560,
    ACT_DOTA_WEAVERBUG_ATTACH = 1561,
    ACT_DOTA_CAST_WILD_AXES_END = 1562,
    ACT_DOTA_CAST_LIFE_BREAK_START = 1563,
    ACT_DOTA_CAST_LIFE_BREAK_END = 1564,
    ACT_DOTA_NIGHTSTALKER_TRANSITION = 1565,
    ACT_DOTA_LIFESTEALER_RAGE = 1566,
    ACT_DOTA_LIFESTEALER_OPEN_WOUNDS = 1567,
    ACT_DOTA_SAND_KING_BURROW_IN = 1568,
    ACT_DOTA_SAND_KING_BURROW_OUT = 1569,
    ACT_DOTA_EARTHSHAKER_TOTEM_ATTACK = 1570,
    ACT_DOTA_WHEEL_LAYER = 1571,
    ACT_DOTA_ALCHEMIST_CHEMICAL_RAGE_START = 1572,
    ACT_DOTA_ALCHEMIST_CONCOCTION = 1573,
    ACT_DOTA_JAKIRO_LIQUIDFIRE_START = 1574,
    ACT_DOTA_JAKIRO_LIQUIDFIRE_LOOP = 1575,
    ACT_DOTA_LIFESTEALER_INFEST = 1576,
    ACT_DOTA_LIFESTEALER_INFEST_END = 1577,
    ACT_DOTA_LASSO_LOOP = 1578,
    ACT_DOTA_ALCHEMIST_CONCOCTION_THROW = 1579,
    ACT_DOTA_ALCHEMIST_CHEMICAL_RAGE_END = 1580,
    ACT_DOTA_CAST_COLD_SNAP = 1581,
    ACT_DOTA_CAST_GHOST_WALK = 1582,
    ACT_DOTA_CAST_TORNADO = 1583,
    ACT_DOTA_CAST_EMP = 1584,
    ACT_DOTA_CAST_ALACRITY = 1585,
    ACT_DOTA_CAST_CHAOS_METEOR = 1586,
    ACT_DOTA_CAST_SUN_STRIKE = 1587,
    ACT_DOTA_CAST_FORGE_SPIRIT = 1588,
    ACT_DOTA_CAST_ICE_WALL = 1589,
    ACT_DOTA_CAST_DEAFENING_BLAST = 1590,
    ACT_DOTA_VICTORY = 1591,
    ACT_DOTA_DEFEAT = 1592,
    ACT_DOTA_SPIRIT_BREAKER_CHARGE_POSE = 1593,
    ACT_DOTA_SPIRIT_BREAKER_CHARGE_END = 1594,
    ACT_DOTA_TELEPORT = 1595,
    ACT_DOTA_TELEPORT_END = 1596,
    ACT_DOTA_CAST_REFRACTION = 1597,
    ACT_DOTA_CAST_ABILITY_7 = 1598,
    ACT_DOTA_CANCEL_SIREN_SONG = 1599,
    ACT_DOTA_CHANNEL_ABILITY_7 = 1600,
    ACT_DOTA_LOADOUT = 1601,
    ACT_DOTA_FORCESTAFF_END = 1602,
    ACT_DOTA_POOF_END = 1603,
    ACT_DOTA_SLARK_POUNCE = 1604,
    ACT_DOTA_MAGNUS_SKEWER_START = 1605,
    ACT_DOTA_MAGNUS_SKEWER_END = 1606,
    ACT_DOTA_MEDUSA_STONE_GAZE = 1607,
    ACT_DOTA_RELAX_START = 1608,
    ACT_DOTA_RELAX_LOOP = 1609,
    ACT_DOTA_RELAX_END = 1610,
    ACT_DOTA_CENTAUR_STAMPEDE = 1611,
    ACT_DOTA_BELLYACHE_START = 1612,
    ACT_DOTA_BELLYACHE_LOOP = 1613,
    ACT_DOTA_BELLYACHE_END = 1614,
    ACT_DOTA_ROQUELAIRE_LAND = 1615,
    ACT_DOTA_ROQUELAIRE_LAND_IDLE = 1616,
    ACT_DOTA_GREEVIL_CAST = 1617,
    ACT_DOTA_GREEVIL_OVERRIDE_ABILITY = 1618,
    ACT_DOTA_GREEVIL_HOOK_START = 1619,
    ACT_DOTA_GREEVIL_HOOK_END = 1620,
    ACT_DOTA_GREEVIL_BLINK_BONE = 1621,
    ACT_DOTA_IDLE_SLEEPING = 1622,
    ACT_DOTA_INTRO = 1623,
    ACT_DOTA_GESTURE_POINT = 1624,
    ACT_DOTA_GESTURE_ACCENT = 1625,
    ACT_DOTA_SLEEPING_END = 1626,
    ACT_DOTA_AMBUSH = 1627,
    ACT_DOTA_ITEM_LOOK = 1628,
    ACT_DOTA_STARTLE = 1629,
    ACT_DOTA_FRUSTRATION = 1630,
    ACT_DOTA_TELEPORT_REACT = 1631,
    ACT_DOTA_TELEPORT_END_REACT = 1632,
    ACT_DOTA_SHRUG = 1633,
    ACT_DOTA_RELAX_LOOP_END = 1634,
    ACT_DOTA_PRESENT_ITEM = 1635,
    ACT_DOTA_IDLE_IMPATIENT = 1636,
    ACT_DOTA_SHARPEN_WEAPON = 1637,
    ACT_DOTA_SHARPEN_WEAPON_OUT = 1638,
    ACT_DOTA_IDLE_SLEEPING_END = 1639,
    ACT_DOTA_BRIDGE_DESTROY = 1640,
    ACT_DOTA_TAUNT_SNIPER = 1641,
    ACT_DOTA_DEATH_BY_SNIPER = 1642,
    ACT_DOTA_LOOK_AROUND = 1643,
    ACT_DOTA_CAGED_CREEP_RAGE = 1644,
    ACT_DOTA_CAGED_CREEP_RAGE_OUT = 1645,
    ACT_DOTA_CAGED_CREEP_SMASH = 1646,
    ACT_DOTA_CAGED_CREEP_SMASH_OUT = 1647,
    ACT_DOTA_IDLE_IMPATIENT_SWORD_TAP = 1648,
    ACT_DOTA_INTRO_LOOP = 1649,
    ACT_DOTA_BRIDGE_THREAT = 1650,
    ACT_DOTA_DAGON = 1651,
    ACT_DOTA_CAST_ABILITY_2_ES_ROLL_START = 1652,
    ACT_DOTA_CAST_ABILITY_2_ES_ROLL = 1653,
    ACT_DOTA_CAST_ABILITY_2_ES_ROLL_END = 1654,
    ACT_DOTA_NIAN_PIN_START = 1655,
    ACT_DOTA_NIAN_PIN_LOOP = 1656,
    ACT_DOTA_NIAN_PIN_END = 1657,
    ACT_DOTA_LEAP_STUN = 1658,
    ACT_DOTA_LEAP_SWIPE = 1659,
    ACT_DOTA_NIAN_INTRO_LEAP = 1660,
    ACT_DOTA_AREA_DENY = 1661,
    ACT_DOTA_NIAN_PIN_TO_STUN = 1662,
    ACT_DOTA_RAZE_1 = 1663,
    ACT_DOTA_RAZE_2 = 1664,
    ACT_DOTA_RAZE_3 = 1665,
    ACT_DOTA_UNDYING_DECAY = 1666,
    ACT_DOTA_UNDYING_SOUL_RIP = 1667,
    ACT_DOTA_UNDYING_TOMBSTONE = 1668,
    ACT_DOTA_WHIRLING_AXES_RANGED = 1669,
    ACT_DOTA_SHALLOW_GRAVE = 1670,
    ACT_DOTA_COLD_FEET = 1671,
    ACT_DOTA_ICE_VORTEX = 1672,
    ACT_DOTA_CHILLING_TOUCH = 1673,
    ACT_DOTA_ENFEEBLE = 1674,
    ACT_DOTA_FATAL_BONDS = 1675,
    ACT_DOTA_MIDNIGHT_PULSE = 1676,
    ACT_DOTA_ANCESTRAL_SPIRIT = 1677,
    ACT_DOTA_THUNDER_STRIKE = 1678,
    ACT_DOTA_KINETIC_FIELD = 1679,
    ACT_DOTA_STATIC_STORM = 1680,
    ACT_DOTA_MINI_TAUNT = 1681,
    ACT_DOTA_ARCTIC_BURN_END = 1682,
    ACT_DOTA_LOADOUT_RARE = 1683,
    ACT_DOTA_SWIM = 1684,
    ACT_DOTA_FLEE = 1685,
    ACT_DOTA_TROT = 1686,
    ACT_DOTA_SHAKE = 1687,
    ACT_DOTA_SWIM_IDLE = 1688,
    ACT_DOTA_WAIT_IDLE = 1689,
    ACT_DOTA_GREET = 1690,
    ACT_DOTA_TELEPORT_COOP_START = 1691,
    ACT_DOTA_TELEPORT_COOP_WAIT = 1692,
    ACT_DOTA_TELEPORT_COOP_END = 1693,
    ACT_DOTA_TELEPORT_COOP_EXIT = 1694,
    ACT_DOTA_SHOPKEEPER_PET_INTERACT = 1695,
    ACT_DOTA_ITEM_PICKUP = 1696,
    ACT_DOTA_ITEM_DROP = 1697,
    ACT_DOTA_CAPTURE_PET = 1698,
    ACT_DOTA_PET_WARD_OBSERVER = 1699,
    ACT_DOTA_PET_WARD_SENTRY = 1700,
    ACT_DOTA_PET_LEVEL = 1701,
    ACT_DOTA_CAST_BURROW_END = 1702,
    ACT_DOTA_LIFESTEALER_ASSIMILATE = 1703,
    ACT_DOTA_LIFESTEALER_EJECT = 1704,
    ACT_DOTA_ATTACK_EVENT_BASH = 1705,
    ACT_DOTA_CAPTURE_RARE = 1706,
    ACT_DOTA_AW_MAGNETIC_FIELD = 1707,
    ACT_DOTA_CAST_GHOST_SHIP = 1708,
    ACT_DOTA_FXANIM = 1709,
    ACT_DOTA_VICTORY_START = 1710,
    ACT_DOTA_DEFEAT_START = 1711,
    ACT_DOTA_DP_SPIRIT_SIPHON = 1712,
    ACT_DOTA_TRICKS_END = 1713,
    ACT_DOTA_ES_STONE_CALLER = 1714,
    ACT_DOTA_MK_STRIKE = 1715
}

declare enum DOTAMinimapEvent_t {
    DOTA_MINIMAP_EVENT_ANCIENT_UNDER_ATTACK = 2,
    DOTA_MINIMAP_EVENT_BASE_UNDER_ATTACK = 4,
    DOTA_MINIMAP_EVENT_BASE_GLYPHED = 8,
    DOTA_MINIMAP_EVENT_TEAMMATE_UNDER_ATTACK = 16,
    DOTA_MINIMAP_EVENT_TEAMMATE_TELEPORTING = 32,
    DOTA_MINIMAP_EVENT_TEAMMATE_DIED = 64,
    DOTA_MINIMAP_EVENT_TUTORIAL_TASK_ACTIVE = 128,
    DOTA_MINIMAP_EVENT_TUTORIAL_TASK_FINISHED = 256,
    DOTA_MINIMAP_EVENT_HINT_LOCATION = 512,
    DOTA_MINIMAP_EVENT_ENEMY_TELEPORTING = 1024,
    DOTA_MINIMAP_EVENT_CANCEL_TELEPORTING = 2048,
    DOTA_MINIMAP_EVENT_RADAR = 4096,
    DOTA_MINIMAP_EVENT_RADAR_TARGET = 8192
}

declare enum DOTASlotType_t {
    DOTA_LOADOUT_TYPE_INVALID = -1,
    DOTA_LOADOUT_TYPE_WEAPON = 0,
    DOTA_LOADOUT_TYPE_OFFHAND_WEAPON = 1,
    DOTA_LOADOUT_TYPE_WEAPON2 = 2,
    DOTA_LOADOUT_TYPE_OFFHAND_WEAPON2 = 3,
    DOTA_LOADOUT_TYPE_HEAD = 4,
    DOTA_LOADOUT_TYPE_SHOULDER = 5,
    DOTA_LOADOUT_TYPE_ARMS = 6,
    DOTA_LOADOUT_TYPE_ARMOR = 7,
    DOTA_LOADOUT_TYPE_BELT = 8,
    DOTA_LOADOUT_TYPE_NECK = 9,
    DOTA_LOADOUT_TYPE_BACK = 10,
    DOTA_LOADOUT_TYPE_LEGS = 11,
    DOTA_LOADOUT_TYPE_GLOVES = 12,
    DOTA_LOADOUT_TYPE_TAIL = 13,
    DOTA_LOADOUT_TYPE_MISC = 14,
    DOTA_LOADOUT_TYPE_BODY_HEAD = 15,
    DOTA_LOADOUT_TYPE_MOUNT = 16,
    DOTA_LOADOUT_TYPE_SUMMON = 17,
    DOTA_LOADOUT_TYPE_SHAPESHIFT = 18,
    DOTA_LOADOUT_TYPE_TAUNT = 19,
    DOTA_LOADOUT_TYPE_AMBIENT_EFFECTS = 20,
    DOTA_LOADOUT_TYPE_ABILITY_ATTACK = 21,
    DOTA_LOADOUT_TYPE_ABILITY1 = 22,
    DOTA_LOADOUT_TYPE_ABILITY2 = 23,
    DOTA_LOADOUT_TYPE_ABILITY3 = 24,
    DOTA_LOADOUT_TYPE_ABILITY4 = 25,
    DOTA_LOADOUT_TYPE_ABILITY_ULTIMATE = 26,
    DOTA_LOADOUT_TYPE_VOICE = 27,
    DOTA_LOADOUT_TYPE_ACTION_ITEM = 28,
    DOTA_LOADOUT_TYPE_COURIER = 29,
    DOTA_LOADOUT_TYPE_ANNOUNCER = 30,
    DOTA_LOADOUT_TYPE_MEGA_KILLS = 31,
    DOTA_LOADOUT_TYPE_MUSIC = 32,
    DOTA_LOADOUT_TYPE_WARD = 33,
    DOTA_LOADOUT_TYPE_HUD_SKIN = 34,
    DOTA_LOADOUT_TYPE_LOADING_SCREEN = 35,
    DOTA_LOADOUT_TYPE_WEATHER = 36,
    DOTA_LOADOUT_TYPE_HEROIC_STATUE = 37,
    DOTA_LOADOUT_TYPE_MULTIKILL_BANNER = 38,
    DOTA_LOADOUT_TYPE_CURSOR_PACK = 39,
    DOTA_LOADOUT_TYPE_TELEPORT_EFFECT = 40,
    DOTA_LOADOUT_TYPE_BLINK_EFFECT = 41,
    DOTA_LOADOUT_TYPE_TEAM_SHOWCASE = 42,
    DOTA_LOADOUT_TYPE_TERRAIN = 43,
    DOTA_PLAYER_LOADOUT_START = 28,
    DOTA_PLAYER_LOADOUT_END = 43,
    DOTA_LOADOUT_TYPE_NONE = 44,
    DOTA_LOADOUT_TYPE_COUNT = 45
}

declare enum modifierfunction {
    MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE = 0,
    MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE_POST_CRIT = 1,
    MODIFIER_PROPERTY_BASEATTACK_BONUSDAMAGE = 2,
    MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_PHYSICAL = 3,
    MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_MAGICAL = 4,
    MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_PURE = 5,
    MODIFIER_PROPERTY_PROCATTACK_FEEDBACK = 6,
    MODIFIER_PROPERTY_PRE_ATTACK = 7,
    MODIFIER_PROPERTY_INVISIBILITY_LEVEL = 8,
    MODIFIER_PROPERTY_PERSISTENT_INVISIBILITY = 9,
    MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT = 10,
    MODIFIER_PROPERTY_MOVESPEED_BASE_OVERRIDE = 11,
    MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE = 12,
    MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE_UNIQUE = 13,
    MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE_UNIQUE_2 = 14,
    MODIFIER_PROPERTY_MOVESPEED_BONUS_UNIQUE = 15,
    MODIFIER_PROPERTY_MOVESPEED_BONUS_UNIQUE_2 = 16,
    MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE = 17,
    MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE_MIN = 18,
    MODIFIER_PROPERTY_MOVESPEED_LIMIT = 19,
    MODIFIER_PROPERTY_MOVESPEED_MAX = 20,
    MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT = 21,
    MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT_POWER_TREADS = 22,
    MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT_SECONDARY = 23,
    MODIFIER_PROPERTY_COOLDOWN_REDUCTION_CONSTANT = 24,
    MODIFIER_PROPERTY_BASE_ATTACK_TIME_CONSTANT = 25,
    MODIFIER_PROPERTY_ATTACK_POINT_CONSTANT = 26,
    MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE = 27,
    MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE_ILLUSION = 28,
    MODIFIER_PROPERTY_TOTALDAMAGEOUTGOING_PERCENTAGE = 29,
    MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE = 30,
    MODIFIER_PROPERTY_MAGICDAMAGEOUTGOING_PERCENTAGE = 31,
    MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE = 32,
    MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE_UNIQUE = 33,
    MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE = 34,
    MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_PERCENTAGE = 35,
    MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_CONSTANT = 36,
    MODIFIER_PROPERTY_INCOMING_SPELL_DAMAGE_CONSTANT = 37,
    MODIFIER_PROPERTY_EVASION_CONSTANT = 38,
    MODIFIER_PROPERTY_NEGATIVE_EVASION_CONSTANT = 39,
    MODIFIER_PROPERTY_AVOID_DAMAGE = 40,
    MODIFIER_PROPERTY_AVOID_SPELL = 41,
    MODIFIER_PROPERTY_MISS_PERCENTAGE = 42,
    MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS = 43,
    MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_ILLUSIONS = 44,
    MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_UNIQUE = 45,
    MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_UNIQUE_ACTIVE = 46,
    MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS = 47,
    MODIFIER_PROPERTY_MAGICAL_RESISTANCE_ITEM_UNIQUE = 48,
    MODIFIER_PROPERTY_MAGICAL_RESISTANCE_DECREPIFY_UNIQUE = 49,
    MODIFIER_PROPERTY_BASE_MANA_REGEN = 50,
    MODIFIER_PROPERTY_MANA_REGEN_CONSTANT = 51,
    MODIFIER_PROPERTY_MANA_REGEN_CONSTANT_UNIQUE = 52,
    MODIFIER_PROPERTY_MANA_REGEN_PERCENTAGE = 53,
    MODIFIER_PROPERTY_MANA_REGEN_TOTAL_PERCENTAGE = 54,
    MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT = 55,
    MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE = 56,
    MODIFIER_PROPERTY_HEALTH_BONUS = 57,
    MODIFIER_PROPERTY_MANA_BONUS = 58,
    MODIFIER_PROPERTY_EXTRA_STRENGTH_BONUS = 59,
    MODIFIER_PROPERTY_EXTRA_HEALTH_BONUS = 60,
    MODIFIER_PROPERTY_EXTRA_MANA_BONUS = 61,
    MODIFIER_PROPERTY_EXTRA_HEALTH_PERCENTAGE = 62,
    MODIFIER_PROPERTY_STATS_STRENGTH_BONUS = 63,
    MODIFIER_PROPERTY_STATS_AGILITY_BONUS = 64,
    MODIFIER_PROPERTY_STATS_INTELLECT_BONUS = 65,
    MODIFIER_PROPERTY_CAST_RANGE_BONUS = 66,
    MODIFIER_PROPERTY_ATTACK_RANGE_BONUS = 67,
    MODIFIER_PROPERTY_ATTACK_RANGE_BONUS_UNIQUE = 68,
    MODIFIER_PROPERTY_MAX_ATTACK_RANGE = 69,
    MODIFIER_PROPERTY_PROJECTILE_SPEED_BONUS = 70,
    MODIFIER_PROPERTY_REINCARNATION = 71,
    MODIFIER_PROPERTY_RESPAWNTIME = 72,
    MODIFIER_PROPERTY_RESPAWNTIME_PERCENTAGE = 73,
    MODIFIER_PROPERTY_RESPAWNTIME_STACKING = 74,
    MODIFIER_PROPERTY_COOLDOWN_PERCENTAGE = 75,
    MODIFIER_PROPERTY_COOLDOWN_PERCENTAGE_STACKING = 76,
    MODIFIER_PROPERTY_CASTTIME_PERCENTAGE = 77,
    MODIFIER_PROPERTY_MANACOST_PERCENTAGE = 78,
    MODIFIER_PROPERTY_DEATHGOLDCOST = 79,
    MODIFIER_PROPERTY_PREATTACK_CRITICALSTRIKE = 80,
    MODIFIER_PROPERTY_PREATTACK_TARGET_CRITICALSTRIKE = 81,
    MODIFIER_PROPERTY_MAGICAL_CONSTANT_BLOCK = 82,
    MODIFIER_PROPERTY_PHYSICAL_CONSTANT_BLOCK = 83,
    MODIFIER_PROPERTY_PHYSICAL_CONSTANT_BLOCK_SPECIAL = 84,
    MODIFIER_PROPERTY_TOTAL_CONSTANT_BLOCK_UNAVOIDABLE_PRE_ARMOR = 85,
    MODIFIER_PROPERTY_TOTAL_CONSTANT_BLOCK = 86,
    MODIFIER_PROPERTY_OVERRIDE_ANIMATION = 87,
    MODIFIER_PROPERTY_OVERRIDE_ANIMATION_WEIGHT = 88,
    MODIFIER_PROPERTY_OVERRIDE_ANIMATION_RATE = 89,
    MODIFIER_PROPERTY_ABSORB_SPELL = 90,
    MODIFIER_PROPERTY_REFLECT_SPELL = 91,
    MODIFIER_PROPERTY_DISABLE_AUTOATTACK = 92,
    MODIFIER_PROPERTY_BONUS_DAY_VISION = 93,
    MODIFIER_PROPERTY_BONUS_NIGHT_VISION = 94,
    MODIFIER_PROPERTY_BONUS_NIGHT_VISION_UNIQUE = 95,
    MODIFIER_PROPERTY_BONUS_VISION_PERCENTAGE = 96,
    MODIFIER_PROPERTY_FIXED_DAY_VISION = 97,
    MODIFIER_PROPERTY_FIXED_NIGHT_VISION = 98,
    MODIFIER_PROPERTY_MIN_HEALTH = 99,
    MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PHYSICAL = 100,
    MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_MAGICAL = 101,
    MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PURE = 102,
    MODIFIER_PROPERTY_IS_ILLUSION = 103,
    MODIFIER_PROPERTY_ILLUSION_LABEL = 104,
    MODIFIER_PROPERTY_SUPER_ILLUSION = 105,
    MODIFIER_PROPERTY_SUPER_ILLUSION_WITH_ULTIMATE = 106,
    MODIFIER_PROPERTY_TURN_RATE_PERCENTAGE = 107,
    MODIFIER_PROPERTY_DISABLE_HEALING = 108,
    MODIFIER_PROPERTY_ALWAYS_ALLOW_ATTACK = 109,
    MODIFIER_PROPERTY_OVERRIDE_ATTACK_MAGICAL = 110,
    MODIFIER_PROPERTY_UNIT_STATS_NEEDS_REFRESH = 111,
    MODIFIER_PROPERTY_BOUNTY_CREEP_MULTIPLIER = 112,
    MODIFIER_PROPERTY_BOUNTY_OTHER_MULTIPLIER = 113,
    MODIFIER_EVENT_ON_SPELL_TARGET_READY = 114,
    MODIFIER_EVENT_ON_ATTACK_RECORD = 115,
    MODIFIER_EVENT_ON_ATTACK_START = 116,
    MODIFIER_EVENT_ON_ATTACK = 117,
    MODIFIER_EVENT_ON_ATTACK_LANDED = 118,
    MODIFIER_EVENT_ON_ATTACK_FAIL = 119,
    MODIFIER_EVENT_ON_ATTACK_ALLIED = 120,
    MODIFIER_EVENT_ON_PROJECTILE_DODGE = 121,
    MODIFIER_EVENT_ON_ORDER = 122,
    MODIFIER_EVENT_ON_UNIT_MOVED = 123,
    MODIFIER_EVENT_ON_ABILITY_START = 124,
    MODIFIER_EVENT_ON_ABILITY_EXECUTED = 125,
    MODIFIER_EVENT_ON_ABILITY_FULLY_CAST = 126,
    MODIFIER_EVENT_ON_BREAK_INVISIBILITY = 127,
    MODIFIER_EVENT_ON_ABILITY_END_CHANNEL = 128,
    MODIFIER_EVENT_ON_PROCESS_UPGRADE = 129,
    MODIFIER_EVENT_ON_REFRESH = 130,
    MODIFIER_EVENT_ON_TAKEDAMAGE = 131,
    MODIFIER_EVENT_ON_STATE_CHANGED = 132,
    MODIFIER_EVENT_ON_ORB_EFFECT = 133,
    MODIFIER_EVENT_ON_ATTACKED = 134,
    MODIFIER_EVENT_ON_DEATH = 135,
    MODIFIER_EVENT_ON_RESPAWN = 136,
    MODIFIER_EVENT_ON_SPENT_MANA = 137,
    MODIFIER_EVENT_ON_TELEPORTING = 138,
    MODIFIER_EVENT_ON_TELEPORTED = 139,
    MODIFIER_EVENT_ON_SET_LOCATION = 140,
    MODIFIER_EVENT_ON_HEALTH_GAINED = 141,
    MODIFIER_EVENT_ON_MANA_GAINED = 142,
    MODIFIER_EVENT_ON_TAKEDAMAGE_KILLCREDIT = 143,
    MODIFIER_EVENT_ON_HERO_KILLED = 144,
    MODIFIER_EVENT_ON_HEAL_RECEIVED = 145,
    MODIFIER_EVENT_ON_BUILDING_KILLED = 146,
    MODIFIER_EVENT_ON_MODEL_CHANGED = 147,
    MODIFIER_PROPERTY_TOOLTIP = 148,
    MODIFIER_PROPERTY_MODEL_CHANGE = 149,
    MODIFIER_PROPERTY_MODEL_SCALE = 150,
    MODIFIER_PROPERTY_IS_SCEPTER = 151,
    MODIFIER_PROPERTY_TRANSLATE_ACTIVITY_MODIFIERS = 152,
    MODIFIER_PROPERTY_TRANSLATE_ATTACK_SOUND = 153,
    MODIFIER_PROPERTY_LIFETIME_FRACTION = 154,
    MODIFIER_PROPERTY_PROVIDES_FOW_POSITION = 155,
    MODIFIER_PROPERTY_SPELLS_REQUIRE_HP = 156,
    MODIFIER_PROPERTY_FORCE_DRAW_MINIMAP = 157,
    MODIFIER_PROPERTY_DISABLE_TURNING = 158,
    MODIFIER_PROPERTY_IGNORE_CAST_ANGLE = 159,
    MODIFIER_PROPERTY_CHANGE_ABILITY_VALUE = 160,
    MODIFIER_PROPERTY_ABILITY_LAYOUT = 161,
    MODIFIER_EVENT_ON_DOMINATED = 162,
    MODIFIER_PROPERTY_TEMPEST_DOUBLE = 163,
    MODIFIER_PROPERTY_PRESERVE_PARTICLES_ON_MODEL_CHANGE = 164,
    MODIFIER_EVENT_ON_ATTACK_FINISHED = 165,
    MODIFIER_PROPERTY_IGNORE_COOLDOWN = 166,
    MODIFIER_PROPERTY_CAN_ATTACK_TREES = 167,
    MODIFIER_PROPERTY_VISUAL_Z_DELTA = 168,
    MODIFIER_FUNCTION_LAST = 169,
    MODIFIER_FUNCTION_INVALID = 255
}

declare enum modifierstate {
    MODIFIER_STATE_ROOTED = 0,
    MODIFIER_STATE_DISARMED = 1,
    MODIFIER_STATE_ATTACK_IMMUNE = 2,
    MODIFIER_STATE_SILENCED = 3,
    MODIFIER_STATE_MUTED = 4,
    MODIFIER_STATE_STUNNED = 5,
    MODIFIER_STATE_HEXED = 6,
    MODIFIER_STATE_INVISIBLE = 7,
    MODIFIER_STATE_INVULNERABLE = 8,
    MODIFIER_STATE_MAGIC_IMMUNE = 9,
    MODIFIER_STATE_PROVIDES_VISION = 10,
    MODIFIER_STATE_NIGHTMARED = 11,
    MODIFIER_STATE_BLOCK_DISABLED = 12,
    MODIFIER_STATE_EVADE_DISABLED = 13,
    MODIFIER_STATE_UNSELECTABLE = 14,
    MODIFIER_STATE_CANNOT_MISS = 15,
    MODIFIER_STATE_SPECIALLY_DENIABLE = 16,
    MODIFIER_STATE_FROZEN = 17,
    MODIFIER_STATE_COMMAND_RESTRICTED = 18,
    MODIFIER_STATE_NOT_ON_MINIMAP = 19,
    MODIFIER_STATE_NOT_ON_MINIMAP_FOR_ENEMIES = 20,
    MODIFIER_STATE_LOW_ATTACK_PRIORITY = 21,
    MODIFIER_STATE_NO_HEALTH_BAR = 22,
    MODIFIER_STATE_FLYING = 23,
    MODIFIER_STATE_NO_UNIT_COLLISION = 24,
    MODIFIER_STATE_NO_TEAM_MOVE_TO = 25,
    MODIFIER_STATE_NO_TEAM_SELECT = 26,
    MODIFIER_STATE_PASSIVES_DISABLED = 27,
    MODIFIER_STATE_DOMINATED = 28,
    MODIFIER_STATE_BLIND = 29,
    MODIFIER_STATE_OUT_OF_GAME = 30,
    MODIFIER_STATE_FAKE_ALLY = 31,
    MODIFIER_STATE_FLYING_FOR_PATHING_PURPOSES_ONLY = 32,
    MODIFIER_STATE_TRUESIGHT_IMMUNE = 33,
    MODIFIER_STATE_LAST = 34
}

declare enum DOTAModifierAttribute_t {
    MODIFIER_ATTRIBUTE_NONE = 0,
    MODIFIER_ATTRIBUTE_PERMANENT = 1,
    MODIFIER_ATTRIBUTE_MULTIPLE = 2,
    MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE = 4
}

declare enum Attributes {
    DOTA_ATTRIBUTE_STRENGTH = 0,
    DOTA_ATTRIBUTE_AGILITY = 1,
    DOTA_ATTRIBUTE_INTELLECT = 2,
    DOTA_ATTRIBUTE_MAX = 3,
    DOTA_ATTRIBUTE_INVALID = -1
}

declare enum ParticleAttachment_t {
    PATTACH_INVALID = -1,
    PATTACH_ABSORIGIN = 0,
    PATTACH_ABSORIGIN_FOLLOW = 1,
    PATTACH_CUSTOMORIGIN = 2,
    PATTACH_CUSTOMORIGIN_FOLLOW = 3,
    PATTACH_POINT = 4,
    PATTACH_POINT_FOLLOW = 5,
    PATTACH_EYES_FOLLOW = 6,
    PATTACH_OVERHEAD_FOLLOW = 7,
    PATTACH_WORLDORIGIN = 8,
    PATTACH_ROOTBONE_FOLLOW = 9,
    PATTACH_RENDERORIGIN_FOLLOW = 10,
    PATTACH_MAIN_VIEW = 11,
    PATTACH_WATERWAKE = 12,
    MAX_PATTACH_TYPES = 13
}

declare enum DOTA_MOTION_CONTROLLER_PRIORITY {
    DOTA_MOTION_CONTROLLER_PRIORITY_LOWEST = 0,
    DOTA_MOTION_CONTROLLER_PRIORITY_LOW = 1,
    DOTA_MOTION_CONTROLLER_PRIORITY_MEDIUM = 2,
    DOTA_MOTION_CONTROLLER_PRIORITY_HIGH = 3,
    DOTA_MOTION_CONTROLLER_PRIORITY_HIGHEST = 4
}

declare enum DOTASpeechType_t {
    DOTA_SPEECH_USER_INVALID = 0,
    DOTA_SPEECH_USER_SINGLE = 1,
    DOTA_SPEECH_USER_TEAM = 2,
    DOTA_SPEECH_USER_TEAM_NEARBY = 3,
    DOTA_SPEECH_USER_NEARBY = 4,
    DOTA_SPEECH_USER_ALL = 5,
    DOTA_SPEECH_GOOD_TEAM = 6,
    DOTA_SPEECH_BAD_TEAM = 7,
    DOTA_SPEECH_SPECTATOR = 8,
    DOTA_SPEECH_RECIPIENT_TYPE_MAX = 9
}

declare enum DOTAAbilitySpeakTrigger_t {
    DOTA_ABILITY_SPEAK_START_ACTION_PHASE = 0,
    DOTA_ABILITY_SPEAK_CAST = 1
}

declare enum DotaCustomUIType_t {
    DOTA_CUSTOM_UI_TYPE_HUD = 0,
    DOTA_CUSTOM_UI_TYPE_HERO_SELECTION = 1,
    DOTA_CUSTOM_UI_TYPE_GAME_INFO = 2,
    DOTA_CUSTOM_UI_TYPE_GAME_SETUP = 3,
    DOTA_CUSTOM_UI_TYPE_FLYOUT_SCOREBOARD = 4,
    DOTA_CUSTOM_UI_TYPE_HUD_TOP_BAR = 5,
    DOTA_CUSTOM_UI_TYPE_END_SCREEN = 6,
    DOTA_CUSTOM_UI_TYPE_COUNT = 7,
    DOTA_CUSTOM_UI_TYPE_INVALID = -1
}

declare enum DotaDefaultUIElement_t {
    DOTA_DEFAULT_UI_TOP_TIMEOFDAY = 0,
    DOTA_DEFAULT_UI_TOP_HEROES = 1,
    DOTA_DEFAULT_UI_FLYOUT_SCOREBOARD = 2,
    DOTA_DEFAULT_UI_ACTION_PANEL = 3,
    DOTA_DEFAULT_UI_ACTION_MINIMAP = 4,
    DOTA_DEFAULT_UI_INVENTORY_PANEL = 5,
    DOTA_DEFAULT_UI_INVENTORY_SHOP = 6,
    DOTA_DEFAULT_UI_INVENTORY_ITEMS = 7,
    DOTA_DEFAULT_UI_INVENTORY_QUICKBUY = 8,
    DOTA_DEFAULT_UI_INVENTORY_COURIER = 9,
    DOTA_DEFAULT_UI_INVENTORY_PROTECT = 10,
    DOTA_DEFAULT_UI_INVENTORY_GOLD = 11,
    DOTA_DEFAULT_UI_SHOP_SUGGESTEDITEMS = 12,
    DOTA_DEFAULT_UI_HERO_SELECTION_TEAMS = 13,
    DOTA_DEFAULT_UI_HERO_SELECTION_GAME_NAME = 14,
    DOTA_DEFAULT_UI_HERO_SELECTION_CLOCK = 15,
    DOTA_DEFAULT_UI_TOP_MENU_BUTTONS = 16,
    DOTA_DEFAULT_UI_TOP_BAR_BACKGROUND = 17,
    DOTA_DEFAULT_UI_ENDGAME = 18,
    DOTA_DEFAULT_UI_ENDGAME_CHAT = 19,
    DOTA_DEFAULT_UI_ELEMENT_COUNT = 20
}

declare enum PlayerUltimateStateOrTime_t {
    PLAYER_ULTIMATE_STATE_READY = 0,
    PLAYER_ULTIMATE_STATE_NO_MANA = -1,
    PLAYER_ULTIMATE_STATE_NOT_LEVELED = -2,
    PLAYER_ULTIMATE_STATE_HIDDEN = -3
}

declare enum PlayerOrderIssuer_t {
    DOTA_ORDER_ISSUER_SELECTED_UNITS = 0,
    DOTA_ORDER_ISSUER_CURRENT_UNIT_ONLY = 1,
    DOTA_ORDER_ISSUER_HERO_ONLY = 2,
    DOTA_ORDER_ISSUER_PASSED_UNIT_ONLY = 3
}

declare enum OrderQueueBehavior_t {
    DOTA_ORDER_QUEUE_DEFAULT = 0,
    DOTA_ORDER_QUEUE_NEVER = 1,
    DOTA_ORDER_QUEUE_ALWAYS = 2
}

declare enum CLICK_BEHAVIORS {
    DOTA_CLICK_BEHAVIOR_NONE = 0,
    DOTA_CLICK_BEHAVIOR_MOVE = 1,
    DOTA_CLICK_BEHAVIOR_ATTACK = 2,
    DOTA_CLICK_BEHAVIOR_CAST = 3,
    DOTA_CLICK_BEHAVIOR_DROP_ITEM = 4,
    DOTA_CLICK_BEHAVIOR_DROP_SHOP_ITEM = 5,
    DOTA_CLICK_BEHAVIOR_DRAG = 6,
    DOTA_CLICK_BEHAVIOR_LEARN_ABILITY = 7,
    DOTA_CLICK_BEHAVIOR_PATROL = 8,
    DOTA_CLICK_BEHAVIOR_VECTOR_CAST = 9,
    DOTA_CLICK_BEHAVIOR_RIGHT_CLICK_TARGET = 10,
    DOTA_CLICK_BEHAVIOR_RADAR = 11,
    DOTA_CLICK_BEHAVIOR_LAST = 12
}

declare enum AbilityLearnResult_t {
    ABILITY_CAN_BE_UPGRADED = 0,
    ABILITY_CANNOT_BE_UPGRADED_NOT_UPGRADABLE = 1,
    ABILITY_CANNOT_BE_UPGRADED_AT_MAX = 2,
    ABILITY_CANNOT_BE_UPGRADED_REQUIRES_LEVEL = 3,
    ABILITY_NOT_LEARNABLE = 4
}

declare var $: DollarStatic;
declare var GameUI: CDOTA_PanoramaScript_GameUI;
declare var GameEvents: CDOTA_PanoramaScript_GameEvents;
declare var Players: CScriptBindingPR_Players;
declare var Abilities: CScriptBindingPR_Abilities;
declare var Buffs: CScriptBindingPR_Buffs;
declare var Items: CScriptBindingPR_Items;
declare var Entities: CScriptBindingPR_Entities;
declare var Game: CScriptBindingPR_Game;