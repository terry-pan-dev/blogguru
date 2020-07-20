import { FETCH_ARTICLE_LIST_SUCCESS } from "./actions";
import { fromJS } from "immutable";

const defaultState = fromJS({
    articles: [],
});
export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_ARTICLE_LIST_SUCCESS:
            return state.set('articles', action.value);
        default:
            return state;
    }

};