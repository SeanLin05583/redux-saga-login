import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames/bind';
import style from './style.css'
import './normalize.css';
import { LoginPage, PrivatePage, PublicPage } from 'components/pages';

const cx = classnames.bind(style);

export default function App() {
  const isLogin = useSelector(state => state.isLogin);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: 'LOG_OUT' });
  }

  return (
    <Router>
      <div className={cx('app-container')}>
        <h2>
          {isLogin ?
            <>
              Welcome!
              <button onClick={handleLogout}>Sign out</button>
            </>
            :
            'You are not logged in.'
          }
        </h2>
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/public">
            <PublicPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/protected">
            <PrivatePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}