import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Icon
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  avatar: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: theme.palette.primary.main
  },
  sumStyle: {
    display: 'inline-block',
    marginLeft: 200,
    fontSize: 20,
    float: 'left',
    verticalAlign: 'top'
  }
}));

export const Category = ({ item, iconName }) => {
  const classes = useStyles();

  return (
    <>
      <ListItemAvatar>
        <Avatar color="inherit" className={classes.avatar}>
          <Icon className="material-icons">{iconName}</Icon>
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Certificate added" secondary={item.title} />
      <Box className={classes.sumStyle} />
    </>
  );
};

Category.propTypes = {
  item: PropTypes.object.isRequired,
  iconName: PropTypes.string.isRequired,
};
