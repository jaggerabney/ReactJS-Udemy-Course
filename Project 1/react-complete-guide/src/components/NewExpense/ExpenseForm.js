import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm(props) {
  //   const [enteredTitle, setEnteredTitle] = useState(""),
  //     [enteredAmount, setEnteredAmount] = useState(""),
  //     [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  function titleChangeHandler(event) {
    // anonymous arrow updates are used because state updates are
    // scheduled in react; they are not done instantly
    // doing it like this is the safest way possible;
    // it ensures that the previous state will be 100% correct
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  }

  function amountChangeHandler(event) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
  }

  function dateChangeHandler(event) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    const [year, month, day] = userInput.enteredDate.split("-");

    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(year, month - 1, day) // months are 0-based
    }

    props.onSaveExpenseData(expenseData);
    clearUserInput();
  }

  function cancelButtonClickHandler() {
    props.onCancelButtonClick();
  }

  function clearUserInput() {
    setUserInput({
      enteredTitle: "",
      enteredAmount: "", 
      enteredDate: ""
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.00"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelButtonClickHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
