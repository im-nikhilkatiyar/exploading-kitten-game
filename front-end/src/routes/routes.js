import { Route, Switch } from 'react-router-dom';
import React from 'react';
import LeaderBoard from '../Component/leader-board';
import UserForm from '../Component/user-form';

export default function Routes() {
  return (
    <Switch>
      <Route exact path={'/'} component={LeaderBoard} />
      <Route exact path={'/userform'} component={UserForm} />
    </Switch>
  );
}