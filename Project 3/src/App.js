import React, { useState } from "react";
import Card from "./components/UI/Card";
import NewUser from "./components/NewUser/NewUser";
import Users from "./components/User/Users";

function App() {
  const [users, setUsers] = useState([]);

  function userDataSubmitHandler(userData) {
    setUsers((prevState) => {
      return [...prevState, userData];
    });
  }

  return (
    <React.Fragment>
      <Card>
        <NewUser onSubmitUserData={userDataSubmitHandler} />
      </Card>
      <Users items={users} />
    </React.Fragment>
  );
}

export default App;
