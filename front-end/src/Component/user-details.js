import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';


const UserCard = (props) => {
  const {size, type, value} = props
  return (
    <Grid item xs={size} style={{ margin: 5 }}>
      <Card>
        <CardContent>
          <Typography variant='h6' align='center'>{type} {''} {value}</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

class UserDetails extends Component {
  render() {
    const {userName, win, loose} = this.props.userDetails
    return (
      <>
        <Grid container>
          <UserCard size={3} type={'Win :'} value={win} />
          <UserCard size={5} value={userName} />
          <UserCard size={3} type={'Loose :'} value={loose} />
        </Grid>
      </>
    )
  }
}

const mapStateToProps =  ({user}) => {
  return {
    userDetails : user
  }
};

export default connect(
  mapStateToProps
)(UserDetails);