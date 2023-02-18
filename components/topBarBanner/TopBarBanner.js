import styles from "./TopBarBanner.module.css";

import React from "react";

export default function TopBarBanner(props) {
  return <h2 className={styles.main}>{props.children}</h2>;
}
