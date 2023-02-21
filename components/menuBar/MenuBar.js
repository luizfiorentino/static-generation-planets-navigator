import React from "react";
import styles from "./MenuBar.module.css";
import ItemSelector from "../itemSelector/ItemSelector";
import data from "../../pages/data.json";

export default function MenuBar({ variant = "main", ...props }) {
  console.log("variant:", variant);
  return (
    <div
      {...props}
      className={variant === "main" ? styles.main : styles.mobile}
    >
      {props?.items?.map((item) => (
        <ItemSelector key={item} variant="pageMenu">
          {item}
        </ItemSelector>
      ))}
    </div>
  );
}
