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
    boxShadow: '0 17px 17px -10px rgba(12,22,44,.32)'
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
    <div className="button">
        <ColorButton 
          onClick={() =>  
            window.open('https://drive.google.com/file/d/1wR8dTk6ItBNLqw89Qv2MuOo4LlOrBHsE/view?usp=sharing', '_blank')} 
          variant="contained" 
          color="primary" 
          className={classes.margin}
          size="large"
        >
            View CV
        </ColorButton>
    </div>
  );
}
