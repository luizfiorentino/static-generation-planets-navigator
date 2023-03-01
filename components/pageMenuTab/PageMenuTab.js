import React from "react";
import styles from "./PageMenuTab.module.css";

export default function PageMenuTab(props) {
  //console.log("pageMenuTab props:", props);

  return (
    <div className={styles.main}>
      <h5
        className={
          props.index === "Overview"
            ? `${styles.tab} ${styles.active}`
            : styles.tab
        }
        onClick={() => props.setPage("Overview")}
      >
        <span className={styles.number}>01</span> Overview
      </h5>
      <h5
        className={
          props.index === "Internal Structure"
            ? `${styles.tab} ${styles.active}`
            : styles.tab
        }
        onClick={() => props.setPage("Internal Structure")}
      >
        <span className={styles.number}>02</span> Internal Structure
      </h5>
      <h5
        className={
          props.index === "Surface Geology"
            ? `${styles.tab} ${styles.active}`
            : styles.tab
        }
        onClick={() => props.setPage("Surface Geology")}
      >
        <span className={styles.number}>03</span> Surface Geology
      </h5>
    </div>
  );
}
