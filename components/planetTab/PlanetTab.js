import React from "react";
import styles from "./PlanetTab.module.css";
import Link from "next/link";
import ChevronIcon from "../assets/icon-chevron.svg";

export default function PlanetTab(props) {
  let color = () => {
    if (props.color === "#def4fc") {
      color = "mercury";
    } else if (props.color === "#f7cc7f") {
      color = "venus";
    } else if (props.color === "#545bfe") {
      color = "earth";
    } else if (props.color === "#ff6a45") {
      color = "mars";
    } else if (props.color === "#ecad7a") {
      color = "jupiter";
    } else if (props.color === "#fccb6b") {
      color = "saturn";
    } else if (props.color === "#65f0d5") {
      color = "uranus";
    } else if (props.color === "497efa") {
      color = "neptune";
    }
    return color;
  };
  color();
  console.log("color", typeof color);

  return (
    <div className={styles.main}>
      <div className={styles.iconAndName}>
        <div className={`${styles.circle} ${`${styles}.${color}`}`}></div>

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
