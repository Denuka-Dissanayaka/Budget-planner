import React, { useState, useContext } from 'react';
import { Typography, Box, Stack, TextField, Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import {AppContext} from '../../context/AppContext'

function ExpenseForm() {
  const [name, setName] = useState('')
  const [cost, setCost] = useState('')

  const {dispatch} = useContext(AppContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const expense = {
      id: uuidv4,
      name: name,
      cost: parseInt(cost)
    }

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense
    })
  }
  return (
    <Box>
      <Box onSubmit={onSubmit} component={"form"} sx={{'& .MuiTextField-root': { m: 1, width: {xs:'30ch', sm:'60ch'} }}}>
        <Stack direction={'column'}>
        <TextField
          required
          id="outlined-password-input"
          label="Name"
          type="text"
          autoComplete=""
          mb={1}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          id="outlined-password-input"
          label="Cost"
          type="text"
          autoComplete=""
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
        <Button variant="contained" type='submit'>Save</Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default ExpenseForm
