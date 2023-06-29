import React from "react";
import styles from "./ItemSelector.module.css";
import Link from "next/link";
import { League_Spartan } from "@next/font/google";

export const league_spartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
});

export default function ItemSelector(props) {
  const reference = props.link ? props.link : "/";
  let activeColor;

  return props.type === "subpageTB" || props.type === "planetLinks" ? (
    <Link
      {...props}
      style={{ borderColor: props.color }}
      href={
        props.children !== "structure" &&
        props.children !== "overview" &&
        props.children !== "surface"
          ? props.link
          : props.link
      }
      className={
        props.highlighted
          ? ` ${styles.mainActive} ${league_spartan.className}`
          : ` ${styles.main} ${league_spartan.className} `
      }
    >
      {props.children}
    </Link>
  ) : (
    <Link
      {...props}
      href={
        props.children !== "structure" &&
        props.children !== "overview" &&
        props.children !== "surface"
          ? props.link
          : props.link
      }
      className={
        !props.highlighted
          ? ` ${styles.menuTab} ${league_spartan.className}`
          : ` ${styles.menuTab} ${styles.menuTabActive} ${league_spartan.className}`
      }
    >
      {props.children}
    </Link>
  );
}
