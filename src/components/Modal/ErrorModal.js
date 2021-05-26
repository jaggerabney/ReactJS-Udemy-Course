import Button from "../UI/Button";

function ErrorModal(props) {
  // TODO: add this modal to the page somehow!

  function modalButtonClickHandler() {
    props.onClose();
  }
  
  return <div>
    <h2 className="error-modal__title">{props.title}</h2>
    <p>{props.children}</p>
    <Button type="button" onClick={modalButtonClickHandler}>Okay</Button>
  </div>
}

export default ErrorModal;