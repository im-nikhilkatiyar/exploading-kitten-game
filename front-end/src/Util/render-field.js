import React from 'react';
import { TextField } from "@material-ui/core";
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '43ch',
//     },
//   },
// }));


export const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => {
  // const classes = useStyles();
  
  return (
    <React.Fragment>
      <TextField
        // className={classes.root}
        {...input}
        {...custom}
      />
    </React.Fragment>
)};