import React from "react";
import PlanetPage from "@/components/planetPage/PlanetPage";
import getPlanetContent from "@/utils";
import { useState } from "react";
import Link from "next/link";

export default function Overview(props) {
  console.log("props:::", props);
  return <PlanetPage {...props} content={props.content} img={props.image} />;
}

export async function getPlanetInfo(planet) {
  const items = await getPlanetContent();
  return items.find((object) => object.fields.name === planet);
}

export async function getStaticPaths() {
  const items = await getPlanetContent();
  const planetNames = items.map((planet) => {
    return planet.fields.name;
  });

  return {
    paths: planetNames.map((planet) => {
      return { params: { planet: planet.toString() } };
    }),

    fallback: false,
  };
}

export async function getStaticProps(context) {
  const planetInfo = await getPlanetInfo(context.params.planet);
  const items = await getPlanetContent();
  const planets = items.map((item) => item.fields);

  return {
    props: {
      planetInfo: planetInfo,
      planet: context.params.planet,
      planets: planets,
      content: planetInfo.fields.description,
      image: planetInfo.fields.image.fields.file.url,
      subpage: "overview",
    },
  };
}

// import React from "react";
// import { useState } from "react";
// import styles from "./PlanetPage.module.css";
// import getPlanetContent from "@/utils";

// import MenuBar from "@/components/menuBar/MenuBar";
// import PlanetImage from "@/components/planetImage/PlanetImage";
// import TopBarBanner from "@/components/topBarBanner/TopBarBanner";
// import Description from "@/components/description/Description";
// import SourceLink from "@/components/sourceLink/SourceLink";
// import InfoTab from "@/components/infoTab/InfoTab";
// import PageMenuTab from "@/components/pageMenuTab/PageMenuTab";
// import TopBar from "@/components/topBar/TopBar";
// import MobileMenu from "@/components/mobileMenu/MobileMenu";

// export default function PlanetPage(props) {
//   const [activeTab, setActiveTab] = useState("Overview");
//   const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

//   const pages = ["Overview", "Structure", "Surface"];

//   const key = Object.keys(props.planetInfo.fields);
//   const rotation = key[3];
//   const revolution = key[4];
//   const radius = key[5];

//   const planets = [
//     "Mercury",
//     "Venus",
//     "Earth",
//     "Mars",
//     "Jupiter",
//     "Saturn",
//     "Uranus",
//     "Neptune",
//   ];

//   const setPage = (page) => {
//     setActiveTab(page);
//     return page;
//   };

//   if (displayMobileMenu === false) {
//     return (
//       <div className={styles.main}>
//         <TopBar
//           pages={pages}
//           displayMobileMenu={displayMobileMenu}
//           setDisplayMobileMenu={setDisplayMobileMenu}
//         />

//         <div className={styles.menuTablet}>
//           <MenuBar planets={props.planets} variant="tablet" />
//         </div>

//         <div className={styles.desktop}>
//           <div className={styles.planetImg}>
//             <PlanetImage
//               className={styles.imageInner}
//               image={props.planetInfo.fields.image.fields.file.url}
//             />
//           </div>
//           <div className={styles.bannerAndDescription}>
//             <div className={styles.tabletCenter}>
//               <div className={styles.middleSection}>
//                 <div className={styles.bannerAndContent}>
//                   <div className={styles.planetBanner}>
//                     <TopBarBanner className="planetBanner">
//                       {props.planetInfo.fields.name}
//                     </TopBarBanner>
//                   </div>
//                   <div className={styles.descriptionAndLink}>
//                     <div className={styles.description}>
//                       <Description text={props.planetInfo.fields.description} />
//                     </div>
//                     <div className={styles.link}>
//                       <SourceLink />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.pageTabs}>
//                 <PageMenuTab index={activeTab} setPage={setPage} />
//               </div>
//             </div>
//             <div className={styles.infoTabs}>
//               <InfoTab
//                 call={`${rotation} time`}
//                 value={props.planetInfo.fields.rotation}
//               />
//               <InfoTab
//                 call={`${revolution} time`}
//                 value={props.planetInfo.fields.revolution}
//               />
//               <InfoTab call={radius} value={props.planetInfo.fields.radius} />
//               <InfoTab
//                 call={"average temp."}
//                 value={props.planetInfo.fields.temperature}
//               />
//             </div>
//           </div>
//         </div>
//         <div className={styles.infoTabsDesktop}>
//           <InfoTab
//             call={`${rotation} time`}
//             value={props.planetInfo.fields.rotation}
//           />
//           <InfoTab
//             call={`${revolution} time`}
//             value={props.planetInfo.fields.revolution}
//           />
//           <InfoTab call={radius} value={props.planetInfo.fields.radius} />
//           <InfoTab
//             call={"average temp."}
//             value={props.planetInfo.fields.temperature}
//           />
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <MobileMenu
//         displayMobileMenu={displayMobileMenu}
//         setDisplayMobileMenu={setDisplayMobileMenu}
//         planets={planets}
//       />
//     );
//   }
// }

// export async function getPlanetInfo(planet) {
//   const items = await getPlanetContent();
//   return items.find((object) => object.fields.name === planet);
// }

// export async function getStaticPaths() {
//   const items = await getPlanetContent();
//   const planetNames = items.map((planet) => {
//     return planet.fields.name;
//   });

//   return {
//     paths: planetNames.map((planet) => {
//       return { params: { planet: planet.toString() } };
//     }),

//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const planetInfo = await getPlanetInfo(context.params.planet);
//   const items = await getPlanetContent();
//   const planets = items.map((item) => item.fields);

//   return {
//     props: {
//       planetInfo: planetInfo,
//       planet: context.params.planet,
//       planets: planets,
//     },
//   };
// }
