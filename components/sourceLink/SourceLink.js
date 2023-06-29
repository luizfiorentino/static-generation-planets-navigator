import React from "react";
import styles from "./SourceLink.module.css";
import Icon from "../assets/icon-source.svg";

export default function SourceLink(props) {
  console.log("link?", props);
  return (
    <p className={styles.main}>
      Source :{" "}
      <span className={styles.link}>
        {" "}
        <span className={styles.wikiText}>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            Wikipedia
          </a>
        </span>
      </span>
      <img src={Icon.src} alt="a link icon" />
    </p>
  );
}
