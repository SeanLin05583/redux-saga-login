import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './normalize.css';
import './style.css';

import { LoginPage, PrivatePage, PublicPage } from 'components/pages';

export default function App() {
  return (
    <Router>
      <div>
        <p>You are not logged in.</p>

        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
          <li>
            <Link to="/login">Login Page</Link>
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