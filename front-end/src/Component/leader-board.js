import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import userServices from '../Services/user-services';
import _ from 'lodash';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function RenderRankingTable(props) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell align="center">User Name</TableCell>
            <TableCell align="right">Win</TableCell>
            <TableCell align="right">Loose</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.userDetails && props.userDetails.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="center">{row.userName}</TableCell>
              <TableCell align="right">{row.win}</TableCell>
              <TableCell align="right">{row.loose}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

class LeaderBoard extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    userServices.getAll().then(res => {
      this.setState({users: _.orderBy(res.data, ['win'], ['desc'])})
    })
  }

  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <RenderRankingTable userDetails = {this.state.users} />
      </div>
    )
  }
}

export default LeaderBoard
