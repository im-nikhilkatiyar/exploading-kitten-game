import React from 'react';
import {connect} from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import GameBoard from '../Component/game-board';
import UserForm from '../Component/user-form';

function PrivateRoutes(props) {
  console.log("props here", props)
  const {userDetails: {userName}} = props;
  console.log("props here 2", userName)
  return (
    <Switch>
      {userName !== 'WelcomeUnick' ? <Route exact path={'/gameboard'} component={GameBoard} />
      : <Redirect from='/gameboard' to='/userform' />}
    </Switch>
  );
}

const mapStateToProps =  ({user}) => {
  return {
    userDetails : user
  }
};

export default connect(
  mapStateToProps
)(PrivateRoutes);