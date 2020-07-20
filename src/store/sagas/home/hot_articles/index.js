import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import { FETCH_HOT_ARTICLE_LIST_SUCCESS, FETCH_HOT_ARTICLE_LIST_FAIL, FETCH_HOT_ARTICLE_LIST } from '../../../reducers/home/hot_articles/actions';

function* fetchHotArticleList() {
    try {
        const res = yield axios.get('api/populars');
        yield put({
            type: FETCH_HOT_ARTICLE_LIST_SUCCESS,
            value: fromJS(res.data),
        });
    } catch (error) {
        yield put({
            type: FETCH_HOT_ARTICLE_LIST_FAIL
        })
    }
}

export default function* watchFetchHotArticleList() {
    yield takeEvery(FETCH_HOT_ARTICLE_LIST, fetchHotArticleList)
}

