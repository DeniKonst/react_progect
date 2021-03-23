import React from 'react';
import { NavLink } from 'react-router-dom';
import { isPropertySignature } from 'typescript';
import styles from './../Dialogs.module.css';


const Message = (prop) => {
  return (
    <div className={styles.message}> {prop.message} </div>
  )
}

export default Message;
