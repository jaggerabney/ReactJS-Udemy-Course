import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

// component functions can be written as arrow functions
// it's 100% optional - as the project stands right now,
// there's no benefit to doing it either way

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const [active, setActive] = useState(false);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  function buttonClickHandler() {
    setActive(!active);
  }

  return (
    // this is called jsx - javascript xml
    // its a developer-friendly way of writing pages that gets
    // transformed during compilation

    // pure javascript HTML manipulation is called imperative -
    // you are giving clear, step-by-step instructions on what
    // JS should be doing
    // it works, but is cumbersome and verbose
    // with react, we just specify the end state - what we want to see -
    // and react does all of the heavy lifting in the background

    // custom components are put into their own files
    // they exist in a sort of component tree, where the topmost component
    // is rendered into an html page and all subordinate components
    // are used as html elements in that page

    // custom components can also have their own attributes
    // from what i can tell, you literally just write whatever
    // and it becomes one of the component's properties
    // pretty cool tbh
    // you also need to specify the properties parameter in the
    // components function!
    <div>
      <NewExpense
        onAddExpense={addExpenseHandler}
        onButtonClick={buttonClickHandler}
      />
      <Expenses items={expenses} />
    </div>

    // all react elements must have their first letter capitalized;
    // that is how they are identified as react components
  );

  // this is the alternate to using JSX code
  // if you want to do this (for some reason), make sure to
  // import React from "react";
  // this is how it was done in the past
  // this functionality is also why there can only be one React component
  // returned in a return statement; it only accepts one argument
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, {items: expenses})
  // );
}

export default App;
