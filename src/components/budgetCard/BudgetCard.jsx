import React, {useContext} from 'react'
import { Typography, Box, Stack } from '@mui/material';
import {AppContext} from '../../context/AppContext'

function BudgetCard({name, amount, colorBg}) {
  const {budget, expenses} = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost)
  }, 0)

  if(name === 'Budget') {
    amount = budget
  } else if(name === 'Remaining') {
    amount = budget - totalExpenses;
  } else if(name === 'Spent so far') {
    amount =  totalExpenses;
  }
  return (
    <Box mr={3} mb={{xs:1}} sx={{
        padding: '10px 20px',
        backgroundColor: colorBg,
        color: 'white',
        borderRadius: '8px'
        
    }}>
      <Typography variant='body2' sx={{fontSize: '1.5rem'}}>{name}: ${amount}</Typography>
    </Box>
  )
}

export default BudgetCard
