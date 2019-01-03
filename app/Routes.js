import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import LooperView from './containers/LooperView';
import CreateLoopView from './containers/CreateLoopView';

export default () => (
  <App>
    <Switch>
      <Route path={routes.CREATE} component={CreateLoopView} />
      <Route path={routes.HOME} component={LooperView} />
    </Switch>
  </App>
);
