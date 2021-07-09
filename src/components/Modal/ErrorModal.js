import Button from "../UI/Button";
import Card from "../UI/Card";
import React from "react";
import styles from "./ErrorModal.module.css";

function ErrorModal(props) {
  return (
    <React.Fragment>
      <div className={styles.backdrop} onClick={props.onConfirm}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </React.Fragment>
  );
}

export default ErrorModal;
