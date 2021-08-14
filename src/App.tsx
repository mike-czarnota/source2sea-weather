import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as routes from './views/routes';

import DashboardRootView from './views/Dashboard';
import LocationDetailsRootView from './views/LocationDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={routes.LOCATION_DETAILS_URL}
          component={LocationDetailsRootView}
        />
        <Route path={routes.DASHBOARD_URL}>
          <DashboardRootView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
