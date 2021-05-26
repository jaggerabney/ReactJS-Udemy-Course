import UserList from "./UserList";
import React from "react";

function Users(props) {
  return (
    <UserList users={props.items} />
  );
}

export default Users;