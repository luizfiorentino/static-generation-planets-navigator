import React from "react";
import styles from "./HamburgerIcon.module.css";
import HamburgerIcon from "../assets/icon-hamburger.svg";

export default function HamburgerIconTb(props) {
  console.log("props.", props);
  return (
    <img
      className={styles.main}
      src={HamburgerIcon.src}
      alt="a hamburger icon"
    />
  );
}
