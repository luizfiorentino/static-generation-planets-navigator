import React from "react";
import data from "../data.json";

import TopBar from "@/components/topBar/TopBar";
import styles from "./PlanetPage.module.css";

export default function PlanetPage(props) {
  const planets = data.map((planet) => planet.name);
  return (
    <div className={styles.main}>
      <div className={styles.topBar}>
        <TopBar items={planets} />
      </div>
      <div>
        <h3>Content</h3>
      </div>
    </div>
  );
}

export function getPlanetInfo(planet) {
  return data.find((obj) => obj.name === planet);
}

export async function getStaticPaths() {
  const planets = data.map((planet) => {
    return planet.name;
  });
  //console.log("planets::", planets);

  return {
    paths: planets.map((planet) => {
      return { params: { planet: planet.toString() } };
    }),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const planetInfo = getPlanetInfo(context.params.planet);
  console.log("planetInfo::", planetInfo, "planet::", context.params.planet);

  return {
    props: {
      planetInfo: planetInfo,
      planet: context.params.planet,
    },
  };
}
