import { fromJS } from "immutable";
import { SEND_LOGIN_FORM_SUCCESS, SEND_LOGIN_FORM_FAIL, LOGOUT } from "./actions";

const defaultState = fromJS({
    login: false,
});
export default (state = defaultState, action) => {
    switch (action.type) {
        case SEND_LOGIN_FORM_SUCCESS:
            return state.set('login', true);
        case SEND_LOGIN_FORM_FAIL:
            return state.set('login', false);
        case LOGOUT:
            return state.set('login', false);
        default:
            return state;
    }
};