import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames/bind';
import style from './style.css';

const cx = classnames.bind(style);

const Modal = (props) => {
  return ReactDOM.createPortal(<div className={cx('modal-wrapper')}>
    <div className={cx('modal-inner')}>
      {props.children}
    </div>
  </div>, document.getElementById('app'));
}

export default Modal;