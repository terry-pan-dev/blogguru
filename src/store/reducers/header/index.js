import { DEFOCUS_SEARCH_BOX, FOCUS_SEARCH_BOX } from "./actions";
import { fromJS } from 'immutable';
const defaultState = fromJS({
    focus: false,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case FOCUS_SEARCH_BOX:
            return state.set('focus', true);
        case DEFOCUS_SEARCH_BOX:
            return state.set('focus', false);
        default:
            return state;
    }
};