import React, { useState, useCallback } from 'react';
import { Modal } from 'components/common';
import classnames from 'classnames/bind';
import style from './style.css';

const cx = classnames.bind(style);

const LoginPage = () => {
  const [isShowLoginForm, setIsShowLoginForm] = useState(false);

  const toggleLoginFormShow = useCallback(() => {
    setIsShowLoginForm(!isShowLoginForm);
  }, [isShowLoginForm]);

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
            <input className={cx('login-dialog-input')} />
            <p className={cx('login-dialog-input-label')}>Password</p>
            <input className={cx('login-dialog-input')} />
          </div>
          <div className={cx('login-dialog-footer')}>
            <button className={cx('login-dialog-footer-button')}>Cancel</button>
            <button className={cx('login-dialog-footer-button', 'primary')}>Sign In</button>
          </div>
        </Modal>
      }
    </div>
  );
}

export default LoginPage;