import React from "react";
import styles from "./ItemSelector.module.css";
import Link from "next/link";

export default function ItemSelector(props) {
  //console.log("item selector props=", props);

  return (
    <Link
      href={
        props.children !== "Structure" &&
        props.children !== "Overview" &&
        props.children !== "Surface"
          ? props.children.toLowerCase()
          : "#"
      }
      className={
        props.item !== props.itemSelected
          ? `${styles.main} ${styles[props.variant]}`
          : `${styles.mainActive} ${styles[props.variant]}`
      }
      onClick={() => props.setItem(props.item)}
    >
      {props.children}
    </Link>
  );
}
