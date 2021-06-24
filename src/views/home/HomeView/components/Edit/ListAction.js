import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
  ListItemSecondaryAction,
  Tooltip
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export const ListAction = ({ onHandleDeleteClick, item }) => {
  return (
    <ListItemSecondaryAction>
      <Tooltip title="Delete Informations">
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon
            fontSize="default"
            color="primary"
            onClick={onHandleDeleteClick.bind(null, item)}
          />
        </IconButton>
      </Tooltip>
    </ListItemSecondaryAction>
  );
};

ListAction.propTypes = {
  item: PropTypes.object.isRequired,
  onHandleDeleteClick: PropTypes.func.isRequired,
};
