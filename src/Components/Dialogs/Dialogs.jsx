import React from "react";
import { isPropertySignature } from "typescript";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (prop) => {
  let dialogsElements = prop.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
  ));

  let messagesElements = prop.messages.map((mes) => (
    <Message key={mes.id} message={mes.message} id={mes.id} />
  ));
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItem}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
