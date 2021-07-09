import React, { useState } from "react";
import Button from "../UI/Button";
import ErrorModal from "../Modal/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import "./UserForm.css";

function UserForm(props) {
  const [userInput, setUserInput] = useState({
    enteredUsername: "",
    enteredAge: "",
  });
  const [error, setError] = useState();

  function usernameChangeHandler(event) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredUsername: event.target.value,
      };
    });
  }

  function ageChangeHandler(event) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAge: event.target.value,
      };
    });
  }

  function errorHandler() {
    setError(null);
  }

  function submitHandler(event) {
    event.preventDefault();

    if (
      userInput.enteredUsername.trim().length === 0 ||
      userInput.enteredAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      clearUserInput();
      return;
    } else if (+userInput.enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (greater than 0).",
      });
      clearUserInput();
      return;
    }

    const userData = {
      username: userInput.enteredUsername,
      age: +userInput.enteredAge,
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
    setUserInput({
      enteredUsername: "",
      enteredAge: "",
    });
  }

  return (
    <Wrapper>
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
              onChange={usernameChangeHandler}
              value={userInput.enteredUsername}
            />
          </div>
          <div className="user-form__control">
            <label>Age (Years)</label>
            <input
              type="number"
              onChange={ageChangeHandler}
              value={userInput.enteredAge}
            />
          </div>
          <div>
            <Button type="submit">Add User</Button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}

export default UserForm;
