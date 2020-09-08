import DOM from "@core/DOM";

export function $(selector) {
    return new DOM(selector);
}