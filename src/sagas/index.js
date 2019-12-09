import { select, put, take, delay, fork, cancel, cancelled, takeEvery, all } from 'redux-saga/effects';

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
  yield takeEvery('START_LOGIN', function* () {
    const loginTask = yield fork(startLogin);
    yield take('CANCEL_LOGIN');
    yield cancel(loginTask)
  })
}

function* fieldValidation() {
  const { userName, password } = yield select();
  if (userName === '' || password === '') {
    if (userName === '') {
      yield put({ type: 'SET_USERNAME_INVALID_MSG', payload: 'This is a required field' });
    }

    if (password === '') {
      yield put({ type: 'SET_PASSWORD_INVALID_MSG', payload: 'This is a required field' });
    }
    return;
  }

  if (userName !== 'guest' || password !== 'guest') {
    yield put({ type: 'SET_DIALOG_INVALID_MSG', payload: 'Incorrect username or password' });
    return;
  }

  yield put({ type: 'START_LOGIN' });
}

function* watchValidation() {
  yield takeEvery('START_VALIDATION', fieldValidation);
}

export default function* rootSaga() {
  yield all([
    watchValidation(),
    watchLogin(),
  ])
};