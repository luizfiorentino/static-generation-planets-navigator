import React from "react";
import styles from "./SourceLink.module.css";
import Icon from "../assets/icon-source.svg";
import { League_Spartan } from "@next/font/google";

export const league_spartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
});

export default function SourceLink(props) {
  return (
    <p className={`${styles.main} ${league_spartan.className}`}>
      Source :
      <span className={styles.link}>
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
