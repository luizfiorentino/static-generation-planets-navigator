import React from "react";
import styles from "./InfoTab.module.css";
import { League_Spartan, Antonio } from "@next/font/google";

export const league_spartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
});

export const antonio = Antonio({
  subsets: ["latin"],
  display: "swap",
});

export default function InfoTab(props) {
  //console.log("infotab: props", props);
  return (
    <div className={styles.main}>
      <p className={`${styles.infoKey} ${league_spartan.className}`}>
        {props.call}
      </p>

      <h4 className={`${styles.infoValue} ${antonio.className}`}>
        {props.value}
      </h4>
    </div>
  );
}
