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

// const response = await getPlanetContent();
// return response.find((object) => object.fields.name === planet);

// export async function getPlanetInfo(planet) {
//   const items = await getPlanetContent();
//   return items.find((obj) => obj.name === planet);
// }

export default function PlanetPage(props) {
  const menuItems = ["Overview", "Structure", "Surface"];
  console.log("planetPage props", props);

  return (
    // <p>test</p>

    <div className={styles.main}>
      {" "}
      <TopBar items={"planets"} variant="planet" />
      <MenuBar items={menuItems} variant="mobile" />
      {/* <h1>{props.planetInfo.name}</h1> */}
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
//consider export function (no async)
export async function getPlanetInfo(planet) {
  const items = await getPlanetContent();
  return items.find((object) => object.fields.name === planet);

  console.log("planet page getPlanetContent items", items);
}
export async function getStaticPaths() {
  const items = await getPlanetContent();
  const planetNames = items.map((planet) => {
    return planet.fields.name;
  });
  console.log("getStaticPaths - planetNames:", planetNames);

  return {
    paths: planetNames.map((planet) => {
      return { params: { planet: planet.toString() } };
    }),

    fallback: false,
  };
}
// export async function getStaticPaths() {
//   const planets = data.map((planet) => {
//     return planet.name;
//   });
//   //console.log("planets::", planets);
//   return {
//     paths: planets.map((planet) => {
//       return { params: { planet: planet.toString() } };
//     }),
//     fallback: false,
//   };
// }

export async function getStaticProps(context) {
  const planetInfo = await getPlanetInfo(context.params.planet);
  // const planetInfo = getPlanetInfo(context.params.planet);
  //console.log("planetInfo::", planetInfo, "planet::", context.params.planet);
  console.log("planetInfo", planetInfo);
  return {
    props: {
      planetInfo: planetInfo,
      planet: context.params.planet,
    },
  };
}

// export async function getPlanetInfo(planet) {
//   const items = await getPlanetContent();
//   return items.find((obj) => obj.name === planet);
// }

// PlanetPage.getInitialProps = async () => {
//   const planets = await getPlanetContent();

//   return { planets };
// };
