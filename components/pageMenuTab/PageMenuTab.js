import React from "react";
import styles from "./PageMenuTab.module.css";

export default function PageMenuTab(props) {
  //console.log("pageMenuTab props:", props);

  const setItem = (page) => {
    props.setPage(page);
    if (page === "Overview") {
      props.setTab(0);
    } else if (page === "Internal Structure") {
      props.setTab(1);
    } else if (page === "Surface Geology") {
      props.setTab(2);
    }
  };

  return (
    <div className={styles.main}>
      <h5
        className={
          props.selectedTab === 0
            ? `${styles.tab} ${styles.active}`
            : styles.tab
        }
        onClick={() => setItem("Overview")}
      >
        <span className={styles.number}>01</span> Overview
      </h5>
      <h5
        className={
          props.selectedTab === 1
            ? `${styles.tab} ${styles.active}`
            : styles.tab
        }
        onClick={() => setItem("Internal Structure")}
      >
        <span className={styles.number}>02</span> Internal Structure
      </h5>
      <h5
        className={
          props.selectedTab === 2
            ? `${styles.tab} ${styles.active}`
            : styles.tab
        }
        onClick={() => setItem("Surface Geology")}
      >
        <span className={styles.number}>03</span> Surface Geology
      </h5>
    </div>
  );
}
