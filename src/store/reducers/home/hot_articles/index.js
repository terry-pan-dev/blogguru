import { FETCH_HOT_ARTICLE_LIST_SUCCESS } from "./actions";
import { fromJS } from "immutable";

const defaultState = fromJS({
    populars: [],
});
export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_HOT_ARTICLE_LIST_SUCCESS:
            return state.set('populars', action.value);
        default:
            return state;
    }

};