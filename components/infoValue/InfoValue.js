import React from "react";
import styles from "./InfoValue.modlue.css";

export default function InfoValue() {
  return <h3 className={styles.main}>{props.children}</h3>;
}
