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
        link={`/planets/${props.planet}/`}
      >
        {/* <span className={styles.number}>01</span> Overview */}
        overview
      </ItemSelector>
      <ItemSelector
        className={
          props.selectedTab === 1
            ? `${styles.tab} ${styles.active}`
            : styles.tab
        }
        link={
          `/planets/${props.planet}/structure`
          //  link={
          //   pages.indexOf(page) === 0
          //     ? `/planets/${props.planet}`
          //     : `/planets/${props.planet}/${page}`
          // }
        }
      >
        {/* <span className={styles.number}>02</span> Internal Structure */}
        structure
      </ItemSelector>
      <ItemSelector
        className={
          props.selectedTab === 2
            ? `${styles.tab} ${styles.active}`
            : styles.tab
        }
        link={`/planets/${props.planet}/surface`}
      >
        {/* <span className={styles.number}>03</span> Surface Geology */}
        surface
      </ItemSelector>
    </div>
  );
}
