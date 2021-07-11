import React, {
  useEffect,
  useReducer,
  useState,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import FormInput from "./FormInput";

function formReducer(state, action) {
  switch (action.type) {
    case "EMAIL_INPUT":
      return {
        ...state,
        email: action.val,
        emailIsValid: action.val.includes("@"),
      };
    case "PASSWORD_INPUT":
      return {
        ...state,
        password: action.val,
        passwordIsValid: action.val.trim().length > 6,
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
  const emailInputRef = useRef(),
    passwordInputRef = useRef();

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

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authContext.onLogin(formState.email, formState.password);
    } else if (!formState.emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <FormInput
          ref={emailInputRef}
          type="email"
          text="E-Mail"
          value={formState.email}
          onChange={emailChangeHandler}
          isValid={formState.emailIsValid}
        />
        <FormInput
          ref={passwordInputRef}
          type="password"
          text="Password"
          value={formState.password}
          onChange={passwordChangeHandler}
          isValid={formState.passwordIsValid}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
