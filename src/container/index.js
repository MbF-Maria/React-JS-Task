import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from 'routes/Dashboard';
import Login from 'routes/Login';

const App = () => (
  <main>
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/login" component={Login} />
      <Redirect exact from="/" to="/dashboard" />
    </Switch>
  </main>
);

export default App;