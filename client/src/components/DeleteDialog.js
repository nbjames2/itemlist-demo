import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@material-ui/core';

const DeleteDialog = ({ open, closeDialog, deleteItem, item }) => {
  return (
    <Dialog
      open={open}
      onClose={closeDialog}
      aria-labelledby='delete-dialog'
      aria-describedby='delete-dialog-description'
    >
      <DialogTitle id='delete-dialog'>Delete this item?</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          If you delete this item there will be no way to recover it. Are you sure?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => closeDialog()} color='primary'>
          Cancel
        </Button>
        <Button onClick={() => deleteItem(item._id)} color='secondary' autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
