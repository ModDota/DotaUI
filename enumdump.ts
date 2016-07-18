function repeat(pattern, count) {
    if (count < 1) return '';
    var result = '';
    while (count > 1) {
        if (count & 1) result += pattern;
        count >>= 1, pattern += pattern;
    }
    return result + pattern;
}
function altDump(name: string, object: Object) {
    $.Msg("=====================================");
    $.Msg("This is a giant dump in " + name);
    $.Msg("=====================================");
    for (var v in object) {
        if(typeof object[v] == "object") {
            $.Msg("declare enum " + v + " {");
            let i = Object.keys(object[v]).length;
            for (let w in object[v]) {
                if (typeof(object[v][w]) != "function") {
                    $.Msg("    " + w + " = " + (""+object[v][w]) + ((i-- == 1) ? "" : ","));
                }
            }
            $.Msg("}");
            $.Msg("");
        }
    }
    $.Msg("=====================================");
}
altDump("Globals", this);