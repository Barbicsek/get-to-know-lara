import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    background: '#F6F6F6',
    flexGrow: 1,
    marginBottom: '5px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navbarStyle: {
    background: '#red',
  },
  img: {
    width: 150,
    marginTop: 5,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbarStyle} position="static">
        <Toolbar>
          <div>
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
            <Button component={Link} to="/registration" color="inherit">
              Registration
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}