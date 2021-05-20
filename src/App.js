import React from 'react';
import Card from "./components/UI/Card";
import NewUser from "./components/NewUser/NewUser";
import Users from "./components/User/Users";

function App() {
  return (
    <div>
      <Card>
        <NewUser />
      </Card>
      <Users />
    </div>
  );
}

export default App;
