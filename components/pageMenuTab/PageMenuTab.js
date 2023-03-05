import React from "react";
import styles from "./PageMenuTab.module.css";
import ItemSelector from "../itemSelector/ItemSelector";

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
      <ItemSelector
        className={
          props.selectedTab === 0
            ? `${styles.tab} ${styles.active}`
            : styles.tab
        }
        onClick={() => setItem("Overview")}
      >
        <span className={styles.number}>01</span> Overview
      </ItemSelector>
      <ItemSelector
        className={
          props.selectedTab === 1
            ? `${styles.tab} ${styles.active}`
            : styles.tab
        }
      >
        <span className={styles.number}>02</span> Internal Structure
      </ItemSelector>
      <ItemSelector
        className={
          props.selectedTab === 2
            ? `${styles.tab} ${styles.active}`
            : styles.tab
        }
      >
        <span className={styles.number}>03</span> Surface Geology
      </ItemSelector>
    </div>
  );
}
