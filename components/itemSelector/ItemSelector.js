import React from "react";
import styles from "./ItemSelector.module.css";
import { useState } from "react";

export default function ItemSelector(props) {
  console.log("item selector props=", props);

  return (
    <h5
      className={
        props.item !== props.itemSelected
          ? `${styles.main} ${styles[props.variant]}`
          : `${styles.mainActive} ${styles[props.variant]}`
      }
      onClick={() => props.setItem(props.item)}
    >
      {props.children}
    </h5>
  );
}
