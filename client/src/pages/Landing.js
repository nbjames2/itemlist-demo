import React, { useContext, useEffect, useState, useRef } from 'react';
import './Landing.scss';
import {
  Container,
  Box,
  Grid,
  Button,
  Icon,
  Fab
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import { getData, postData, deleteData } from '../helpers/apiCalls';
import { EditDialog, DeleteDialog, ItemCard } from '../components';

const Landing = () => {
  const { currentUser } = useContext(AuthContext);
  const [redirect, setRedirect] = useState(false);
  const [itemList, setItemList] = useState([]);
  const [showAsGrid, setShowAsGrid] = useState(true);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [editCard, setEditCard] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const redirectTimeoutRef = useRef();

  // only make call to api if user is logged in
  // otherwise redirect to login
  useEffect(() => {
    if (currentUser) {
      clearTimeout(redirectTimeoutRef.current);
      initialize();
    } else {
      redirectTimeoutRef.current = setTimeout(() => {
        setRedirect(true);
      }, 100);
    }
  }, [currentUser]);

  async function initialize () {
    const res = await getData(currentUser.token, '/list/all');
    setItemList(res.itemList);
  }

  // iterate over items returned from server to create cards
  function renderItemList () {
    return itemList.map(item => {
      return <ItemCard key={item._id} showAsGrid={showAsGrid} item={item} handleEdit={handleEdit} handleDelete={handleDelete} />;
    });
  }

  // open the edit dialog
  function handleEdit (item) {
    setEditCard(item);
    setShowEditDialog(true);
  }

  // open the delete dialog
  function handleDelete (item) {
    setEditCard(item);
    setShowDeleteDialog(true);
  }

  // make call to api to delete an item
  async function deleteItem (itemId) {
    closeDialog();
    const result = await deleteData(currentUser.token, `/list/${itemId}`);
    setItemList(result.itemList);
  }

  // make call to api to save or update item
  async function handleSave (newItem) {
    closeDialog();
    const isUpdate = newItem._id;
    const result = await postData(currentUser.token, isUpdate ? `/list/update/${newItem._id}` : '/list/new', { item: newItem });
    setItemList(result.itemList);
  }

  // close all dialogs
  function closeDialog () {
    setEditCard(null);
    setShowEditDialog(false);
    setShowDeleteDialog(false);
  }

  return (
    <Container className='main-body-container'>
      {redirect && <Redirect to='/login' />}
      <Box className='new-item-button-wrapper'>
        <Button variant='contained' color='primary' onClick={() => setShowEditDialog(true)}>
          <Icon>add</Icon>
          Add item
        </Button>
      </Box>
      <Grid
        container
        spacing={3}
        direction='row'
        justify={showAsGrid ? 'flex-start' : 'center'}
        alignItems='flex-start'
        xs={showAsGrid ? 'auto' : 5}
        sm={showAsGrid ? 'auto' : 5}
        md={showAsGrid ? 'auto' : 5}
        lg={showAsGrid ? 'auto' : 5}
        xl={showAsGrid ? 'auto' : 5}
      >
        {renderItemList()}
      </Grid>
      <Fab color='primary' aria-label='change view' onClick={() => setShowAsGrid(!showAsGrid)} className='floating-button'>
        <Icon>{showAsGrid ? 'reorder' : 'view_module'}</Icon>
      </Fab>
      <EditDialog editCard={editCard} handleSave={handleSave} showEditDialog={showEditDialog} closeDialog={closeDialog} />
      <DeleteDialog item={editCard} open={showDeleteDialog} closeDialog={closeDialog} deleteItem={deleteItem} />
    </Container>
  );
};

export default Landing;
