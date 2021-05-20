import React, { useState } from 'react';
import Card from "./components/UI/Card";
import NewUser from "./components/NewUser/NewUser";
import Users from "./components/User/Users";

function App() {
  const [users, setUsers] = useState([]);

  function userDataSubmitHandler(userData) {
    setUsers(prevState => {
      return [...prevState, userData];
    });
  }

  return (
    <div>
      <Card>
        <NewUser onSubmitUserData={userDataSubmitHandler}/>
      </Card>
      <Users items={users}/>
    </div>
  );
}

export default App;
