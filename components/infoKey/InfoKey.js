import React from "react";
import styles from "./InfoKey.module.css";

export default function InfoKey(props) {
  return <p className={styles.main}>{props.children}</p>;
}
