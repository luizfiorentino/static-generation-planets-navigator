import React from "react";
import styles from "./PlanetTab.module.css";
import Link from "next/link";
import ChevronIcon from "../assets/icon-chevron.svg";

export default function PlanetTab(props) {
  const planetName = props?.planet?.toLowerCase();
  //console.log("From planetTab props", props.planet);

  return (
    <div className={styles.main}>
      <div className={styles.iconAndName}>
        <div className={`${styles[planetName]} ${styles.circle}`}></div>

        <Link key={props.planet} href={`/planets/${props.planet}`}>
          <button className={styles.button}>{props.planet}</button>
        </Link>
      </div>

      <Link key={props.planet} href={`/planets/${props.planet}`}>
        <img src={ChevronIcon.src} />
      </Link>
    </div>
  );
}
