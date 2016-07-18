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
    GetStates(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetTotalPurchasedUpgradeGoldCost(nEntityIndex: entityID): number;

    /**
     * 
     */
    GetTeamNumber(nEntityIndex: entityID): number;

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
     * 
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
    InState(nEntityIndex: entityID, nState: number): boolean;

    /**
     * 
     */
    GetArmorForDamageType(nEntityIndex: entityID, iDamageType: number): number;

    /**
     * 
     */
    GetArmorReductionForDamageType(nEntityIndex: entityID, iDamageType: number): number;

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
    GetLocalPlayerActiveAbility(): number;

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
    GetShareability(nEntityIndex: itemID): number;

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
    GetMapInfo(): Object;

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
    CreatePanel(type: string, root: Panel, name: string): Panel;
    Msg(...args: any[]): void;
    GetContextPanel(): Panel;
    Schedule(time: number, callback: Function);
    DispatchEvent(event: string, reference?: Panel, ...args: any[]);
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

declare var $: DollarStatic;
declare var GameUI: CDOTA_PanoramaScript_GameUI;
declare var GameEvents: CDOTA_PanoramaScript_GameEvents;
declare var Players: CScriptBindingPR_Players;
declare var Abilities: CScriptBindingPR_Abilities;
declare var Buffs: CScriptBindingPR_Buffs;
declare var Items: CScriptBindingPR_Items;
declare var Entities: CScriptBindingPR_Entities;
declare var Game: CScriptBindingPR_Game;