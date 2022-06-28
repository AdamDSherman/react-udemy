import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

// For retrieving date from ExpenseForm component (child to parent).
const saveExpenseDataHandler = (enteredExpenseData) => {
  const expenseData = {
    // Pull out enetered expense object values 
    ...enteredExpenseData,
    // generate random id
    id: Math.random().toString()
  };
  console.log(expenseData);
  // "Lifting state up"
  props.onAddExpense(expenseData);
  setIsEditing(false);
}

const startEditingHandler = () => {
  setIsEditing(true);
}

const stopEditingHandler = () => {
  setIsEditing(false);
}

  return <div className="new-expense">
    {/* Check if it's true or not, render things dependingon condition */}
    {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
    {isEditing && <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onCancel={stopEditingHandler}
    />}
  </div>
}

export default NewExpense;