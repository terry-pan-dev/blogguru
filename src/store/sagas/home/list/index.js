import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import {
    FETCH_ARTICLE_LIST_SUCCESS,
    FETCH_ARTICLE_LIST_FAIL,
    FETCH_ARTICLE_LIST
} from '../../../reducers/home/list/actions';

function* fetchArticleList() {
    try {
        const res = yield axios.get('api/articles');
        yield put({
            type: FETCH_ARTICLE_LIST_SUCCESS,
            value: fromJS(res.data),
        });
    } catch (error) {
        yield put({
            type: FETCH_ARTICLE_LIST_FAIL
        })
    }
}

export default function* watchFetchArticleList() {
    yield takeEvery(FETCH_ARTICLE_LIST, fetchArticleList)
}

