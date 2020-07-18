import { all } from 'redux-saga/effects';
import watchFetchTrendings from './header';

function* sagas() {
    yield all([
        watchFetchTrendings()
    ])
}

export default sagas;