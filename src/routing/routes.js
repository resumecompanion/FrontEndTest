import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
} from 'react-router';
import { history } from 'store';
import asyncComponentLoader from 'utils/async-component-loader';

import * as PATHS from 'constants/paths';

export default (
  <Router history={history}>
    <Route getComponent={asyncComponentLoader('MainPage')} path={PATHS.ROOT} >
      <IndexRoute getComponent={asyncComponentLoader('HelloWorldPage')} />
      <Route getComponent={asyncComponentLoader('HelloWorldPage')} path={PATHS.HELLO_WORLD_PAGE} />
      <Route getComponent={asyncComponentLoader('AssetsPage')} path={PATHS.ASSETS_PAGE} />
      <Route getComponent={asyncComponentLoader('ApiPage')} path={PATHS.API_PAGE}  />
      <Route getComponent={asyncComponentLoader('CounterPage')} path={PATHS.COUNTER_PAGE}  />
    </Route>
  </Router>
);
