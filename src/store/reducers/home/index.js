import { combineReducers } from 'redux';
import topicReducer from './topic';

export default combineReducers({
    topic: topicReducer
})