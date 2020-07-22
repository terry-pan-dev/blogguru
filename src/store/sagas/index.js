import { all } from 'redux-saga/effects';
import watchFetchTrendings from './header';
import watchFetchTopics from "./home/topic";
import watchFetchArticleList from './home/list';
import watchFetchHotArticleList from './home/hot_articles';
import watchSendLoginForm from "./home/login";

function* sagas() {
    yield all([
        watchFetchTrendings(),
        watchFetchTopics(),
        watchFetchArticleList(),
        watchFetchHotArticleList(),
        watchSendLoginForm()
    ])
}

export default sagas;