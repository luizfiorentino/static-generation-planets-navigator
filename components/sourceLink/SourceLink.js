import React from "react";
import styles from "./SourceLink.module.css";
import Icon from "../assets/icon-source.svg";

export default function SourceLink() {
  return (
    <p className={styles.main}>
      Source : <span className={styles.link}>Wikipedia</span>
      <img src={Icon.src} alt="a link icon" />
    </p>
  );
}
