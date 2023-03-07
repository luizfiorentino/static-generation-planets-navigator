import React from "react";
import styles from "./ItemSelector.module.css";
import Link from "next/link";

export default function ItemSelector(props) {
  //console.log("item selector props=", props);

  const reference = props.link ? props.link : "/";

  return props.type ? (
    <Link
      {...props}
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
          ? `${props.className} ${styles.mainActive} ${styles[props.variant]}`
          : `${props.className} ${styles.main} ${styles[props.variant]}`
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
          ? `/`
          : reference
        // `planets/${props.children}`
      }
      className={
        props.highlighted
          ? ` ${props.className} ${styles.mainActive} ${styles[props.variant]}`
          : `${props.className} ${styles.main} ${styles[props.variant]}`
      }
    >
      {props.children}
    </Link>
  );
}
