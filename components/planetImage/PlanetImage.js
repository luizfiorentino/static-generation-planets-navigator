import React from "react";
import styles from "./PlanetImage.module.css";

export default function PlanetImage(props) {
  return (
    <img
      className={styles.main}
      src={props.image}
      alt="the image of a planet"
    />
  );
}
