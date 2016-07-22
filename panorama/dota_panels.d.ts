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
    paneltype: string;
    rememberchildfocus: boolean;
    style: CSSStyleDeclaration;

    scrolloffset_x: number;
    scrolloffset_y: number;

    actualxoffset: number;
    actualyoffset: number;

    actuallayoutwidth: number;
    actuallayoutheight: number;

    desiredlayoutwidth: number;
    desiredlayoutheight: number;

    contentwidth: number;
    contentheight: number;

    layoutfile: string;
    id: string;

    selectionpos_x: Object;
    selectionpos_y: Object;

    tabindex: Object;

    hittestchildren: boolean;
    hittest: boolean;
    inputnamespace: string;
    defaultfocus: string;

    checked: boolean;
    enabled: boolean;
    visible: boolean;

    AddClass(name: string): void;
    RemoveClass(name: string): void;
    BHasClass(name: string): boolean;
    SetHasClass(name: string, active: boolean);
    ToggleClass(name: string): void;
    SwitchClass(name: string, replacement: string): void;

    ClearPanelEvent(): void;

    SetDraggable(): void;
    IsDraggable(): boolean;

    GetChildCount(): number;
    GetChild(index: number): Panel;
    GetChildIndex(child: Panel): number;
    Children(): Panel[];

    FindChildrenWithClassTraverse(classname: string): Panel[];

    GetParent(): Panel;
    SetParent(parent: Panel): void;

    FindChild(childid: string): Panel;
    FindChildTraverse(childid: string): Panel;
    FindChildInLayoutFile(childid: string): Panel; // ??? needs layout file param?

    RemoveAndDeleteChildren(): void;

    MoveChildBefore(child: Panel, afterChild: Panel): void;
    MoveChildAfter(child: Panel, afterChild: Panel): void;

    GetPositionWithinWindow(): Object;
    ApplyStyles(): void; // ???????
    ClearPropertyFromCode(): void;

    DeleteAsync(time: number);

    BIsTransparent(): boolean;
    BAcceptsInput(): boolean;
    BAcceptsFocus(): boolean;
    SetFocus(): void; // ??
    UpdateFocusInContext(): void; // ??

    BHasHoverStyle(): boolean;
    SetAcceptsFocus(value: boolean): void; // ??
    SetDisableFocusOnMouseDown(value: boolean): void; // ??
    BHasKeyFocus(): boolean;
    SetScrollParentToFitWhenFocused(value: boolean): void; // ??
    BScrollParentToFitWhenFocussed(): boolean;

    IsSelected(): boolean;
    BHasDescendantKeyFocus(): boolean;

    BLoadLayout(path: string);
    BLoadLayoutFromString(layout: string);
    BLoadLayoutFromStringAsync(layout: string, callback: Function); // ??
    BLoadLayoutAsync(path: string, callback: Function); // ?
    BLoadLayoutSnippet(snippetname: string);
    BCreateChildren(): boolean; // ????

    SetTopOfInputContext(): void; // ????
    SetDialogVariable(name: string, value: any): void;
    SetDialogVariableInt(name: string, value: number): void;

    ScrollToTop(): void;
    ScrollToBottom(): void;
    ScrollToLeftEdge(): void;
    ScrollTORightEdge(): void;

    ScrollParentTOMakePanelFit(): void;
    BCanSeeInParentScroll(): boolean;

    GetAttributeInt(name: string, defaultvalue: number): number;
    GetAttributeString(name: string, defaultvalue: number): string;
    GetAttributeUInt32(name: string, defaultvalue: number): number;
    SetAttributeInt(name: string, value: number): void;
    SetAttributeString(name: string, value: string): void;
    SetAttributeUInt32(name: string, value: number): void;

    SetInputNamespace(naespace: string): void; // ??

    RegisterForReadyEvents(callback: Function): void; // ????

    BReadyForDisplay(): boolean;
    SetReadyForDisplay(value: boolean): void; // ???
    SetPanelEvent(event: string, handler: Function): void;

    RunScriptInPanelContext(script: string): void;
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