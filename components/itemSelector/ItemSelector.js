import React from "react";
import styles from "./ItemSelector.module.css";
import Link from "next/link";

export default function ItemSelector(props) {
  console.log("item selector props=", props.link, props.highlighted);

  const reference = props.link ? props.link : "/";

  return props.type ? (
    <Link
      href={
        props.children !== "structure" &&
        props.children !== "overview" &&
        props.children !== "surface"
          ? // ? `/planet/${props.children.toLowerCase()}`
            props.link
          : // : `${props.planet}/${props.children}`
            props.link
      }
      className={
        props.highlighted
          ? `${styles.mainActive} ${styles[props.variant]}`
          : `${styles.main} ${styles[props.variant]}`
      }
    >
      {props.children}
    </Link>
  ) : (
    <Link
      href={
        props.children !== "structure" &&
        props.children !== "overview" &&
        props.children !== "surface"
          ? `/`
          : reference
        // `planets/${props.children}`
      }
      className={
        props.highlighted
          ? `${styles.mainActive} ${styles[props.variant]}`
          : `${styles.main} ${styles[props.variant]}`
      }
    >
      {props.children}
    </Link>
  );
}
