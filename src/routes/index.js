import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import history from './history';

import Private from './private';
import Guest from './guest';

import SignUp from '../pages/Auth/SignUp';
import SignIn from '../pages/Auth/SignIn';
import Preferences from '../pages/Preferences';

import Main from '../pages/Main';
import Search from '../pages/Search';
import NewMeetUp from '../pages/NewMeetUp';
import Profile from '../pages/Profile';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/signup" component={SignUp} />
      <Guest path="/signin" component={SignIn} />
      <Private path="/preferences" component={Preferences} />

      <Private path="/" exact component={Main} />
      <Private path="/search" exact component={Search} />
      <Private path="/newmeetup" exact component={NewMeetUp} />
      <Private path="/profile" exact component={Profile} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
