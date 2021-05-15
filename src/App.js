import React, {useState} from 'react';
import ExpenseItem from './components/ExpenseItem';
import Card from './components/Card';
import './components/expense.css';
import NewExpense from './components/NewExpense';
import ExpenseFilter from './components/ExpenseFilter';
import ExpensesChart from './components/ExpensesChart';


function App() {
  const expenses = [
      {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
      },
      { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
      {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
      },
      {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
      },
    ];

    const [expense, setExpense] = useState(expenses);

    const saveExpenseDataHandler = (newExpense) => {
      // console.log(newExpense);
      setExpense((prevState) => {
        return [newExpense, ...prevState];
      });
    };

    const [filteredYear, setFilteredYear] = useState('2021');
    const yearChangeHandler = (newYear) =>{
      setFilteredYear(newYear);
    }

    const filteredExpenses = expense.filter((e) => {
      return e.date.getFullYear().toString()===filteredYear;
    });

  return (
    <div className="expenses">
      <NewExpense onSaveExpenseData = {saveExpenseDataHandler}/>
      <ExpenseFilter selected={filteredYear} onChangeYear={yearChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      {filteredExpenses.length>0?filteredExpenses.map((e) => {
        return (<Card className = "expense-item">
          <ExpenseItem
              key={e.id}
              title = {e.title}
              amount = {e.amount}
              date = {e.date}
              />
          </Card>
      );
    }) : <h2 class="No">Found No Expenses</h2>}
    </div>
  );
}

export default App;
