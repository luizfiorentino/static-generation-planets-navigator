import React from "react";
import styles from "./HamburgerIcon.module.css";
import HamburgerIcon from "../assets/icon-hamburger.svg";
import Link from "next/link";

export default function HamburgerIconTb(props) {
  console.log("props.", props);
  return (
    // <Link href={"/"}>

    <img
      {...props}
      className={styles.main}
      src={HamburgerIcon.src}
      alt="a hamburger icon"
    />
    // </Link>
  );
}
