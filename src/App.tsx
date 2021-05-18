import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import * as urls from 'shared/routes.json';

import Home from 'pages/Home';
import Category from 'pages/Category';
import Confirmation from 'pages/Confirmation';

function App(): JSX.Element {
  return (
    <div className="App">
      <Switch>
        <Route path={urls.Root} exact component={Home} />
        <Route path={urls.Category} exact component={Category} />
        <Route path={urls.Confirmation} exact component={Confirmation} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
