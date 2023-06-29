import React from "react";
import styles from "./TopBar.module.css";
import TopBarBanner from "../topBarBanner/TopBarBanner";
import HamburgerIconTb from "../hamburgerIcon/HamburgerIcon";
import ItemSelector from "../itemSelector/ItemSelector";
import { useState } from "react";
import { League_Spartan, Antonio } from "@next/font/google";

export const league_spartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
});

export const antonio = Antonio({
  subsets: ["latin"],
  display: "swap",
});

export default function TopBar(props) {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

  const pages = ["overview", "structure", "surface"];

  const planets = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
  ];

  return (
    <div className={styles.main}>
      <div className={styles.innerTop}>
        <TopBarBanner variant="primary">The Planets</TopBarBanner>
        <div className={styles.topIcon}>
          <div
            className={
              props.variant === "menu"
                ? styles.hamburgerIconMenu
                : styles.hamburgerIcon
            }
          >
            <HamburgerIconTb
              {...props}
              onClick={() => {
                props.setDisplayMobileMenu(!props.displayMobileMenu);
                setDisplayMobileMenu(!displayMobileMenu);
              }}
            />
          </div>
        </div>
      </div>
      <div
        className={
          props.variant !== "menu" ? styles.innerBottomPages : styles.hide
        }
      >
        {pages.map((page) => (
          <ItemSelector
            key={page}
            planet={props.planet}
            subpage={props.subpage}
            color={props.color}
            item={pages.indexOf(page)}
            variant="pageMenu"
            type="subpageTB"
            highlighted={props.subpage === page}
            link={
              pages.indexOf(page) === 0
                ? `/planets/${props.planet}`
                : `/planets/${props.planet}/${page}`
            }
          >
            {page}
          </ItemSelector>
        ))}
      </div>

      <div
        className={
          props.variant !== "menu" ? styles.desktopExternal : styles.hide
        }
      >
        <div className={styles.desktopMobileFooter}></div>
        <div className={styles.desktop}>
          <div className={styles.innerBottomPlanets}>
            {planets.map((planet) => (
              <ItemSelector
                key={planet}
                item={planets.indexOf(planet)}
                color={props.color}
                variant="pageMenu"
                highlighted={props.planet === planet}
                type="planetLinks"
                link={`/planets/${planet}`}
              >
                {planet}
              </ItemSelector>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
