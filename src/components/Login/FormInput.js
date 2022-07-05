import React, { useRef, useImperativeHandle } from "react";
import classes from "./FormInput.module.css";

const FormInput = React.forwardRef((props, ref) => {
  const formInputRef = useRef();

  function activate() {
    formInputRef.current.focus();
  }

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.type}>{props.text}</label>
      <input
        ref={formInputRef}
        type={props.type}
        id={props.type}
        value={props.value}
        onChange={props.onChange}
        isValid={props.isValid}
      />
    </div>
  );
});

export default FormInput;
