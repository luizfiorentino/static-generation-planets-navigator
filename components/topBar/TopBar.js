import React from "react";
import TopBarBanner from "../topBarBanner/TopBarBanner";
import HamburgerIconTb from "../hamburgerIcon/HamburgerIcon";
import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.main}>
      <TopBarBanner>The Planets</TopBarBanner>
      <HamburgerIconTb />
    </div>
  );
}
