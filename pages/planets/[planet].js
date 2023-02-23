import React from "react";
//import data from "../data.json";

import TopBar from "@/components/topBar/TopBar";
import styles from "./PlanetPage.module.css";
import MenuBar from "@/components/menuBar/MenuBar";
import PlanetImage from "@/components/planetImage/PlanetImage";
import PlanetMercury from "../../components/assets/planet-mercury.svg";
import TopBarBanner from "@/components/topBarBanner/TopBarBanner";
import Description from "@/components/description/Description";
import SourceLink from "@/components/sourceLink/SourceLink";
import InfoTab from "@/components/infoTab/InfoTab";
import PageMenuTab from "@/components/pageMenuTab/PageMenuTab";
import getPlanetContent from "@/utils";

const content = async () => {
  await getPlanetContent().then((data) => data);
  return data;
};

//const planets = data.map((planet) => planet);
// console.log("top index.js plnets", planets);
// console.log("planetPage planets", planets);

// const planetNames = data.map((planet) => planet.name);
// console.log("pla page plnames", planetNames);

export function getPlanetInfo(planet) {
  return data.find((obj) => obj.name === planet);
}

export default function PlanetPage(props) {
  //const planets = data.map((planet) => planet.name);
  const menuItems = ["Overview", "Structure", "Surface"];
  console.log("top pln page props", props);
  // console.log("data::", data);
  // console.log("planet page: props", planets);
  // const planet = props.planet;
  // const text = props.planetInfo.overview.content;
  // const planetInfo = [
  //   { call: "Rotation Time", value: props.planetInfo.rotation },
  //   { call: "Revolution time", value: props.planetInfo.revolution },
  //   { call: "Radius", value: props.planetInfo.radius },
  //   { call: "Average Temp.", value: props.planetInfo.temperature },
  // ];

  // console.log("infoo", planetInfo);
  // console.log("planetPage, props::", props, "text", text);
  return (
    <div className={styles.main}>
      <TopBar items={"planets"} variant="planet" />
      <MenuBar items={menuItems} variant="mobile" />
      <img src={props.planetInfo.images}
      <div className={styles.desktop}>
        {/* <div className={styles.planetImg}> */}
        <PlanetImage image={PlanetMercury.src} />
        {/* </div>{" "} */}
        {/* <div className={styles.bannerAndDescription}> */}
        {/* <div className={styles.middleSection}> */}
        <div className={styles.bannerAndContent}>
          {/* <div className={styles.planetBanner}> */}
          <TopBarBanner className="planetBanner">{}</TopBarBanner>
          {/* </div> */}
          {/* <div className={styles.descriptionAndLink}> */}
          {/* <div className={styles.description}> */}
          <Description text={"text"} />
          {/* </div> */}
          <div className={styles.link}>
            <SourceLink />
          </div>
          {/* </div> */}
        </div>
        {/* </div> */}
        <div className={styles.pageTabs}>
          <PageMenuTab />
        </div>
        {/* </div> */}
      </div>
      <div className={styles.infoTabs}>
        {/* {planetInfo.map((planet) => (
          <InfoTab key={planet.call} call={planet.call} value={planet.value} />
        ))} */}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  // const planets = data.map((planet) => planet.name);

  // planets.map((planet) => {
  //   return planet.name;
  // });
  // console.log("planets::", planets);
  const planetNames = data.map((planet) => planet.name);

  return {
    paths: planetNames.map((planet) => {
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

// PlanetPage.getInitialProps = async () => {
//   const planets = await getPlanetContent();

//   return { planets };
// };
