import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Routes/Home';
import Detail from '../Routes/Detail';
import Search from '../Routes/Search';
import Header from './Header';

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail" exact component={Detail} />
        <Route path="/search" exact component={Search} />
        <Route path="*" component={() => <h1>404</h1>} />
      </Switch>
    </>
  </Router>
);
