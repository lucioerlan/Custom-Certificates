import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField
} from '@material-ui/core';
import { FullList } from './FullList';

export const DialogField = ({
  open,
  handleCloseDialog,
  handleSubmit,
  state,
  setState,
  onHandleDeleteClick
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleCloseDialog}
      PaperProps={{
        component: 'form',
        onSubmit: handleSubmit
      }}
    >
      <DialogTitle id="alert-dialog-title">Edit Certificate</DialogTitle>
      <DialogContent>
        {state.transactions !== false ? (
          <FullList
            transactions={state.transactions}
            onHandleDeleteClick={onHandleDeleteClick}
          />
        ) : (
          <>
            <TextField
              required
              id="title"
              name="title"
              type="text"
              label="Title"
              style={{ margin: 20 }}
              margin="normal"
              variant="outlined"
              inputProps={{
                maxLength: 50
              }}
              onChange={(e) => setState({ ...state, title: e.target.value })}
              helperText={state.errorText}
            />
            <TextField
              required
              id="description"
              name="description"
              type="text"
              label="Description"
              style={{ margin: 20 }}
              margin="normal"
              variant="outlined"
              inputProps={{
                maxLength: 200
              }}
              onChange={(e) => setState({ ...state, description: e.target.value })}
              helperText={state.errorText}
            />
            <TextField
              required
              id="name"
              name="name"
              type="text"
              label="Name"
              style={{ margin: 20 }}
              margin="normal"
              variant="outlined"
              inputProps={{
                maxLength: 50
              }}
              onChange={(e) => setState({ ...state, name: e.target.value })}
              helperText={state.errorText}
            />
          </>
        )}
      </DialogContent>

      <DialogActions>
        <Button color="primary" onClick={handleCloseDialog}>
          Cancel
        </Button>
        <Button
          disabled={state.transactions !== false}
          type="submit"
          color="primary"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DialogField.propTypes = {
  open: PropTypes.bool.isRequired,
  handleCloseDialog: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  onHandleDeleteClick: PropTypes.func.isRequired,
};
