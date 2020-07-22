import { FETCH_ARTICLE_LIST_SUCCESS, FETCH_ARTICLE_LIST_FAIL } from "./actions";
import { fromJS } from "immutable";

const defaultState = fromJS({
    articles: [],
});
export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_ARTICLE_LIST_SUCCESS:
            return state.update('articles', articles => articles.push(...action.value));
        case FETCH_ARTICLE_LIST_FAIL:
            return state;
        default:
            return state;
    }

};