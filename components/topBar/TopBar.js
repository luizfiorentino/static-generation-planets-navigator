import React from "react";
import TopBarBanner from "../topBarBanner/TopBarBanner";
import HamburgerIconTb from "../hamburgerIcon/HamburgerIcon";
import styles from "./TopBar.module.css";
import MenuBar from "../menuBar/MenuBar";

export default function TopBar(props) {
  return (
    <div className={`${styles.main} ${styles[props.variant]}`}>
      <div className={styles.banner}>
        <TopBarBanner className="primary">The Planets</TopBarBanner>
      </div>
      <div className={styles.hamburgerIcon}>
        <HamburgerIconTb />
      </div>
      <div className={styles.planetsMenu}>
        <MenuBar items={props.items} />
      </div>
    </div>
  );
}
