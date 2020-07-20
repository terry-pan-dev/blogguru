import { all } from 'redux-saga/effects';
import watchFetchTrendings from './header';
import watchFetchTopics from "./home/topic";

function* sagas() {
    yield all([
        watchFetchTrendings(),
        watchFetchTopics(),
    ])
}

export default sagas;