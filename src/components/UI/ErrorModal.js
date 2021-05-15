import React from "react";

import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.errorConfirm} />;
};

const ModalOverlay = (props) => {
  return (
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
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop errorConfirm={props.errorConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          errorConfirm={props.errorConfirm}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
