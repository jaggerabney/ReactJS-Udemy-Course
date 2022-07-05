import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

function NewExpense(props) {
  const [active, setActive] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    buttonClickHandler(); // if you think about it, a button is clicked to get here
    props.onAddExpense(expenseData);
  }

  function buttonClickHandler() {
    setActive(!active);
  }

  if (active) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelButtonClick={buttonClickHandler}
        />
      </div>
    );
  }

  return (
    <div className="new-expense">
      <button onClick={buttonClickHandler}>Add New Expense</button>
    </div>
  );
}

export default NewExpense;
