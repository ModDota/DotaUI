import sys
import re
input = """boolean Items.ShouldDisplayCharges( integer nEntityIndex )
boolean Items.AlwaysDisplayCharges( integer nEntityIndex )
boolean Items.ShowSecondaryCharges( integer nEntityIndex )
boolean Items.CanBeSoldByLocalPlayer( integer nEntityIndex )
boolean Items.CanDoubleTapCast( integer nEntityIndex )
boolean Items.ForceHideCharges( integer nEntityIndex )
boolean Items.IsAlertableItem( integer nEntityIndex )
boolean Items.IsCastOnPickup( integer nEntityIndex )
boolean Items.IsDisassemblable( integer nEntityIndex )
boolean Items.IsDroppable( integer nEntityIndex )
boolean Items.IsInnatelyDisassemblable( integer nEntityIndex )
boolean Items.IsKillable( integer nEntityIndex )
boolean Items.IsMuted( integer nEntityIndex )
boolean Items.IsPermanent( integer nEntityIndex )
boolean Items.IsPurchasable( integer nEntityIndex )
boolean Items.IsRecipe( integer nEntityIndex )
boolean Items.IsRecipeGenerated( integer nEntityIndex )
boolean Items.IsSellable( integer nEntityIndex )
boolean Items.IsStackable( integer nEntityIndex )
boolean Items.ProRatesChargesWhenSelling( integer nEntityIndex )
boolean Items.RequiresCharges( integer nEntityIndex )
integer Items.CanBeExecuted( integer nEntityIndex )
integer Items.GetCost( integer nEntityIndex )
integer Items.GetCurrentCharges( integer nEntityIndex )
integer Items.GetSecondaryCharges( integer nEntityIndex )
integer Items.GetDisplayedCharges( integer nEntityIndex )
integer Items.GetInitialCharges( integer nEntityIndex )
integer Items.GetItemColor( integer nEntityIndex )
integer Items.GetShareability( integer nEntityIndex )
cstring Items.GetAbilityTextureSF( integer nEntityIndex )
float Items.GetAssembledTime( integer nEntityIndex )
float Items.GetPurchaseTime( integer nEntityIndex )
integer Items.GetPurchaser( integer nItemID )
boolean Items.LocalPlayerDisassembleItem( integer nItem )Attempt to have the local player disassemble the specified item. Returns false if the order wasn't issued.
boolean Items.LocalPlayerDropItemFromStash( integer nItem )Attempt to have the local player drop the specified item from its stash. Returns false if the order wasn't issued.
boolean Items.LocalPlayerItemAlertAllies( integer nItem )Attempt to have the local player alert allies about the specified item. Returns false if the order wasn't issued.
boolean Items.LocalPlayerMoveItemToStash( integer nItem )Attempt to have the local player move the specified item to its stash. Returns false if the order wasn't issued.
boolean Items.LocalPlayerSellItem( integer nItem )Attempt to have the local player sell the specified item. Returns false if the order wasn't issued."""

conversion = {
    "integer" : "number",
    "float" : "number",
    "cstring" : "string",
    "boolean" : "boolean",
    "js_array" : "error[]",
    "js_object" : "error[]",
    "js_value" : "error",
    "unsigned" : "error", #WTF
    "int64" : "error",
    "float64" : "error",
    "js_raw_args" : "error",
    "void" : "void"
}

regex = re.compile("^(?P<return>\w+) (?P<class>\w+)\.(?P<function>\w+)\((?P<args>[^)]+?)?\)(?P<comment>.*)", re.MULTILINE)
for match in regex.finditer(input):
    info = match.groupdict()
    print("    /**")
    print("     * " + info["comment"])
    print("     */")
    arg = info["args"]
    arguments = ""
    if arg:
        args = arg.split(",")
        for argument in args:
            innerArg = argument.split(" ")
            arguments = arguments + innerArg[2] + ": " + conversion[innerArg[1]] + ", "
        arguments = arguments[:-2]
    returnType = conversion[info["return"]]
    print("    {function}({arg}): {returnType};".format(arg=arguments, returnType=returnType, **info))
    print("")