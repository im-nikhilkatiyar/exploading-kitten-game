import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { setUserName } from '../Actions/set-user-name';
import { renderTextField } from '../Util/render-field';
import userServices from '../Services/user-services';
import * as types from '../types';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {' Nikhil Katiyar '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  field: {
    width: '100%'
  }
}));


function Form(props) {
  const classes = useStyles();
  const {handleSubmit, userDetails} = props.props
  const data = userDetails?.values
  const setUserName = () => {
    userServices.create(data)
    .then((res) => {
      const {config, data} = res
      const {userName} = JSON.parse(config.data)
      const {win, loose} = data
      props.props.dispatch({
        type: types.SET_USER_NAME,
        payload: {userName, win, loose}
      })
      props.props.setUserName(userName, win, loose);
      props.props.history.push('/gameboard')
    })
    .catch(e => console.log(e))
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Enter User Name
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(setUserName)}>
          <Field
            name="userName"
            component={renderTextField}
            id="outlined-basic" 
            label="User Name" 
            placeholder="User Name" 
            variant="outlined"
            className={classes.field}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

class UserForm extends Component {
  render () {
    return (
      <Form props={this.props} />
    )
  }
}

UserForm = reduxForm({
  form: 'userDetails'
})(UserForm)

const mapStateToProps =  ({form}) => {
  return {
    userDetails : form && form.userDetails
  }
};
const mapDispatchToProps = { setUserName };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);