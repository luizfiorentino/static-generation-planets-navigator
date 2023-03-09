import React from "react";
import styles from "./ItemSelector.module.css";
import Link from "next/link";

export default function ItemSelector(props) {
  //console.log("item selector props=", props);
  console.log("item Selector props.color->", props.color);

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
          ? // ? `/planet/${props.children.toLowerCase()}`
            props.link
          : // : `${props.planet}/${props.children}`
            props.link
      }
      className={
        props.highlighted ? ` ${styles.mainActive} }` : ` ${styles.main} }`
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
        // `planets/${props.children}`
      }
      // className={
      //   props.highlighted
      //     ? ` ${props.className} ${styles.mainActive} ${styles[props.variant]}`
      //     : `${props.className} ${styles.main} ${styles[props.variant]}`
      // }
      className={
        !props.highlighted
          ? ` ${styles.menuTab} }`
          : ` ${styles.menuTab} ${styles.menuTabActive} }`
      }
    >
      {props.children}
    </Link>
  );
}
