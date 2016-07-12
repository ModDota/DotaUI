import sys
import re
input = """integer Players.GetMaxPlayers()Get the maximum number of players in the game.
integer Players.GetMaxTeamPlayers()Get the maximum number of players on teams.
integer Players.GetLocalPlayer()Get the local player ID.
boolean Players.IsValidPlayerID( integer iPlayerID )Is the nth player a valid player?
cstring Players.GetPlayerName( integer iPlayerID )Return the name of a player.
integer Players.GetPlayerHeroEntityIndex( integer iPlayerID )Get the entity index of the hero controlled by this player.
js_array Players.GetSelectedEntities( integer iPlayerID )Get the entities this player has selected.
integer Players.GetQueryUnit( integer iPlayerID )Get the entities this player is querying.
integer Players.GetLocalPlayerPortraitUnit()Get local player current portrait unit. (ie. Player's hero or primary selected unit.)
boolean Players.CanPlayerBuyback( integer iPlayerID )Can the player buy back?
boolean Players.HasCustomGameTicketForPlayerID( integer iPlayerID )Does this player have a custom game ticket?
integer Players.GetAssists( integer iPlayerID )The number of assists credited to a player.
integer Players.GetClaimedDenies( integer iPlayerID )
integer Players.GetClaimedMisses( integer iPlayerID )
integer Players.GetDeaths( integer iPlayerID )The number of deaths a player has suffered.
integer Players.GetDenies( integer iPlayerID )The number of denies credited to a player.
integer Players.GetGold( integer iPlayerID )The amount of gold a player has.
integer Players.GetKills( integer iPlayerID )The number of kills credited to a player.
integer Players.GetLastBuybackTime( integer iPlayerID )
integer Players.GetLastHitMultikill( integer iPlayerID )
integer Players.GetLastHits( integer iPlayerID )The number of last hits credited to a player.
integer Players.GetLastHitStreak( integer iPlayerID )
integer Players.GetLevel( integer iPlayerID )The current level of a player.
integer Players.GetMisses( integer iPlayerID )
integer Players.GetNearbyCreepDeaths( integer iPlayerID )
integer Players.GetReliableGold( integer iPlayerID )Total reliable gold for this player.
integer Players.GetRespawnSeconds( integer iPlayerID )
integer Players.GetStreak( integer iPlayerID )
integer Players.GetTotalEarnedGold( integer iPlayerID )Total gold earned in this game by this player.
integer Players.GetTotalEarnedXP( integer iPlayerID )Total xp earned in this game by this player.
integer Players.GetUnreliableGold( integer iPlayerID )Total unreliable gold for this player.
integer Players.GetTeam( integer iPlayerID )Get the team this player is on.
float Players.GetGoldPerMin( integer iPlayerID )Average gold earned per minute for this player.
float Players.GetXPPerMin( integer iPlayerID )Average xp earned per minute for this player.
cstring Players.GetPlayerSelectedHero( integer iPlayerID )Return the name of the hero a player is controlling.
unsigned Players.GetPlayerColor( integer iPlayerID )Get the player color.
boolean Players.IsSpectator( integer iPlayerID )Is this player a spectator.
void Players.PlayerPortraitClicked( integer nClickedPlayerID, boolean bHoldingCtrl, boolean bHoldingAlt ).
void Players.BuffClicked( integer nEntity, integer nBuffSerial, boolean bAlert )."""

conversion = {
    "integer" : "number",
    "float" : "number",
    "cstring" : "string",
    "boolean" : "boolean",
    "js_array" : "any[]",
    "unsigned" : "number", #WTF
    "void" : "void"
}

regex = re.compile("^(?P<return>\w+) (?P<class>\w+)\.(?P<function>\w+)\((?P<args>[^)]+?)?\)(?P<comment>.*)", re.MULTILINE)
for match in regex.finditer(input):
    info = match.groupdict()
    print("/**")
    print(" * " + info["comment"])
    print("**/")
    arg = info["args"]
    arguments = ""
    if arg:
        args = arg.split(",")
        for argument in args:
            innerArg = argument.split(" ")
            arguments = arguments + innerArg[2] + " : " + conversion[innerArg[1]] + ", "
        arguments = arguments[:-2]
    returnType = conversion[info["return"]]
    print("{function}({arg}) : {returnType};".format(arg=arguments, returnType=returnType, **info))
    print("")