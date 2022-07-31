import React, {useContext} from 'react'
import { Typography, Box, Stack } from '@mui/material';
import ExpenseItem from './ExpenseItem';
import {AppContext} from '../../context/AppContext'

function ExpenseItems() {
    const {expenses} = useContext(AppContext)
  return (
    <Stack direction={'column'}>
      {
        expenses.map((item) => (
            <ExpenseItem key={item.id} name={item.name} cost={item.cost} id={item.id}/>
        ))
      }
    </Stack>
  )
}

export default ExpenseItems
