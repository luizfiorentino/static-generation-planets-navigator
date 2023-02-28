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
import PlanetTab from "@/components/planetTab/PlanetTab";
import MobileMenu from "@/components/mobileMenu/MobileMenu";

export default function PlanetPage(props) {
  const [activeTab, setActiveTab] = useState("Overview");
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

  const menuItems = ["Overview", "Structure", "Surface"];
  //console.log("planetPage props::::", props);

  const pages = ["Overview", "Structure", "Surface"];

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
    //console.log("SET PAGE:::::", page);
    setActiveTab(page);
    return page;
  };
  //console.log("page::::::::", activeTab);

  if (displayMobileMenu === false) {
    return (
      <div className={styles.main}>
        <TopBar2
          pages={pages}
          displayMobileMenu={displayMobileMenu}
          setDisplayMobileMenu={setDisplayMobileMenu}
        />
        {/* <TopBar items={menuItems} planets={planets} variant="planet" />

      <MenuBar items={menuItems} variant="mobile" /> */}
        <div className={styles.menuTablet}>
          <MenuBar planets={props.planets} variant="tablet" />
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
  } else {
    return (
      <MobileMenu
        displayMobileMenu={displayMobileMenu}
        setDisplayMobileMenu={setDisplayMobileMenu}
        planets={planets}
      />
    );
  }
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
// combine getStaticProps of index and planetpage
// (in planetPage) -> you need to pass the planets
export async function getStaticProps(context) {
  const planetInfo = await getPlanetInfo(context.params.planet);
  const items = await getPlanetContent();
  const planets = items.map((item) => item.fields);

  //console.log("planetInfo", planetInfo);
  return {
    props: {
      planetInfo: planetInfo,
      planet: context.params.planet,
      planets: planets,
    },
  };
}

// export async function getStaticProps(context) {
//   const items = await getPlanetContent();
//   console.log("indexjs items", items);
//   //const planets = response.items;
//   // const info = planets.map;
//   // console.log("top index planets", planets);
//   const planets = items.map((item) => item.fields);

//   return {
//     props: {
//       planets: planets,
//     },
//   };
// }
