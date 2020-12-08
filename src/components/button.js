import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#375BD3'),
    backgroundColor: '#375BD3',
    '&:hover': {
      backgroundColor: '#375BD3',
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0),
  },
}));

export default function ButtonCV() {
  const classes = useStyles();

  return (
    <div>
        <ColorButton onClick={() =>  window.open('https://alexei.one', '_blank')} variant="contained" color="primary" className={classes.margin}>
            View CV
        </ColorButton>
    </div>
  );
}
