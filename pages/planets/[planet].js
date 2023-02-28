import React from "react";
//import data from "../data.json";
import { useState } from "react";

import styles from "./PlanetPage.module.css";
import MenuBar from "@/components/menuBar/MenuBar";
import PlanetImage from "@/components/planetImage/PlanetImage";

import TopBarBanner from "@/components/topBarBanner/TopBarBanner";
import Description from "@/components/description/Description";
import SourceLink from "@/components/sourceLink/SourceLink";
import InfoTab from "@/components/infoTab/InfoTab";
import PageMenuTab from "@/components/pageMenuTab/PageMenuTab";
import getPlanetContent from "@/utils";
import TopBar2 from "@/components/topBar2/TopBar2";

export default function PlanetPage(props) {
  const [activeTab, setActiveTab] = useState("Overview");

  const menuItems = ["Overview", "Structure", "Surface"];
  //console.log("planetPage props", props);

  const pages = ["Overview", "Structure", "Surface"];
  const dados = props.planetInfo.fields.revolution;
  console.log("revolution", dados);

  const key = Object.keys(props.planetInfo.fields);
  const rotation = key[3];
  const revolution = key[4];
  const radius = key[5];

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

  const setPage = (page) => {
    console.log("SET PAGE:::::", page);
    setActiveTab(page);
    return page;
  };
  console.log("page::::::::", activeTab);
  return (
    <div className={styles.main}>
      <TopBar2 pages={pages} />
      {/* <TopBar items={menuItems} planets={planets} variant="planet" />

      <MenuBar items={menuItems} variant="mobile" /> */}
      <div className={styles.menuTablet}>
        <MenuBar planets={planets} variant="tablet" />
      </div>

      <div className={styles.desktop}>
        <div className={styles.planetImg}>
          <PlanetImage
            className={styles.imageInner}
            image={props.planetInfo.fields.image.fields.file.url}
          />
        </div>{" "}
        <div className={styles.bannerAndDescription}>
          <div className={styles.tabletCenter}>
            <div className={styles.middleSection}>
              <div className={styles.bannerAndContent}>
                <div className={styles.planetBanner}>
                  <TopBarBanner className="planetBanner">
                    {props.planetInfo.fields.name}
                  </TopBarBanner>
                </div>
                <div className={styles.descriptionAndLink}>
                  <div className={styles.description}>
                    <Description text={props.planetInfo.fields.description} />
                  </div>
                  <div className={styles.link}>
                    <SourceLink />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.pageTabs}>
              <PageMenuTab index={activeTab} setPage={setPage} />
            </div>
          </div>
          <div className={styles.infoTabs}>
            <InfoTab
              call={`${rotation} time`}
              value={props.planetInfo.fields.rotation}
            />
            <InfoTab call={`${revolution} time`} />
            <InfoTab call={radius} value={props.planetInfo.fields.radius} />
            <InfoTab
              call={"average temp."}
              value={props.planetInfo.fields.temperature}
            />
          </div>
        </div>
      </div>
      <div className={styles.infoTabsDesktop}>
        <InfoTab
          call={`${rotation} time`}
          value={props.planetInfo.fields.rotation}
        />
        <InfoTab
          call={`${revolution} time`}
          value={props.planetInfo.fields.revolution}
        />
        <InfoTab call={radius} value={props.planetInfo.fields.radius} />
        <InfoTab
          call={"average temp."}
          value={props.planetInfo.fields.temperature}
        />
      </div>
    </div>
  );
}

export async function getPlanetInfo(planet) {
  const items = await getPlanetContent();
  return items.find((object) => object.fields.name === planet);

  //console.log("planet page getPlanetContent items", items);
}
export async function getStaticPaths() {
  const items = await getPlanetContent();
  const planetNames = items.map((planet) => {
    return planet.fields.name;
  });
  //console.log("getStaticPaths - planetNames:", planetNames);

  return {
    paths: planetNames.map((planet) => {
      return { params: { planet: planet.toString() } };
    }),

    fallback: false,
  };
}

export async function getStaticProps(context) {
  const planetInfo = await getPlanetInfo(context.params.planet);

  //console.log("planetInfo", planetInfo);
  return {
    props: {
      planetInfo: planetInfo,
      planet: context.params.planet,
    },
  };
}
