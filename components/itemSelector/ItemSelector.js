import React from "react";
import styles from "./ItemSelector.module.css";

export default function ItemSelector(props) {
  const propsI = props;
  console.log("item selector props=", props.children);

  return (
    <h5 className={`${styles.main} ${styles[props.variant]}`}>
      {props.children}
    </h5>
  );
}
