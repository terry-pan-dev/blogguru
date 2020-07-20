import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import { FETCH_TOPIC, FETCH_TOPIC_SUCCESS, FETCH_TOPIC_FAIL } from '../../../reducers/home/topic/actions';

function* fetchTopics() {
    try {
        const res = yield axios.get('api/topics');
        yield put({
            type: FETCH_TOPIC_SUCCESS,
            value: fromJS(res.data),
        });
    } catch (error) {
        yield put({
            type: FETCH_TOPIC_FAIL,
        })
    }
}

export default function* watchFetchTopics() {
    yield takeEvery(FETCH_TOPIC, fetchTopics)
}

