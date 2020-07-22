import { combineReducers } from 'redux';
import headerReducer from './header';
import homeReducer from './home';
import loginReducer from "./home/login";
import * as headerActions from './header/actionCreators';
import * as loginActions from './home/login/actionCreators';

export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    login: loginReducer
})

export {
    headerActions,
    loginActions,
}