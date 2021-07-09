import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./ErrorModal.module.css";

function ErrorModal(props) {
  // TODO: add this modal to the page somehow!

  function modalButtonClickHandler() {
    props.onClose();
  }

  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
}

export default ErrorModal;
