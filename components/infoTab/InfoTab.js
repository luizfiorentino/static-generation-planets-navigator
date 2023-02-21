import React from "react";
import styles from "./InfoTab.module.css";

export default function InfoTab(props) {
  console.log("infotab: props", props);
  return (
    <div className={styles.main}>
      <p className={styles.infoKey}>{props.call}</p>

      <h4 className={styles.infoValue}>{props.value}</h4>
    </div>
  );
}
