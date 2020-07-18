import {
    DEFOCUS_SEARCH_BOX,
    FOCUS_SEARCH_BOX,
    GET_TRENDINGS
} from "./actions";
export const focusSearchBox = () => ({
    type: FOCUS_SEARCH_BOX
});

export const fetchTrendings = () => ({
    type: GET_TRENDINGS
})

export const defocusSearchBox = () => ({
    type: DEFOCUS_SEARCH_BOX
})