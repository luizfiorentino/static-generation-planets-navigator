import React from "react";
import styles from "./PlanetImage.module.css";

export default function PlanetImage(props) {
  //console.log("from PlanetImage", props);

  if (props.subpage === "overview" || props.subpage === "structure") {
    return (
      <div className={styles.main}>
        <img
          src={props.image}
          className={styles.inner}
          alt="the image of a planet"
        />
      </div>
    );
  } else {
    return (
      <div
        className={styles.surface}
        style={{ backgroundImage: `url(${props.bgImage})` }}
      >
        <img
          src={props.image}
          className={`${styles.innerSurface} ${styles.magnifyer}`}
          alt="the image of a planet"
        />
      </div>
    );
  }
}

// if(subpage === "overview"){
//   return <Image src={planet.img} />
// } else if(subpage === "surface"){
//   return <div classname={styles.positionRelatively}>
//     <Image src={planet.img} />
//     <Image classname={styles.positionAbsolute} src={planet.magnifyingglass} />
//   <div/>
// }
