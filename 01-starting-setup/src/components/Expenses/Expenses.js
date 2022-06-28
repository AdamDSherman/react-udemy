import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from "../Ui/Card";
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expense = (props) => {

  const [selectedYear, setSelectedYear] = useState('2022');
  //const [itemsArr, setItemsArr] = useState(props.items);

  const yearChangeHandler = (chosenYear) => {
    setSelectedYear(chosenYear);
    //setItemsArr(props.items.filter(item => item.date.getFullYear() == chosenYear));
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        {/* Controlled component */}
        <ExpensesFilter selected={selectedYear} onYearChange={yearChangeHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expense;