import React, { useState } from "react";

function UserForm(props) {
  const [userInput, setUserInput] = useState({
    enteredUsername: "",
    enteredAge: "",
  });

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

  function submitHandler(event) {
    event.preventDefault();
    clearUserInput();
  }

  function clearUserInput() {
    setUserInput({
      enteredUsername: "",
      enteredAge: "",
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Username</label>
        <input
          type="text"
          onChange={usernameChangeHandler}
          value={userInput.enteredUsername}
        />
      </div>
      <div>
        <label>Age (Years)</label>
        <input
          type="number"
          min="0"
          max="122"
          onChange={ageChangeHandler}
          value={userInput.enteredAge}
        />
      </div>
      <div>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
}

export default UserForm;
