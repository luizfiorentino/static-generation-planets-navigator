import React from "react";
import styles from "./SourceLink.module.css";
import Icon from "../assets/icon-source.svg";

export default function SourceLink() {
  return (
    <p className={styles.main}>
      Source :{" "}
      <span className={styles.link}>
        {" "}
        <span className={styles.wikiText}>
          <a
            href="https://en.wikipedia.org/wiki/Solar_System"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia
          </a>
        </span>
      </span>
      <img src={Icon.src} alt="a link icon" />
    </p>
  );
}
{
  /* <p className={styles.main}>
    Source:{" "}
    <span className={styles.link}>
      {" "}
      <a href="https://en.wikipedia.org" target="_blank" rel="noopener noreferrer">
        <span className={styles.wikiText}>Wikipedia</span>
      </a>
    </span>
    <img src={Icon.src} alt="a link icon" />
  </p> */
}
