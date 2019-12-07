import { call, put, takeEvery, delay } from 'redux-saga/effects';

function* startLogin() {
  try {
    yield put({ type: 'SET_LOGIN_LOADING' });
    yield delay(3000);
    yield put({ type: 'UNSET_LOGIN_LOADING' });
    yield put({ type: 'LOG_IN' });
  } catch (e) {
    console.log(e);
  }
}

function* saga() {
  yield takeEvery('START_LOGIN', startLogin);
}

export default saga;