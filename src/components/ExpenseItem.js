import './ExpenseItem.css';
import React, {useState} from 'react';

function ExpenseItem(props) {
  const d = new Date();
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle('Updated');
  }
  return <div className = "expense-item">
    <div className="expense-date"> {props.date.toDateString()} </div>
    <div className = "expense-item__description">
      <h2>{title}</h2>
      <div className = "expense-item__price">
       ${props.amount}
      </div>
      <button onClick={clickHandler}>Change title</button>
    </div>
  </div>;
}

export default ExpenseItem;
