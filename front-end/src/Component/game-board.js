import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import DisplayCardContent from './display-card-content';
import { startGame } from '../Actions/start-game-action';
import { flipCard } from '../Actions/flip-card';
import UserDetails from './user-details';

class GameBoard extends Component {
  componentDidMount() {
    this.props.startGame();
  }
  flipCard = () => this.props.flipCard(this.props.user);
  render() {
    const { cardFlipped, cardArray, defuseCardNumber, res } = this.props.card;
    return (
      <Grid container direction='row' style={{ marginTop: 30 }}>
        <Grid item sm={3} />
        <Grid item xs={12} sm={6}>
          <UserDetails />
        </Grid>
        <Grid item sm={3} />
        <Grid item sm={3} />
        <Grid item xs={12} sm={6}>
          <DisplayCardContent cardContent={cardFlipped} cardRemaining={cardArray.length} defuseCardNumber={defuseCardNumber} res={res} />
        </Grid>
        <Grid item sm={3} />
        <Grid item sm={3} />
        <Grid item xs={12} sm={6} style={{ marginTop: 30 }}>
          <Button variant='contained' color='primary' onClick={this.flipCard}>
            Flip
          </Button>
        </Grid>
        <Grid item sm={3} />
      </Grid>
    );
  }
}

const mapStateToProps = ({ card, user }) => ({ card, user });
const mapDispatchToProps = { startGame, flipCard };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard);
