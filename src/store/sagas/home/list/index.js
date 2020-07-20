import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import {
    FETCH_ARTICLE_LIST_SUCCESS,
    FETCH_ARTICLE_LIST_FAIL,
    FETCH_ARTICLE_LIST
} from '../../../reducers/home/list/actions';

let isError = false;
function* fetchArticleList({ offset }) {
    try {
        if (!isError) {
            const res = yield axios.get('api/articles', {
                params: {
                    limit: 10,
                    offset: offset
                }
            });
            yield put({
                type: FETCH_ARTICLE_LIST_SUCCESS,
                value: fromJS(res.data),
            });
        }
    } catch (error) {
        isError = true;
        yield put({
            type: FETCH_ARTICLE_LIST_FAIL,
            error: error
        })
    }
}

export default function* watchFetchArticleList() {
    yield takeEvery(FETCH_ARTICLE_LIST, fetchArticleList)
}

