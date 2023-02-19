import React from "react";
import styles from "./MenuBar.module.css";
import ItemSelector from "../itemSelector/ItemSelector";
import data from "../../pages/data.json";

export default function MenuBar(props) {
  return (
    <div className={styles.main}>
      {props?.items?.map((item) => (
        <ItemSelector key={item}>{item}</ItemSelector>
      ))}
    </div>
  );
}
