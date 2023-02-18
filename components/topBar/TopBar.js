import React from "react";
import TopBarBanner from "../topBarBanner/TopBarBanner";
import HamburgerIconTb from "../hamburgerIcon/HamburgerIcon";
import styles from "./TopBar.module.css";
import PlanetsMenuBar from "../planetsMenuBar/PlanetsMenuBar";

export default function TopBar() {
  return (
    <div className={styles.main}>
      <div className={styles.banner}>
        <TopBarBanner>The Planets</TopBarBanner>
      </div>

      <div className={styles.hamburgerIcon}>
        <HamburgerIconTb />
      </div>
      <div className={styles.planetsMenu}>
        <PlanetsMenuBar />
      </div>
    </div>
  );
}
