import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivatePage = () => {
  const isLogin = useSelector(state => state.isLogin);

  if (!isLogin) return <Redirect to='/login' />;

  return (
    <div>PrivatePage</div>
  );
}

export default PrivatePage;