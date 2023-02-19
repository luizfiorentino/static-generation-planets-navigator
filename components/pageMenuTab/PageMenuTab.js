import React from "react";
import styles from "./PageMenuTab.module.css";

export default function PageMenuTab(props) {
  return (
    <div className={styles.main}>
      <h5 className={styles.tab}>
        <span className={styles.number}>01</span> Overview
      </h5>
      <h5 className={styles.tab}>
        {" "}
        <span className={styles.number}>02</span> Internal Structure
      </h5>
      <h5 className={styles.tab}>
        {" "}
        <span className={styles.number}>03</span> Surface Geology
      </h5>
    </div>
  );
}
