import React from "react";
import PlanetPage from "@/components/planetPage/PlanetPage";
import getPlanetContent from "@/utils";

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

const subpages = ["structure", "surface"];

const staticPaths = subpages.map((subpage) => {
  const addPlanets = planets.map((planet) => {
    return {
      params: { planet: planet.toString(), subpage: subpage.toString() },
    };
  });
  return addPlanets;
});
//return staticPaths;

const mergedArrays = staticPaths[0].concat(staticPaths[1]);

export default function Subpage(props) {
  //console.log("Subpage props -> ", props);

  return (
    <PlanetPage
      {...props}
      content={props.content}
      img={props.image}
      subpage={props.subpage}
    />
  );
}

export async function getPlanetInfo(planet) {
  const items = await getPlanetContent();
  return items.find((object) => object.fields.name === planet);
}

export async function getStaticPaths() {
  //   const items = await getPlanetContent();
  //   const planetNames = items.map((planet) => {
  //     return planet.fields.name;
  //   });

  return {
    paths: mergedArrays.map((item) => {
      return item;
    }),
    fallback: false,
    // paths: planetNames.map((planet) => {
    //   return { params: { planet: planet.toString() } };
    // }),

    // fallback: false,
  };
}

export async function getStaticProps(context) {
  const planetInfo = await getPlanetInfo(context.params.planet);
  const items = await getPlanetContent();
  const planets = items.map((item) => item.fields);
  //console.log("subpage.js context", context);
  let text;
  if (context.params.subpage === "structure") {
    text = planetInfo.fields.internalStructure;
  } else {
    text = planetInfo.fields.surfaceGeology;
  }
  let image;
  if (context.params.subpage === "structure") {
    image = planetInfo.fields.internalImage.fields.file.url;
  } else {
    image = planetInfo.fields.surfaceImage.fields.file.url;
  }

  return {
    props: {
      planetInfo: planetInfo,
      planet: context.params.planet,
      planets: planets,
      content: text,
      image: image,
      subpage: context.params.subpage,
    },
  };
}
