import React from "react";
import styles from "./PlanetPage.module.css";
import { useState } from "react";
import Head from "next/head";

import PlanetImage from "@/components/planetImage/PlanetImage";
import TopBarBanner from "@/components/topBarBanner/TopBarBanner";
import Description from "@/components/description/Description";
import SourceLink from "@/components/sourceLink/SourceLink";
import InfoTab from "@/components/infoTab/InfoTab";
import PageMenuTab from "@/components/pageMenuTab/PageMenuTab";
import TopBar from "@/components/topBar/TopBar";
import MobileMenu from "@/components/mobileMenu/MobileMenu";

export default function PlanetPage(props) {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

  const imgCard = props.img.replace("//", "");
  //console.log("props.image::: edited", props.img);
  //const planet = props.planet;
  //console.log("PlanetPage planet:", planet);
  //const pages = ["overview", "structure", "surface"];
  //console.log("PlanetPAge props.planet ->", props.planetInfo.fields.color);

  const key = Object.keys(props.planetInfo.fields);
  const rotation = key[3];
  const revolution = key[4];
  const radius = key[5];

  // using this variable to display the planets in the right order on MobileMenu
  const planets = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
  ];

  if (displayMobileMenu === false) {
    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <Head>
            <title>{`${props.planet} - ${props.subpage}`}</title>
            <meta
              property="og:title"
              content={`Planet Explorer: ${props.planet} - ${props.subpage}`}
            />{" "}
            <meta property="og:type" content="image&infos" />
            <meta
              property="og:image:type"
              content={`https:${props.img}/svg+xml`}
            />
            <meta
              property="og:site_name"
              content="https://planet-explorer.vercel.app"
            />
            <meta property="og:description" content={props.content} />
          </Head>
          <TopBar
            //pages={pages}
            displayMobileMenu={displayMobileMenu}
            setDisplayMobileMenu={setDisplayMobileMenu}
            planet={props.planet}
            subpage={props.subpage}
            color={props.planetInfo.fields.color}
          />

          <div className={styles.menuTablet}></div>

          <div className={styles.desktop}>
            <div className={styles.planetImg}>
              <PlanetImage
                className={styles.imageInner}
                image={props.img}
                bgImage={props.bgImage}
                subpage={props.subpage}
              />
            </div>
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
                        {/* <Description text={props.planetInfo.fields.description} /> */}
                        <Description text={props.content} />
                      </div>
                      <div className={styles.link}>
                        <SourceLink />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.pageTabs}>
                  <PageMenuTab
                    subpage={props.subpage}
                    // type="tabletDesktopMenu"
                    planet={props.planet}
                    color={props.planetInfo.fields.color}
                  />
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
