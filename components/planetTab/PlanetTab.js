import React from "react";
import styles from "./PlanetTab.module.css";
import Link from "next/link";
import ChevronIcon from "../assets/icon-chevron.svg";
import { League_Spartan } from "@next/font/google";

export const league_spartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
});

export default function PlanetTab(props) {
  const planetName = props.planet;

  return (
    <div className={styles.main}>
      <div className={styles.iconAndName}>
        <div className={`${styles[planetName]} ${styles.circle}`}></div>

        <Link
          key={props.planet}
          href={`/planets/${props.planet}`}
          onClick={() => props.setDisplayMobileMenu(!props.displayMobileMenu)}
        >
          <button className={`${styles.button} ${league_spartan.className}`}>
            {props.planet}
          </button>
        </Link>
      </div>

      <Link
        key={props.planet}
        href={`/planets/${props.planet}`}
        onClick={() => props.setDisplayMobileMenu(!props.displayMobileMenu)}
      >
        <img src={ChevronIcon.src} />
      </Link>
    </div>
  );
}
