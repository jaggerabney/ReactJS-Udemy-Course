import "./UserItem.css";

function UserItem(props) {
  return <div className="user-item">
    <p>{props.username} ({props.age} {props.age == 1 ? "year" : "years"})</p>
  </div>
}

export default UserItem;