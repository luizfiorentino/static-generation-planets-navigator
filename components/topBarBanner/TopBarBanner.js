import styles from "./TopBarBanner.module.css";
import { Antonio } from "@next/font/google";

export const antonio = Antonio({
  subsets: ["latin"],
  display: "swap",
});

import React from "react";

export default function TopBarBanner(props) {
  return (
    <h2
      className={
        props.variant === "primary"
          ? `${styles.main} ${antonio.className}`
          : `${styles.planetBanner} ${antonio.className}`
      }
    >
      {props.children}
    </h2>
  );
}
