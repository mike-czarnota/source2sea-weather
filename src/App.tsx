import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as routes from './views/routes';

import Dashboard from './views/Dashboard';
import LocationDetails from './views/LocationDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.LOCATION_DETAILS_URL} component={LocationDetails} />
        <Route path={routes.DASHBOARD_URL}>
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
