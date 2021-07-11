import React from "react";
import classes from "./FormInput.module.css";

function FormInput(props) {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.type}>{props.text}</label>
      <input
        type={props.type}
        id={props.type}
        value={props.value}
        onChange={props.onChange}
        isValid={props.isValid}
      />
    </div>
  );
}

export default FormInput;
