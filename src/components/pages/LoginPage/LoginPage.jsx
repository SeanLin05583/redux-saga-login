import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Modal } from 'components/common';
import classnames from 'classnames/bind';
import style from './style.css';

const cx = classnames.bind(style);

const LoginPage = () => {
  const [isShowLoginForm, setIsShowLoginForm] = useState(false);
  const {
    userName,
    userNameInvalidMsg,
    password,
    passwordInvalidMsg,
    dialogInvalidMsg,
    isLoginLoading,
    isLogin,
  } = useSelector(state => state);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isLogin) {
      dispatch({ type: 'CLEAR_LOGIN_FORM' });
      history.push('/protected');
    }
  }, [isLogin]);

  const toggleLoginFormShow = useCallback(() => {
    if (!isShowLoginForm) {
      dispatch({ type: 'CLEAR_LOGIN_FORM' });
    }
    if (isLoginLoading) {
      dispatch({ type: 'CANCEL_LOGIN' });
    }
    setIsShowLoginForm(!isShowLoginForm);
  }, [isShowLoginForm, isLoginLoading]);

  const handleUsernameChange = e => {
    dispatch({ type: 'SET_USERNAME', payload: e.target.value });
  }

  const handlePasswordChange = e => {
    dispatch({ type: 'SET_PASSWORD', payload: e.target.value });
  }

  const handleLogin = () => {
    dispatch({ type: 'START_VALIDATION' });
  }

  const handleLoginCancel = () => {
    dispatch({ type: 'CANCEL_LOGIN' });
  }

  return (
    <div>
      <p>You must log in to view the page at private page</p>
      <button onClick={toggleLoginFormShow}>Log in</button>
      {isShowLoginForm &&
        <Modal>
          <div className={cx('login-dialog-header')}>
            Sign in
          <i className="fas fa-times" onClick={toggleLoginFormShow} />
          </div>
          <div className={cx('login-dialog-content')}>
            <p className={cx('login-dialog-input-label')}>Username</p>
            <input
              className={cx('login-dialog-input')}
              onChange={handleUsernameChange}
              value={userName}
              disabled={isLoginLoading}
            />
            <p className={cx('login-dialog-input-invalid-msg')}>{userNameInvalidMsg}</p>
            <p className={cx('login-dialog-input-label')}>Password</p>
            <input
              className={cx('login-dialog-input')}
              onChange={handlePasswordChange}
              value={password}
              disabled={isLoginLoading}
            />
            <p className={cx('login-dialog-input-invalid-msg')}>{passwordInvalidMsg}</p>
            <p className={cx('login-dialog-input-invalid-msg')}>{dialogInvalidMsg}</p>
          </div>
          <div className={cx('login-dialog-footer')}>
            <button
              className={cx('login-dialog-footer-button')}
              onClick={handleLoginCancel}
              disabled={!isLoginLoading}
            >
              Cancel
            </button>
            <button
              className={cx('login-dialog-footer-button', 'primary')}
              onClick={handleLogin}
              disabled={isLoginLoading}
            >
              {isLoginLoading ?
                <span className={cx('button-spinner')} />
                :
                'Sign In'
              }
            </button>
          </div>
        </Modal>
      }
    </div>
  );
}

export default LoginPage;