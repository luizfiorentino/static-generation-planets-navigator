import React from "react";
import styles from "./PlanetTab.module.css";
import Link from "next/link";
import ChevronIcon from "../assets/icon-chevron.svg";

export default function PlanetTab(props) {
  const planetName = props.planet;
  //console.log("From planetTab props", props);

  return (
    <div className={styles.main}>
      <div className={styles.iconAndName}>
        <div className={`${styles[planetName]} ${styles.circle}`}></div>

        <Link
          key={props.planet}
          href={`/planets/${props.planet}`}
          onClick={() => props.setDisplayMobileMenu(!props.displayMobileMenu)}
        >
          <button className={styles.button}>{props.planet}</button>
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
