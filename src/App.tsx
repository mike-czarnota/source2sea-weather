import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  ClientContextProvider,
  useBulkMutation,
  useMutation,
} from 'react-fetching-library';
import * as routes from './views/routes';

import DashboardRootView from './views/Dashboard';
import LocationDetailsRootView from './views/LocationDetails';
import { apiClient } from './api/client';
import { useLocalStorage } from './hooks/useLocalStorage';
import { customLocationKey } from './constants/localStorage';
import { getWeatherUrl } from './api/urls';

const locations = ['Berlin', 'London'];

const Wrapper: React.FC = () => {
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
};

function App() {
  return (
    <ClientContextProvider client={apiClient}>
      <Wrapper />
    </ClientContextProvider>
  );
}

export default App;
