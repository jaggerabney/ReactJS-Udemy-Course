import ExpensesList from "./ExpensesList"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import React, { useState } from "react";
import "./Expenses.css";

function Expenses(props) {
  const [selectedOption, setSelectedOption] = useState("2021");
  const filteredExpenses = props.items.filter((expense) => {
    return Number(selectedOption) === expense.date.getFullYear();
  });

  function selectOptionHandler(selection) {
    setSelectedOption(selection);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedOption}
        onSelectOption={selectOptionHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
