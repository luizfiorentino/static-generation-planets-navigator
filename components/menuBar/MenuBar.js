import React from "react";
import styles from "./MenuBar.module.css";
import ItemSelector from "../itemSelector/ItemSelector";
import { useState } from "react";

export default function MenuBar({ variant = "main", ...props }) {
  const [itemSelected, setItemSelected] = useState(0);

  const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];

  const setItem = (item) => {
    setItemSelected(item);
  };

  return (
    <div>
      <div
        {...props}
        className={variant === "main" ? styles.main : styles.mobile}
      >
        <div className={styles.mobileInner}>
          {variant === "mobile"
            ? props?.items?.map((item) => (
                <ItemSelector
                  key={item}
                  item={props.items.indexOf(item)}
                  variant="pageMenu"
                  setItem={setItem}
                  itemSelected={itemSelected}
                  type="subpageMB"
                >
                  {item}
                </ItemSelector>
              ))
            : undefined}
        </div>
        <div className={styles.planetMenu}>
          {props?.planets
            ? planets.map((planet) => (
                <ItemSelector key={planet}>{planet}</ItemSelector>
              ))
            : undefined}
        </div>
      </div>
      <div className={styles.mobileFooter}>
        <div
          className={
            itemSelected === 0
              ? styles.mobileBottomActive
              : styles.mobileBottomInactive
          }
        ></div>
        <div
          className={
            itemSelected === 1
              ? styles.mobileBottomActive
              : styles.mobileBottomInactive
          }
        ></div>
        <div
          className={
            itemSelected === 2
              ? styles.mobileBottomActive
              : styles.mobileBottomInactive
          }
        ></div>
      </div>
    </div>
  );
}
