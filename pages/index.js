import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import data from "./data.json";
import Link from "next/link";
import TopBar from "@/components/topBar/TopBar";
import PlanetTab from "@/components/planetTab/PlanetTab";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  //console.log("data::", data);
  // const planets = data.map((planet, key={}) => planet.name);
  console.log("index.js - props:", props);

  const objects = data.map((planet) => {
    return { name: planet.name, color: planet.color };
  });
  console.log("const obj::", objects);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <TopBar />

        <nav className={styles.menu}>
          {objects.map((planet) => (
            <PlanetTab key={planet.name} planet={planet.name}>
              {" "}
            </PlanetTab>
          ))}
        </nav>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const planets = data.map((planet) => planet.name + planet.color);
  return {
    props: {
      planets: planets,
    },
  };
}
