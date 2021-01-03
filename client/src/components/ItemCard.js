import React from 'react';
import './ItemCard.scss';
import {
  Card,
  CardHeader,
  Box,
  Typography,
  Tooltip,
  IconButton,
  Icon,
  CardContent,
  CardActions,
  Grid
} from '@material-ui/core';

const ItemCard = ({ item, handleEdit, handleDelete, showAsGrid }) => {
  return (
    <Grid
      item
    >
      <Card raised className={showAsGrid ? 'card-wrapper' : 'card-wrapper card-list-view'}>
        <CardHeader title={item.title}>jkalsdjg</CardHeader>
        <CardContent>
          <Typography variant='body1'>{item.description}</Typography>
        </CardContent>
        <CardActions className='card-actions'>
          <Box className='card-numerical-values-container'>
            <Box className='card-numerical-value'>
              <IconButton className='bordered-box'>{item.impact}</IconButton>
              <Typography variant='body2' className='numerical-value-label'>Impact</Typography>
            </Box>
            <Box className='card-numerical-value'>
              <IconButton className='bordered-box'>{item.likelihood}</IconButton>
              <Typography variant='body2' className='numerical-value-label'>Likelihood</Typography>
            </Box>
            <Box className='card-numerical-value'>
              <IconButton className='bordered-box'>{item.risk}</IconButton>
              <Typography variant='body2' className='numerical-value-label'>Risk</Typography>
            </Box>
          </Box>
          <Box>
            <Tooltip title='Edit card'>
              <IconButton onClick={() => handleEdit(item)}><Icon color='primary'>edit</Icon></IconButton>
            </Tooltip>
            <Tooltip title='Delete card'>
              <IconButton onClick={() => handleDelete(item)}><Icon color='secondary'>delete_forever</Icon></IconButton>
            </Tooltip>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ItemCard;
