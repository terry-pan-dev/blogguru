import { combineReducers } from 'redux';
import headerReducer from './header';
import homeReducer from './home';
import * as headerActions from './header/actionCreators';

export default combineReducers({
    header: headerReducer,
    home: homeReducer
})

export {
    headerActions
}