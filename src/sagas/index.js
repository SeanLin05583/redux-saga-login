import { put, take, delay, fork, cancel, cancelled } from 'redux-saga/effects';

function* startLogin() {
  try {
    yield put({ type: 'SET_LOGIN_LOADING' });
    yield delay(3000);
    yield put({ type: 'UNSET_LOGIN_LOADING' });
    yield put({ type: 'LOG_IN' });
  } catch (e) {
    console.log(e);
  } finally {
    if (yield cancelled()) {
      console.log('login canceled');
    }
  }
}

function* watchLogin() {
  while (yield take('START_LOGIN')) {
    const loginTask = yield fork(startLogin);
    yield take('CANCEL_LOGIN');
    yield cancel(loginTask)
  }
}

export default function* rootSaga() {
  yield watchLogin();
};