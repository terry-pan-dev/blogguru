import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import {
    GET_TRENDINGS,
    GET_TRENDINGS_SUCCESS,
    GET_TRENDINGS_FAIL
} from '../../reducers/header/actions';

function* fetchTrendings() {
    try {
        const res = yield axios.get('api/trendings');
        yield put({
            type: GET_TRENDINGS_SUCCESS,
            value: fromJS(res.data.trendings)
        });
    } catch (error) {
        yield put({
            type: GET_TRENDINGS_FAIL,
        })
    }
}

export default function* watchFetchTrendings() {
    yield takeEvery(GET_TRENDINGS, fetchTrendings)
}

