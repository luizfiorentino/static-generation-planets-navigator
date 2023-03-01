import styles from "./TopBarBanner.module.css";

import React from "react";

export default function TopBarBanner(props) {
  //console.log("variant plan::", props.className);
  return (
    <h2
      className={
        props.variant === "primary" ? styles.main : styles.planetBanner
      }
    >
      {props.children}
    </h2>
  );
}
