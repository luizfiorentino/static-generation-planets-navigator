import React from "react";
import styles from "./PageMenuTab.module.css";
import ItemSelector from "../itemSelector/ItemSelector";

export default function PageMenuTab(props) {
  console.log("pageMenuTab props:", props);

  return (
    <div className={styles.main}>
      <ItemSelector
        className={
          props.subpage === "overview"
            ? `${styles.tab} ${styles.active}`
            : styles.tab
        }
        link={`/planets/${props.planet}/`}
        highlighted={props.subpage === "overview" ? true : false}
      >
        <span className={styles.number}>01</span> Overview
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
        highlighted={props.subpage === "structure" ? true : false}
      >
        <span className={styles.number}>02</span> Internal Structure
      </ItemSelector>
      <ItemSelector
        className={
          props.subpage === "surface"
            ? `${styles.tab} ${styles.active}`
            : styles.tab
        }
        link={`/planets/${props.planet}/surface`}
        highlighted={props.subpage === "surface" ? true : false}
      >
        <span className={styles.number}>03</span> Surface Geology
      </ItemSelector>
    </div>
  );
}
