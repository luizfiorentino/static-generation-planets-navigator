import React from "react";
import styles from "./PageMenuTab.module.css";
import ItemSelector from "../itemSelector/ItemSelector";

export default function PageMenuTab(props) {
  //console.log("pageMenuTab props:", props);

  return (
    <div className={styles.main}>
      <ItemSelector
        className={
          props.subpage === "overview"
            ? `${styles.tab} ${styles.active}`
            : styles.tab
        }
        link={`/planets/${props.planet}/`}
      >
        {/* <span className={styles.number}>01</span> Overview */}
        overview
      </ItemSelector>
      <ItemSelector
        className={
          props.subpage === "structure"
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
          props.subpage === "surface"
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
