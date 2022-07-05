import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import ErrorModal from "../Modal/ErrorModal";
import "./UserForm.css";

function UserForm(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  function errorHandler() {
    setError(null);
  }

  function submitHandler(event) {
    event.preventDefault();
    
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      clearUserInput();
      return;
    } else if (enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (greater than 0).",
      });
      clearUserInput();
      return;
    }

    const userData = {
      username: enteredUsername,
      age: enteredAge,
      usernameIsValid: function () {
        return this.username.trim().length > 0;
      },
      ageIsValid: function () {
        return this.age > 0 && this.age < 123;
      },
    };

    props.onSubmitUserData(userData);
    clearUserInput();
  }

  function clearUserInput() {
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  }

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form className="user-form" onSubmit={submitHandler}>
        <div className="user-form__controls">
          <div className="user-form__control">
            <label>Username</label>
            <input
              type="text"
              ref={nameInputRef}
            />
          </div>
          <div className="user-form__control">
            <label>Age (Years)</label>
            <input
              type="number"
              ref={ageInputRef}
            />
          </div>
          <div>
            <Button type="submit">Add User</Button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default UserForm;
