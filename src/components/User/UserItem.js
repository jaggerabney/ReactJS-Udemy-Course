function UserItem(props) {
  return <div>
    <p>{props.username}, ({props.age} {props.age === 1 ? "year" : "years"})</p>
  </div>
}

export default UserItem;