import { DEFOCUS_SEARCH_BOX, FOCUS_SEARCH_BOX } from "./actions";
export const focusSearchBox = () => ({
    'type': FOCUS_SEARCH_BOX
});

export const defocusSearchBox = () => ({
    'type': DEFOCUS_SEARCH_BOX
})