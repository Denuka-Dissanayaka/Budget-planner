import { Typography, Box, Stack } from '@mui/material';
import BudgetCard from './components/budgetCard/BudgetCard';
import ExpenseForm from './components/expenseForm/ExpenseForm';
import ExpenseItems from './components/expenseItems/ExpenseItems';
import {AppProvider} from './context/AppContext'

function App() {
  return (
    <AppProvider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" align="center">
          My Budget planner
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} mt={5}>
          <BudgetCard name="Budget" amount="$10000" colorBg="blue" />
          <BudgetCard name="Remaining" amount="$8000" colorBg="green" />
          <BudgetCard name="Spent so far" amount="$2000" colorBg="red" />
        </Stack>
        <Typography variant="h3" align="center" mt={3} mb={3}>
          Expenses
        </Typography>
        <ExpenseItems />
        <Typography variant="h3" align="center" mt={2} mb={2}>
          Add Expenses
        </Typography>
        <ExpenseForm />
      </Box>
    </AppProvider>
  );
}

export default App;
