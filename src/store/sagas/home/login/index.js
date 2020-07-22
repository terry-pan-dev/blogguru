import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { SEND_LOGIN_FORM, SEND_LOGIN_FORM_SUCCESS, SEND_LOGIN_FORM_FAIL } from '../../../reducers/home/login/actions';

function* sendLoginForm(action) {

    try {
        const res = yield axios.post('api/users', action.payload)
        if (res.status === 201) {
            yield put({
                type: SEND_LOGIN_FORM_SUCCESS
            });
        } else {
            yield put({
                type: SEND_LOGIN_FORM_FAIL,
            })
        }
    } catch (error) {
        yield put({
            type: SEND_LOGIN_FORM_FAIL,
            error: error
        })
    }
}

export default function* watchSendLoginForm() {
    yield takeEvery(SEND_LOGIN_FORM, sendLoginForm)
}

