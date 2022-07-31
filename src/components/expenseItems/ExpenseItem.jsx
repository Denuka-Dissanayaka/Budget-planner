import React, {useContext} from 'react'
import { Typography, Box, Stack } from '@mui/material';
import {TiDelete} from 'react-icons/ti';
import {AppContext} from '../../context/AppContext'

function ExpenseItem({name, cost, id}) {
  const {dispatch} = useContext(AppContext);

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id
    })
  }
  return (
    <Box sx={{
        display: 'flex',
        padding: '10px',
        justifyContent: 'space-between',
        border: '2px solid #c4bfbe',
        borderRadius : '8px'
    }} mb={1}>
      <Typography variant='body2' mr={2}>{name}</Typography>
      <Box sx={{display: 'flex'}}>
        <Typography variant='body2' mr={1}>{cost}</Typography>
        <TiDelete size='1.5em' onClick={handleDelete}></TiDelete>
      </Box>
    </Box>
  )
}

export default ExpenseItem
