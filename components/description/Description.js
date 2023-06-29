import React from "react";
import styles from "./Description.module.css";
import { League_Spartan } from "@next/font/google";

// const inter = Lobster({ subsets: ["latin"] });
export const league_spartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
});

export default function Description(props) {
  return (
    <p className={`${styles.main} ${league_spartan.className}`}>{props.text}</p>
  );
}
