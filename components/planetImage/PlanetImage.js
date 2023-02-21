import React from "react";
import styles from "./PlanetImage.module.css";

export default function PlanetImage(props) {
  return (
    <div className={styles.main}>
      <img
        src={props.image}
        className={styles.inner}
        alt="the image of a planet"
      />
    </div>
  );
}
