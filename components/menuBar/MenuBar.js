import React from "react";
import styles from "./MenuBar.module.css";
import ItemSelector from "../itemSelector/ItemSelector";
import data from "../../pages/data.json";
import { useState } from "react";

export default function MenuBar({ variant = "main", ...items }) {
  const [itemSelected, setItemSelected] = useState(0);

  const setItem = (item) => {
    console.log("item selected->", itemSelected);

    console.log("setItem", setItem);
    setItemSelected(item);
    console.log("item:::", item);
  };

  console.log("variant: items:", items);
  return (
    <div
      {...items}
      className={variant === "main" ? styles.main : styles.mobile}
    >
      {variant === "mobile"
        ? items.items.map((item) => (
            <ItemSelector
              key={item}
              item={items.items.indexOf(item)}
              variant="pageMenu"
              setItem={setItem}
              itemSelected={itemSelected}
            >
              {item}
            </ItemSelector>
          ))
        : undefined}
    </div>
  );
}
