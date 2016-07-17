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
    FindScreenEntities(args: error): void;

    /**
     * Get the world position of the screen position, or null if the cursor is out of the world.
     */
    GetScreenWorldPosition(args: [number,number]): [number,number,number];

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
    GetClickBehaviors(): number;

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
    SubscribeNetTableListener(callback:(table_name:string, key:string, value:any) => void): void;

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
    GetQueryUnit(iPlayerID: number): number;

    /**
     * Get local player current portrait unit. (ie. Player's hero or primary selected unit.)
     */
    GetLocalPlayerPortraitUnit(): number;

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
    GetTeam(iPlayerID: number): number;

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
    BuffClicked(nEntity: number, nBuffSerial: number, bAlert: boolean): void;
}
interface CScriptBindingPR_Entities {
    /**
     * Get the world origin of the entity.
     */
    GetAbsOrigin(nEntityIndex: number): error[];

    /**
     * Get the forward vector of the entity.
     */
    GetForward(nEntityIndex: number): error[];

    /**
     * Get the right vector of the entity.
     */
    GetRight(nEntityIndex: number): error[];

    /**
     * Get the up vector of the entity.
     */
    GetUp(nEntityIndex: number): error[];

    /**
     * Get all the building entities.
     */
    GetAllBuildingEntities(): error[];

    /**
     * Get all the hero entities.
     */
    GetAllHeroEntities(): error[];

    /**
     * Get all the entities with a given name.
     */
    GetAllEntitiesByName(pszName: string): error[];

    /**
     * Get all the entities with a given classname.
     */
    GetAllEntitiesByClassname(pszName: string): error[];

    /**
     * Get all the creature entities.
     */
    GetAllCreatureEntities(): error[];

    /**
     * Get all the entities.
     */
    GetAllEntities(): error[];

    /**
     * 
     */
    CanBeDominated(nEntityIndex: number): boolean;

    /**
     * 
     */
    HasAttackCapability(nEntityIndex: number): boolean;

    /**
     * 
     */
    HasCastableAbilities(nEntityIndex: number): boolean;

    /**
     * 
     */
    HasFlyingVision(nEntityIndex: number): boolean;

    /**
     * 
     */
    HasFlyMovementCapability(nEntityIndex: number): boolean;

    /**
     * 
     */
    HasGroundMovementCapability(nEntityIndex: number): boolean;

    /**
     * 
     */
    HasMovementCapability(nEntityIndex: number): boolean;

    /**
     * 
     */
    HasScepter(nEntityIndex: number): boolean;

    /**
     * 
     */
    HasUpgradeableAbilities(nEntityIndex: number): boolean;

