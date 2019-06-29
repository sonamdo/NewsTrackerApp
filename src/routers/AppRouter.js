import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Main from '../components/Main';
import Login from '../components/Login';
import NotFoundPage from '../components/NotFoundPage';
import SearchResults from '../components/SearchResults';
import Header from '../components/Header';

export const history = createHistory(); //needed for server redirect

const AppRouter = () => (
  <Router history={history}>
  <div>
    <Switch>
      <Route path="/" component={Main} exact={true} />
      <Route path="/login" component={Login} exact={true} />
      <Route path="/SearchResults" component={SearchResults} exact={true} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
  </Router>
);

export default AppRouter;
