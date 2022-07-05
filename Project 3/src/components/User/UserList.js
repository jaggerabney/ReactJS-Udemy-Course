import UserItem from "./UserItem";
import Card from "../UI/Card"
import "./UserList.css";

function UserList(props) {
  if (props.users.length === 0) {
    return null;
  }

  return (
    <Card>
      <ul className="user-list">
        {props.users.map((user) => (
          <UserItem username={user.username} age={user.age} />
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
