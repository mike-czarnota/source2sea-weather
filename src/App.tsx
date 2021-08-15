import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ClientContextProvider } from 'react-fetching-library';
import * as routes from './views/routes';

import DashboardRootView from './views/Dashboard';
import LocationDetailsRootView from './views/LocationDetails';
import { apiClient } from './api/client';

function App() {
  return (
    <ClientContextProvider client={apiClient}>
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
    </ClientContextProvider>
  );
}

export default App;
