import React, { useEffect, useReducer, useState, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

function formReducer(state, action) {
  switch (action.type) {
    case "EMAIL_INPUT":
      return {
        email: action.val,
        password: state.password,
        emailIsValid: action.val.includes("@"),
        passwordIsValid: state.passwordIsValid,
      };
    case "PASSWORD_INPUT":
      return {
        email: state.email,
        password: action.val,
        emailIsValid: state.emailIsValid,
        passwordIsValid: action.val.trim().length > 6,
      };
    case "INPUT_BLUR":
      return {
        email: state.email,
        password: state.password,
        emailIsValid: state.emailIsValid,
        passwordIsValid: state.passwordIsValid,
      };
    default:
      return {
        email: "",
        password: "",
        emailIsValid: null,
        passwordIsValid: null,
      };
  }
}

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(null); // using the validity checks in formState causes bugs
  const [formState, dispatchForm] = useReducer(formReducer, {
    email: "",
    password: "",
    usernameIsValid: null,
    passwordIsValid: null,
  });
  const authContext = useContext(AuthContext);

  useEffect(() => {
    const validityCheckTimer = setTimeout(() => {
      setFormIsValid(formState.emailIsValid && formState.passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(validityCheckTimer);
    };
  }, [formState.emailIsValid, formState.passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchForm({ type: "EMAIL_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchForm({ type: "PASSWORD_INPUT", val: event.target.value });
  };

  const blurHandler = () => {
    dispatchForm({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authContext.onLogin(formState.email, formState.password);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            formState.emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={formState.email}
            onChange={emailChangeHandler}
            onBlur={blurHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            formState.passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formState.password}
            onChange={passwordChangeHandler}
            onBlur={blurHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
