import UserForm from "./UserForm";

function NewUser(props) {
  function userDataSubmitHandler(userData) {
    props.onSubmitUserData(userData);
  }

  return <UserForm onSubmitUserData={userDataSubmitHandler}/>
}

export default NewUser;