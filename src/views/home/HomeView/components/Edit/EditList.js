import React from 'react';
import PropTypes from 'prop-types';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  btn: {
    margin: 'auto',
    display: 'flex',
    textDecoration: 'none',
    lineHeight: '30px',
    '@media (max-width: 780px)': {
      top: '20px'
    }
  }
}));

export const EditList = ({ handleOpenDialog }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.btn}
      color="primary"
      size="small"
      variant="outlined"
      onClick={handleOpenDialog}
      startIcon={<EditOutlinedIcon />}
    >
      Edit Information
    </Button>
  );
};

EditList.propTypes = {
  handleOpenDialog: PropTypes.func.isRequired
};
