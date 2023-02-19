import React from "react";
import styles from "./Description.module.css";

export default function Description(props) {
  return <p className={styles.main}>{props.text}</p>;
}
