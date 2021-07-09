import React, { useState } from "react";
import Card from "./components/UI/Card";
import NewUser from "./components/NewUser/NewUser";
import Users from "./components/User/Users";
import Wrapper from "./components/Helpers/Wrapper";

function App() {
  const [users, setUsers] = useState([]);

  function userDataSubmitHandler(userData) {
    setUsers((prevState) => {
      return [...prevState, userData];
    });
  }

  return (
    <Wrapper>
      <Card>
        <NewUser onSubmitUserData={userDataSubmitHandler} />
      </Card>
      <Users items={users} />
    </Wrapper>
  );
}

export default App;
