import React from "react";
import styles from "./PlanetsMenuBar.module.css";
import PlanetItem from "../planetItem/PlanetItem";
import data from "../../pages/data.json";

export default function PlanetsMenuBar() {
  const planets = data.map((planet) => planet.name);
  return (
    <div className={styles.main}>
      {planets.map((planet) => (
        <PlanetItem key={planet}>{planet}</PlanetItem>
      ))}
    </div>
  );
}
