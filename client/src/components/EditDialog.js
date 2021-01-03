import React, { useEffect, useState } from 'react';
import './EditDialog.scss';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Typography,
  Button,
  Slider
} from '@material-ui/core';

// used for labels on sliders
const marks = [
  {
    value: 1,
    label: '1'
  },
  {
    value: 2,
    label: '2'
  },
  {
    value: 3,
    label: '3'
  }
];

const EditDialog = ({ editCard, showEditDialog, closeDialog, handleSave }) => {
  const [showSaveError, setShowSaveError] = useState(false);
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    impact: 1,
    likelihood: 1,
    risk: 1
  });

  // Make sure that the card details are loaded on open
  useEffect(() => {
    if (editCard) setNewItem({ ...editCard });
  }, [editCard]);

  // called when changes are made to the form
  function updateNewItem (field, value) {
    setShowSaveError(false);
    const tempItem = { ...newItem };
    tempItem[field] = value;
    setNewItem(tempItem);
  }

  // verify that everything has a value and the save
  function saveItem () {
    if (newItem.title && newItem.description) {
      handleSave(newItem);
    } else {
      setShowSaveError(true);
    }
  }

  // used for sliders
  function valuetext (value) {
    return `${value}`;
  }

  return (
    <Dialog open={showEditDialog} onClose={() => closeDialog()} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>{editCard ? 'Edit item' : 'Create new item'}</DialogTitle>
      <DialogContent>
        {showSaveError &&
          <DialogContentText className='dialog-save-error'>
            Please fill in all fields and try again.
          </DialogContentText>}
        <TextField
          autoFocus
          margin='dense'
          id='new-title-entry'
          label='Title'
          fullWidth
          value={newItem.title}
          onInput={(e) => updateNewItem('title', e.target.value)}
        />
        <TextField
          margin='dense'
          id='new-description-entry'
          label='Description'
          multiline
          rows={4}
          fullWidth
          value={newItem.description}
          onInput={(e) => updateNewItem('description', e.target.value)}
        />
        <Typography id='new-impact-entry' variant='subtitle2' className='new-item-slider-label'>
          Impact
        </Typography>
        <Slider
          defaultValue={newItem.impact}
          onChange={(event, value) => updateNewItem('impact', value)}
          valueLabelFormat={valuetext}
          getAriaValueText={valuetext}
          aria-labelledby='discrete-slider-impact'
          step={1}
          valueLabelDisplay='auto'
          marks={marks}
          min={1}
          max={3}
          className='new-item-slider'
        />
        <Typography id='new-likelihood-entry' variant='subtitle2' className='new-item-slider-label'>
          Likelihood
        </Typography>
        <Slider
          defaultValue={newItem.likelihood}
          onChange={(event, value) => updateNewItem('likelihood', value)}
          valueLabelFormat={valuetext}
          getAriaValueText={valuetext}
          aria-labelledby='discrete-slider-likelihood'
          step={1}
          valueLabelDisplay='auto'
          marks={marks}
          min={1}
          max={3}
          className='new-item-slider'
        />
        <Typography id='new-risk-entry' variant='subtitle2' className='new-item-slider-label'>
          Risk
        </Typography>
        <Slider
          defaultValue={newItem.risk}
          onChange={(event, value) => updateNewItem('risk', value)}
          valueLabelFormat={valuetext}
          getAriaValueText={valuetext}
          aria-labelledby='discrete-slider-risk'
          step={1}
          valueLabelDisplay='auto'
          marks={marks}
          min={1}
          max={3}
          className='new-item-slider'
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => closeDialog()} color='primary'>
          Cancel
        </Button>
        <Button onClick={() => saveItem()} color='primary'>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
