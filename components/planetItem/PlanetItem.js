import React from "react";
import styles from "./PlanetItem.module.css";

export default function PlanetItem(props) {
  return <h5 className={styles.main}>{props.children}</h5>;
}
