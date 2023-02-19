import React from "react";
import styles from "./ItemSelector.module.css";

export default function ItemSelector(props) {
  return <h5 className={styles.main}>{props.children}</h5>;
}
