import React from "react";
import PlanetPage from "@/components/planetPage/PlanetPage";
import getPlanetContent from "@/utils";

export default function Overview(props) {
  //console.log("props:::", props);
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
