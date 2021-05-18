import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import * as urls from 'shared/routes.json';

import Home from 'pages/Home';
import Category from 'pages/Category';

function App(): JSX.Element {
  return (
    <div className="App">
      <Switch>
        <Route path={urls.Root} exact component={Home} />
        <Route path={urls.CategoryRoute} exact component={Category} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
