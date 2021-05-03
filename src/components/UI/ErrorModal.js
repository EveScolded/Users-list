import React from "react";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.errorConfirm} />
      <Card className={classes.modal}>
        <hearder className={classes.header}>
          <h2>{props.title}</h2>
        </hearder>

        <div>
          <p>{props.message}</p>
        </div>

        <footer className={classes.actions}>
          <Button onClick={props.errorConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
