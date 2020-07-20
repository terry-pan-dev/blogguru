import { all } from 'redux-saga/effects';
import watchFetchTrendings from './header';
import watchFetchTopics from "./home/topic";
import watchFetchArticleList from './home/list';

function* sagas() {
    yield all([
        watchFetchTrendings(),
        watchFetchTopics(),
        watchFetchArticleList(),
    ])
}

export default sagas;