import React from "react";

export default function PlanetItem(props) {
  console.log("planetItem props", props.children);
  return <p>{props.children}</p>;
}
