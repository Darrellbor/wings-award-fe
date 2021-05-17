import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import * as urls from 'shared/routes.json';

import Home from 'pages/Home';

function App(): JSX.Element {
  return (
    <div className="App">
      <Switch>
        <Route path={urls.Root} exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
