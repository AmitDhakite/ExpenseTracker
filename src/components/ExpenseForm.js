import './ExpenseForm.css';
import React, {useState} from 'react';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });
  // const titleChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return {...prevState,
  //     enteredTitle: event.target.value,};
  //   });
  // }
  // const amountChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return {...prevState,
  //     enteredAmount: event.target.value,};
  //   });
  // }
  // const dateChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return {...prevState,
  //     enteredDate: event.target.value,};
  //   });
  // }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData);
    // console.log(expenseData);
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  };

  const [form, setForm] = useState('false');

  const showForm = () => {
    setForm('true');
  }
  const hideForm = () => {
    setForm('false');
  }

  return ((form=='false')?(<button onClick={showForm}>Add Expense</button>):(<form onSubmit={submitHandler}>
    <div className = "new-expense__controls">
      <div className = "new-expense__control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
      </div>
      <div className = "new-expense__control">
        <label>Amount</label>
        <input type="number" value={enteredAmount}  onChange={amountChangeHandler}/>
      </div><div className = "new-expense__control">
        <label>Date</label>
        <input type="date" value={enteredDate} min = "2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
      </div>
    </div>
    <div className = "new-expense__actions">
      <button onClick={hideForm}>Cancel</button>
      <button type="submit">Add Expense</button>
    </div>
  </form>));
}

export default ExpenseForm;
