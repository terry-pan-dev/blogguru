import { DEFOCUS_SEARCH_BOX, FOCUS_SEARCH_BOX, GET_TRENDINGS_SUCCESS } from "./actions";
import { fromJS, set } from 'immutable';
const defaultState = fromJS({
    focus: false,
    trendings: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case FOCUS_SEARCH_BOX:
            return set(state, 'focus', true);
        case DEFOCUS_SEARCH_BOX:
            return set(state, 'focus', false);
        case GET_TRENDINGS_SUCCESS:
            return set(state, 'trendings', action.value);
        default:
            return state;
    }
};