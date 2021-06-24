import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Home from './Home';

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.breakpoints.values.lg,
    margin: '50px auto 0',
    padding: theme.spacing(3, 3, 3, 3),
    background: theme.palette.background.default,
    border: '1px solid #ddd',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 780px)': {
      marginTop: '10px',
      width: '100%',
      height: '70%',
      background: 'transparent',
      border: 'none',
      display: 'grid'
    }
  }
}));

const HomeView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Home">
      <Home />
    </Page>
  );
};

export default HomeView;
