import { combineReducers } from 'redux';
import topicReducer from './topic';
import articleReducer from './list';

import { fetchTopics } from "./topic/actionCreators";
import { fetchArticleList } from './list/actionCreators';

export default combineReducers({
    topic: topicReducer,
    article: articleReducer
})

export {
    fetchArticleList,
    fetchTopics,
}