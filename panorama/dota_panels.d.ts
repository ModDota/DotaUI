/*
    Typescript definition file of the DotA 2 Panorama API.

    This file contains information on the Panel hierarchy and how it should be used. This file can be used
    just as reference, or when writing Typescript to compile into Panorama JS.

    To use this file with typescript for Panorama, install typescript and put this file at the project root.

    Any javascript compiled from this typescript should be Panorama-compatible and run in Panorama.
    Issues or bugs in the definitions can be reported by making an issue on GitHub:
    https://github.com/ModDota/DotaUI.
*/

interface Panel {
    LoadLayoutAsync(path: string, unknown: boolean, unknown2: boolean): void;
    BLoadLayoutSnippet(path: string);
    RemoveAndDeleteChildren(): void;
    AddClass(name: string): void;
    SetHasClass(name: string, active:boolean);
    RemoveClass(name: string): void;
    style: CSSStyleDeclaration;
    MoveChildAfter(child: Panel, afterChild: Panel): void;
    FindChildTraverse(id: string): Panel;
    BHasClass(className: string): boolean;
    SetPanelEvent(event: string, handler: Function): void;
    SetDialogVariableInt(field: string, value: number): void;
    DeleteAsync(time: number);

    SetAttributeInt(attribute: string, value: number): void;
    GetAttributeInt(attribute: string, defaultValue: number): number;
}

interface LabelPanel extends Panel {
    text: string;
}

interface ImagePanel extends Panel {
    /**
     * Sets the image of this Image.
     * Example: image.SetImage("s2r://panorama/images/hud/hudv2_iconglyph.png")
     */
    SetImage(path: string): void;
    SetScaling(scale: string): void;
}

interface AbilityImage extends ImagePanel {
    abilityname: string;
    contextEntityIndex: number;
}

interface ItemImage extends ImagePanel {
    itemname: string;
    contextEntityIndex: number;
}