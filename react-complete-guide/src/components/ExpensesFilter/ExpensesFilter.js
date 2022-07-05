import "./ExpensesFilter.css";
import React, { useState } from "react";

// this component is an example of controlled component:
// the state of this component is controlled by another component
// (i.e. the Expenses component)
function ExpensesFilter(props) {
  function onSelectHandler(event) {
    props.onSelectOption(event.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={onSelectHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;