import styles from "./TopBarBanner.module.css";

import React from "react";

export default function TopBarBanner(props) {
  console.log("variant plan::", props.className);
  return (
    <h2
      className={
        props.variant === "primary" ? styles.main : styles.planetBanner
      }
    >
      {props.children}
    </h2>
  );
}

// export default function MenuBar({ variant = "main", ...props }) {
//   console.log("variant:", variant);
//   return (
//     <div
//       {...props}
//       className={variant === "main" ? styles.main : styles.mobile}
//     >
//       {props?.items?.map((item) => (
//         <ItemSelector key={item}>{item}</ItemSelector>
//       ))}
//     </div>
//   );
