import { combineReducers } from 'redux';
import topicReducer from './topic';
import articleReducer from './list';
import popularReducer from './hot_articles';

import { fetchTopics } from "./topic/actionCreators";
import { fetchArticleList } from './list/actionCreators';
import { fetchHotArticleList } from './hot_articles/actionCreators';

export default combineReducers({
    topic: topicReducer,
    article: articleReducer,
    popular: popularReducer,
})

export {
    fetchArticleList,
    fetchTopics,
    fetchHotArticleList
}