import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  }
}));

function NavigationBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to='/' className={classes.link}><Button color="inherit">Leader Board</Button></Link>
          <Typography variant="h6" className={classes.title}>
            Exploading Kitten
            </Typography>
          <Link to='/userform' className={classes.link}><Button color="inherit">Play Game</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

class NavBar extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
      </div>
    )
  }
}

export default NavBar