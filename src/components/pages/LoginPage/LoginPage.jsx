import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Modal } from 'components/common';
import classnames from 'classnames/bind';
import style from './style.css';

const cx = classnames.bind(style);

const LoginPage = () => {
  const [isShowLoginForm, setIsShowLoginForm] = useState(false);
  const { userName, password, isLoginLoading, isLogin } = useSelector(state => state);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isLogin) {
      history.push('/protected');
    }
  }, [isLogin]);

  const toggleLoginFormShow = useCallback(() => {
    setIsShowLoginForm(!isShowLoginForm);
  }, [isShowLoginForm]);

  const handleUsernameChange = e => {
    dispatch({ type: 'SET_USERNAME', payload: e.target.value });
  }

  const handlePasswordChange = e => {
    dispatch({ type: 'SET_PASSWORD', payload: e.target.value });
  }

  const handleLogin = () => {
    dispatch({ type: 'START_LOGIN' });
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
            <input className={cx('login-dialog-input')} onChange={handleUsernameChange} value={userName} />
            <p className={cx('login-dialog-input-label')}>Password</p>
            <input className={cx('login-dialog-input')} onChange={handlePasswordChange} value={password} />
          </div>
          <div className={cx('login-dialog-footer')}>
            <button className={cx('login-dialog-footer-button')} onClick={handleLoginCancel}>Cancel</button>
            <button
              className={cx('login-dialog-footer-button', 'primary')}
              onClick={handleLogin}
              disabled={isLoginLoading}
            >
              Sign In
            </button>
          </div>
        </Modal>
      }
    </div>
  );
}

export default LoginPage;