    /**
     * 
     */
    HasUpgradeableAbilitiesThatArentMaxed(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsAlive(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsAncient(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsAttackImmune(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsBarracks(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsBlind(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsBoss(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsRoshan(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsBuilding(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsCommandRestricted(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsConsideredHero(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsControllableByAnyPlayer(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsCourier(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsCreature(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsCreep(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsCreepHero(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsDeniable(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsDominated(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsEnemy(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsEvadeDisabled(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsFort(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsFrozen(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsGeneratedByEconItem(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsHallofFame(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsDisarmed(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsHero(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsHexed(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsIllusion(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsInRangeOfFountain(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsInventoryEnabled(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsInvisible(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsInvulnerable(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsLaneCreep(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsLowAttackPriority(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsMagicImmune(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsMuted(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsNeutralUnitType(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsNightmared(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsOther(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsOutOfGame(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsOwnedByAnyPlayer(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsPhantom(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsRangedAttacker(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsRealHero(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsRooted(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsSelectable(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsShop(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsSilenced(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsSpeciallyDeniable(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsStunned(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsSummoned(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsTower(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsUnselectable(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsWard(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsZombie(nEntityIndex: number): boolean;

    /**
     * 
     */
    NoHealthBar(nEntityIndex: number): boolean;

    /**
     * 
     */
    NoTeamMoveTo(nEntityIndex: number): boolean;

    /**
     * 
     */
    NoTeamSelect(nEntityIndex: number): boolean;

    /**
     * 
     */
    NotOnMinimap(nEntityIndex: number): boolean;

    /**
     * 
     */
    NotOnMinimapForEnemies(nEntityIndex: number): boolean;

    /**
     * 
     */
    NoUnitCollision(nEntityIndex: number): boolean;

    /**
     * 
     */
    PassivesDisabled(nEntityIndex: number): boolean;

    /**
     * 
     */
    ProvidesVision(nEntityIndex: number): boolean;

    /**
     * 
     */
    UsesHeroAbilityNumbers(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsMoving(nEntityIndex: number): boolean;

    /**
     * 
     */
    GetAbilityCount(nEntityIndex: number): number;

    /**
     * 
     */
    GetCombatClassAttack(nEntityIndex: number): number;

    /**
     * 
     */
    GetCombatClassDefend(nEntityIndex: number): number;

    /**
     * 
     */
    GetCurrentVisionRange(nEntityIndex: number): number;

    /**
     * 
     */
    GetDamageBonus(nEntityIndex: number): number;

    /**
     * 
     */
    GetDamageMax(nEntityIndex: number): number;

    /**
     * 
     */
    GetDamageMin(nEntityIndex: number): number;

    /**
     * 
     */
    GetDayTimeVisionRange(nEntityIndex: number): number;

    /**
     * 
     */
    GetHealth(nEntityIndex: number): number;

    /**
     * 
     */
    GetHealthPercent(nEntityIndex: number): number;

    /**
     * 
     */
    GetHealthThinkRegen(nEntityIndex: number): number;

    /**
     * 
     */
    GetLevel(nEntityIndex: number): number;

    /**
     * 
     */
    GetMaxHealth(nEntityIndex: number): number;

    /**
     * 
     */
    GetNightTimeVisionRange(nEntityIndex: number): number;

    /**
     * 
     */
    GetStates(nEntityIndex: number): number;

    /**
     * 
     */
    GetTotalPurchasedUpgradeGoldCost(nEntityIndex: number): number;

    /**
     * 
     */
    GetTeamNumber(nEntityIndex: number): number;

    /**
     * 
     */
    GetAttackRange(nEntityIndex: number): number;

    /**
     * 
     */
    GetAttackSpeed(nEntityIndex: number): number;

    /**
     * 
     */
    GetAttacksPerSecond(nEntityIndex: number): number;

    /**
     * 
     */
    GetBaseAttackTime(nEntityIndex: number): number;

    /**
     * 
     */
    GetBaseMagicalResistanceValue(nEntityIndex: number): number;

    /**
     * 
     */
    GetBaseMoveSpeed(nEntityIndex: number): number;

    /**
     * 
     */
    GetBonusPhysicalArmor(nEntityIndex: number): number;

    /**
     * 
     */
    GetCollisionPadding(nEntityIndex: number): number;

    /**
     * 
     */
    GetEffectiveInvisibilityLevel(nEntityIndex: number): number;

    /**
     * 
     */
    GetHasteFactor(nEntityIndex: number): number;

    /**
     * 
     */
    GetHullRadius(nEntityIndex: number): number;

    /**
     * 
     */
    GetIdealSpeed(nEntityIndex: number): number;

    /**
     * 
     */
    GetIncreasedAttackSpeed(nEntityIndex: number): number;

    /**
     * 
     */
    GetMana(nEntityIndex: number): number;

    /**
     * 
     */
    GetManaThinkRegen(nEntityIndex: number): number;

    /**
     * 
     */
    GetMaxMana(nEntityIndex: number): number;

    /**
     * 
     */
    GetMagicalArmorValue(nEntityIndex: number): number;

    /**
     * 
     */
    GetPaddedCollisionRadius(nEntityIndex: number): number;

    /**
     * 
     */
    GetPercentInvisible(nEntityIndex: number): number;

    /**
     * 
     */
    GetPhysicalArmorValue(nEntityIndex: number): number;

    /**
     * 
     */
    GetProjectileCollisionSize(nEntityIndex: number): number;

    /**
     * 
     */
    GetRingRadius(nEntityIndex: number): number;

    /**
     * 
     */
    GetSecondsPerAttack(nEntityIndex: number): number;

    /**
     * 
     */
    ManaFraction(nEntityIndex: number): number;

    /**
     * 
     */
    GetClassname(nEntityIndex: number): string;

    /**
     * 
     */
    GetDisplayedUnitName(nEntityIndex: number): string;

    /**
     * 
     */
    GetSelectionGroup(nEntityIndex: number): string;

    /**
     * 
     */
    GetSoundSet(nEntityIndex: number): string;

    /**
     * 
     */
    GetUnitLabel(nEntityIndex: number): string;

    /**
     * 
     */
    GetUnitName(nEntityIndex: number): string;

    /**
     * 
     */
    GetTotalDamageTaken(nEntityIndex: number): error;

    /**
     * 
     */
    IsControllableByPlayer(nEntityIndex: number, nPlayerIndex: number): boolean;

    /**
     * 
     */
    GetChosenTarget(nEntityIndex: number): number;

    /**
     * 
     */
    HasItemInInventory(nEntityIndex: number, pItemName: string): boolean;

    /**
     * 
     */
    GetRangeToUnit(nEntityIndex: number, nEntityIndex2: number): number;

    /**
     * 
     */
    IsEntityInRange(nEntityIndex: number, nEntityIndex2: number, flRange: number): boolean;

    /**
     * 
     */
    GetMoveSpeedModifier(nEntityIndex: number, flBaseSpeed: number): number;

    /**
     * 
     */
    CanAcceptTargetToAttack(nEntityIndex: number, nEntityIndex2: number): boolean;

    /**
     * 
     */
    InState(nEntityIndex: number, nState: number): boolean;

    /**
     * 
     */
    GetArmorForDamageType(nEntityIndex: number, iDamageType: number): number;

    /**
     * 
     */
    GetArmorReductionForDamageType(nEntityIndex: number, iDamageType: number): number;

    /**
     * 
     */
    IsInRangeOfShop(nEntityIndex: number, iShopType: number, bSpecific: boolean): boolean;

    /**
     * 
     */
    GetNumItemsInStash(nEntityIndex: number): number;

    /**
     * 
     */
    GetNumItemsInInventory(nEntityIndex: number): number;

    /**
     * 
     */
    GetItemInSlot(nEntityIndex: number, nSlotIndex: number): number;

    /**
     * 
     */
    GetAbility(nEntityIndex: number, nSlotIndex: number): number;

    /**
     * 
     */
    GetAbilityByName(nEntityIndex: number, pszAbilityName: string): number;

    /**
     * 
     */
    GetNumBuffs(nEntityIndex: number): number;

    /**
     * 
     */
    GetBuff(nEntityIndex: number, nBufIndex: number): number;

    /**
     * 
     */
    GetAbilityPoints(nEntityIndex: number): number;

    /**
     * 
     */
    GetCurrentXP(nEntityIndex: number): number;

    /**
     * 
     */
    GetNeededXPToLevel(nEntityIndex: number): number;

    /**
     * Get the currently selected entities
     */
    GetSelectionEntities(nEntityIndex: number): error[];

    /**
     * Is this a valid entity index?
     */
    IsValidEntity(nEntityIndex: number): boolean;

    /**
     * Is this entity an item container in the world?
     */
    IsItemPhysical(nEntityIndex: number): boolean;

    /**
     * Get the item contained in this physical item container.
     */
    GetContainedItem(nEntityIndex: number): number;
}
interface CScriptBindingPR_Abilities {
    /**
     * 
     */
    GetAbilityName(nEntityIndex: number): string;

    /**
     * 
     */
    GetAbilityTextureName(nEntityIndex: number): string;

    /**
     * 
     */
    GetAssociatedPrimaryAbilities(nEntityIndex: number): string;

    /**
     * 
     */
    GetAssociatedSecondaryAbilities(nEntityIndex: number): string;

    /**
     * 
     */
    GetHotkeyOverride(nEntityIndex: number): string;

    /**
     * 
     */
    GetIntrinsicModifierName(nEntityIndex: number): string;

    /**
     * 
     */
    GetSharedCooldownName(nEntityIndex: number): string;

    /**
     * 
     */
    AbilityReady(nEntityIndex: number): number;

    /**
     * Returns an AbilityLearnResult_t
     */
    CanAbilityBeUpgraded(nEntityIndex: number): number;

    /**
     * 
     */
    CanBeExecuted(nEntityIndex: number): number;

    /**
     * 
     */
    GetAbilityDamage(nEntityIndex: number): number;

    /**
     * 
     */
    GetAbilityDamageType(nEntityIndex: number): number;

    /**
     * 
     */
    GetAbilityTargetFlags(nEntityIndex: number): number;

    /**
     * 
     */
    GetAbilityTargetTeam(nEntityIndex: number): number;

    /**
     * 
     */
    GetAbilityTargetType(nEntityIndex: number): number;

    /**
     * 
     */
    GetAbilityType(nEntityIndex: number): number;

    /**
     * 
     */
    GetBehavior(nEntityIndex: number): number;

    /**
     * 
     */
    GetCastRange(nEntityIndex: number): number;

    /**
     * 
     */
    GetChannelledManaCostPerSecond(nEntityIndex: number): number;

    /**
     * 
     */
    GetCurrentCharges(nEntityIndex: number): number;

    /**
     * 
     */
    GetEffectiveLevel(nEntityIndex: number): number;

    /**
     * 
     */
    GetHeroLevelRequiredToUpgrade(nEntityIndex: number): number;

    /**
     * 
     */
    GetLevel(nEntityIndex: number): number;

    /**
     * 
     */
    GetManaCost(nEntityIndex: number): number;

    /**
     * 
     */
    GetMaxLevel(nEntityIndex: number): number;

    /**
     * 
     */
    AttemptToUpgrade(nEntityIndex: number): boolean;

    /**
     * 
     */
    CanLearn(nEntityIndex: number): boolean;

    /**
     * 
     */
    GetAutoCastState(nEntityIndex: number): boolean;

    /**
     * 
     */
    GetToggleState(nEntityIndex: number): boolean;

    /**
     * 
     */
    HasScepterUpgradeTooltip(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsActivated(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsActivatedChanging(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsAttributeBonus(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsAutocast(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsCooldownReady(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsDisplayedAbility(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsHidden(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsHiddenWhenStolen(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsInAbilityPhase(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsItem(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsMarkedAsDirty(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsMuted(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsOnCastbar(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsOnLearnbar(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsOwnersGoldEnough(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsOwnersGoldEnoughForUpgrade(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsOwnersManaEnough(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsPassive(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsRecipe(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsSharedWithTeammates(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsStealable(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsStolen(nEntityIndex: number): boolean;

    /**
     * 
     */
    IsToggle(nEntityIndex: number): boolean;

    /**
     * 
     */
    GetAOERadius(nEntityIndex: number): number;

    /**
     * 
     */
    GetBackswingTime(nEntityIndex: number): number;

    /**
     * 
     */
    GetCastPoint(nEntityIndex: number): number;

    /**
     * 
     */
    GetChannelStartTime(nEntityIndex: number): number;

    /**
     * 
     */
    GetChannelTime(nEntityIndex: number): number;

    /**
     * 
     */
    GetCooldown(nEntityIndex: number): number;

    /**
     * 
     */
    GetCooldownLength(nEntityIndex: number): number;

    /**
     * 
     */
    GetCooldownTime(nEntityIndex: number): number;

    /**
     * 
     */
    GetCooldownTimeRemaining(nEntityIndex: number): number;

    /**
     * 
     */
    GetDuration(nEntityIndex: number): number;

    /**
     * 
     */
    GetUpgradeBlend(nEntityIndex: number): number;

    /**
     * Get the local player's current active ability. (Pre-cast targetting state.)
     */
    GetLocalPlayerActiveAbility(): number;

    /**
     * 
     */
    GetCaster(nAbilityIndex: number): number;

    /**
     * 
     */
    GetCustomValueFor(nAbilityIndex: number, pszAbilityVarName: string): number;

    /**
     * 
     */
    GetLevelSpecialValueFor(nAbilityIndex: number, szName: string, nLevel: number): error;

    /**
     * 
     */
    GetSpecialValueFor(nAbilityIndex: number, szName: string): error;

    /**
     * 
     */
    IsCosmetic(nAbilityIndex: number, nTargetEntityIndex: number): boolean;

    /**
     * Attempt to execute the specified ability (Equivalent to clicking the ability in the HUD action bar)
     */
    ExecuteAbility(nAbilityEntIndex: number, nCasterEntIndex: number, bIsQuickCast: boolean): boolean;

    /**
     * Attempt to double-tap (self-cast) the specified ability (Equivalent to double-clicking the ability in the HUD action bar)
     */
    CreateDoubleTapCastOrder(nAbilityEntIndex: number, nCasterEntIndex: number): void;

    /**
     * Ping the specified ability (Equivalent to alt-clicking the ability in the HUD action bar)
     */
    PingAbility(nAbilityIndex: number): void;

    /**
     * Returns the keybind (as a string) for the specified ability.
     */
    GetKeybind(nAbilityEntIndex: number): string;
}
interface CScriptBindingPR_Items {
    /**
     *
     */
    ShouldDisplayCharges(nEntityIndex: number): boolean;

    /**
     *
     */
    AlwaysDisplayCharges(nEntityIndex: number): boolean;

    /**
     *
     */
    ShowSecondaryCharges(nEntityIndex: number): boolean;

    /**
     *
     */
    CanBeSoldByLocalPlayer(nEntityIndex: number): boolean;

    /**
     *
     */
    CanDoubleTapCast(nEntityIndex: number): boolean;

    /**
     *
     */
    ForceHideCharges(nEntityIndex: number): boolean;

    /**
     *
     */
    IsAlertableItem(nEntityIndex: number): boolean;

    /**
     *
     */
    IsCastOnPickup(nEntityIndex: number): boolean;

    /**
     *
     */
    IsDisassemblable(nEntityIndex: number): boolean;

    /**
     *
     */
    IsDroppable(nEntityIndex: number): boolean;

    /**
     *
     */
    IsInnatelyDisassemblable(nEntityIndex: number): boolean;

    /**
     *
     */
    IsKillable(nEntityIndex: number): boolean;

    /**
     *
     */
    IsMuted(nEntityIndex: number): boolean;

    /**
     *
     */
    IsPermanent(nEntityIndex: number): boolean;

    /**
     *
     */
    IsPurchasable(nEntityIndex: number): boolean;

    /**
     *
     */
    IsRecipe(nEntityIndex: number): boolean;

    /**
     *
     */
    IsRecipeGenerated(nEntityIndex: number): boolean;

    /**
     *
     */
    IsSellable(nEntityIndex: number): boolean;

    /**
     *
     */
    IsStackable(nEntityIndex: number): boolean;

    /**
     *
     */
    ProRatesChargesWhenSelling(nEntityIndex: number): boolean;

    /**
     *
     */
    RequiresCharges(nEntityIndex: number): boolean;

    /**
     *
     */
    CanBeExecuted(nEntityIndex: number): number;

    /**
     *
     */
    GetCost(nEntityIndex: number): number;

    /**
     *
     */
    GetCurrentCharges(nEntityIndex: number): number;

    /**
     *
     */
    GetSecondaryCharges(nEntityIndex: number): number;

    /**
     *
     */
    GetDisplayedCharges(nEntityIndex: number): number;

    /**
     *
     */
    GetInitialCharges(nEntityIndex: number): number;

    /**
     *
     */
    GetItemColor(nEntityIndex: number): number;

    /**
     *
     */
    GetShareability(nEntityIndex: number): number;

    /**
     *
     */
    GetAbilityTextureSF(nEntityIndex: number): string;

    /**
     *
     */
    GetAssembledTime(nEntityIndex: number): number;

    /**
     *
     */
    GetPurchaseTime(nEntityIndex: number): number;

    /**
     *
     */
    GetPurchaser(nItemID: number): number;

    /**
     * Attempt to have the local player disassemble the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerDisassembleItem(nItem: number): boolean;

    /**
     * Attempt to have the local player drop the specified item from its stash. Returns false if the order wasn't issued.
     */
    LocalPlayerDropItemFromStash(nItem: number): boolean;

    /**
     * Attempt to have the local player alert allies about the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerItemAlertAllies(nItem: number): boolean;

    /**
     * Attempt to have the local player move the specified item to its stash. Returns false if the order wasn't issued.
     */
    LocalPlayerMoveItemToStash(nItem: number): boolean;

    /**
     * Attempt to have the local player sell the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerSellItem(nItem: number): boolean;
}

interface PrepareUnitOrdersArgument {
    OrderType?: dotaunitorder_t;
    TargetIndex?: number;
    Position?: any; //TODO: vector type
    AbilityIndex?: number;
    OrderIssuer?: any; //TODO: OrderIssuer_t
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
    ScreenXYToWorld(nX: number, nY: number): [number,number,number];

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
    GetState(): number;

    /**
     *
     */
    GameStateIs(nState: number): boolean;

    /**
     *
     */
    GameStateIsBefore(nState: number): boolean;

    /**
     *
     */
    GameStateIsAfter(nState: number): boolean;

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
    PlayerJoinTeam(nTeamID: number): void;

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
    GetAllTeamIDs(): number[];

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
    GetTeamDetails(nTeam: number): error;

    /**
     * Get details for the local player
     */
    GetLocalPlayerInfo(): error;

    /**
     * Get info about the player items.
     */
    GetPlayerItems(nPlayerID: number): error[];

    /**
     * Get info about the given player
     */
    GetPlayerInfo(nPlayerID: number): error;

    /**
     * Get player IDs for the given team
     */
    GetPlayerIDsOnTeam(nTeam: number): number[];

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
    GetMapInfo(): error;

    /**
     * Orders from the local player - takes a single arguments object that supports: dotaunitorder_t OrderType, ent_index TargetIndex, vector Position, ent_index AbilityIndex, OrderIssuer_t OrderIssuer, ent_index UnitIndex, OrderQueueBehavior_t QueueBehavior, bool ShowEffects.
     */
    PrepareUnitOrders(args: PrepareUnitOrdersArgument): void;

    /**
     * Order a unit to drop the specified item at the current cursor location.
     */
    DropItemAtCursor(nControlledUnitEnt: number, nItemEnt: number): void;

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
    CreatePanel(type:String, root:Panel, name:String) : Panel;
    Msg(...args:any[]) : void;
    GetContextPanel() : Panel;
    Schedule(time:number, callback:Function);
    DispatchEvent(event:string, reference?:Panel, ...any:any[]);
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
    SetDialogVariableInt(field: string, value:number): void;
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