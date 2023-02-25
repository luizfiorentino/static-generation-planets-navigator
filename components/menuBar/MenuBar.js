import React from "react";
import styles from "./MenuBar.module.css";
import ItemSelector from "../itemSelector/ItemSelector";
import data from "../../pages/data.json";

export default function MenuBar({ variant = "main", ...items }) {
  console.log("variant: items:", items);
  return (
    <div
      {...items}
      className={variant === "main" ? styles.main : styles.mobile}
    >
      {variant === "mobile"
        ? items.items.map((item) => (
            <ItemSelector key={item} variant="pageMenu">
              {item}
            </ItemSelector>
          ))
        : undefined}
    </div>
  );
}
