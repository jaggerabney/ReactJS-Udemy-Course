// it's common convention in React applications to
// name things in PascalCase

// components in react are just javascript functions -
// special ones that return jsx code
// convention dictates that
// this function has the same name as the component

// there is one important rule regarding react components:
// you must have only one root element per component

// css files can be written for components as well;
// they must be imported for them to work however
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItem(props) {
  // data can be passed to components
  // this is done via "props", which are essentially
  // custom HTML attributes

  // in order to dynamically update aspects of a React component,
  // you need to use a React hook - specifically the useState hook
  // since React apps are only drawn once upon loading,
  // there must be something that keeps track of when it should
  // redraw certain components whose states are being updated
  // these component instance states exist separately from each other!

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

// components must be exported in order to be used
export default ExpenseItem;
