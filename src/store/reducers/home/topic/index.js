import { FETCH_TOPIC_SUCCESS } from "./actions";
import { fromJS } from "immutable";

const defaultState = fromJS({
    topics: [],
});
export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_TOPIC_SUCCESS:
            return state.set('topics', action.value);
        default:
            return state;
    }

};