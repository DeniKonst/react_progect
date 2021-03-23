import React from 'react';
import { NavLink } from 'react-router-dom';
import { isPropertySignature } from 'typescript';
import styles from './../Dialogs.module.css';


const DialogItem = (prop) => {
  let path = '/Dialogs/' + prop.id;
  return (
    <div className={`${styles.dialog} ${styles.active}`}>
      <NavLink to={path}> {prop.name} </NavLink>
    </div>
  )
}

export default DialogItem;
