import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../Ui/Card';
import './ExpenseItem.css';

const ExpenseItem= (props) => {

  const [title, setTitle] = useState(props.title); // A react hook
  // Title is the prop.title var. setTitle is the function to change it.
  console.log("expense item evaluated by react");

  const clickHandler = () => {
    setTitle('Updated'); // Use setTitle function to update var, tells react to re-execute component.
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
