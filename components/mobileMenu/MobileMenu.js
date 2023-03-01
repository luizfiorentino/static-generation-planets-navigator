import React from "react";
import styles from "./MobileMenu.module.css";
import TopBar from "../topBar/TopBar";
import PlanetTab from "../planetTab/PlanetTab";

export default function MobileMenu(props) {
  const pages = ["Overview", "Structure", "Surface"];
  //console.log("Menu Mobile props->", props);

  return (
    <main className={styles.main}>
      <TopBar
        variant="menu"
        pages={pages}
        displayMobileMenu={props.displayMobileMenu}
        setDisplayMobileMenu={props.setDisplayMobileMenu}
      />

      <nav className={styles.menu}>
        {props.planets.map((planet) => (
          <PlanetTab
            key={planet}
            planet={planet}
            displayMobileMenu={props.displayMobileMenu}
            setDisplayMobileMenu={props.setDisplayMobileMenu}
          >
            {" "}
          </PlanetTab>
        ))}
      </nav>
    </main>
  );
}
