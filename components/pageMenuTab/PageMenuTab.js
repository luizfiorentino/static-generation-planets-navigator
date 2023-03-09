import React from "react";
import styles from "./PageMenuTab.module.css";
import ItemSelector from "../itemSelector/ItemSelector";

export default function PageMenuTab(props) {
  //console.log("pageMenuTab props:", props);

  let backgroundColorOverview;
  props.subpage === "overview"
    ? (backgroundColorOverview = props.color)
    : (backgroundColorOverview = undefined);

  let backgroundColorStructure;
  props.subpage === "structure"
    ? (backgroundColorStructure = props.color)
    : (backgroundColorStructure = undefined);

  let backgroundColorSurface;

  props.subpage === "surface"
    ? (backgroundColorSurface = props.color)
    : (backgroundColorSurface = undefined);

  //console.log("PageMenuTab backgroundColor ->", backgroundColorOverview);
  return (
    <div className={styles.main}>
      <ItemSelector
        style={{ backgroundColor: backgroundColorOverview }}
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
        style={{ backgroundColor: backgroundColorStructure }}
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
        style={{ backgroundColor: backgroundColorSurface }}
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
