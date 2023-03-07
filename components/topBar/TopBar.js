import React from "react";
import styles from "./TopBar.module.css";
import TopBarBanner from "../topBarBanner/TopBarBanner";
import HamburgerIconTb from "../hamburgerIcon/HamburgerIcon";
import ItemSelector from "../itemSelector/ItemSelector";
import { useState } from "react";

export default function TopBar(props) {
  //const [itemSelected, setItemSelected] = useState(0);
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  //console.log("TopBar props.subpage-> ", props.subpage);

  // const pages = ["Overview", "Structure", "Surface"];
  const pages = ["overview", "structure", "surface"];

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

  return (
    <div className={styles.main}>
      <div className={styles.innerTop}>
        <TopBarBanner variant="primary">The Planets</TopBarBanner>
        <div className={styles.topIcon}>
          <div
            className={
              props.variant === "menu"
                ? styles.hamburgerIconMenu
                : styles.hamburgerIcon
            }
          >
            <HamburgerIconTb
              {...props}
              onClick={() => {
                props.setDisplayMobileMenu(!props.displayMobileMenu);
                setDisplayMobileMenu(!displayMobileMenu);
              }}
            />
          </div>
        </div>
      </div>
      <div
        className={
          props.variant !== "menu" ? styles.innerBottomPages : styles.hide
        }
      >
        {pages.map((page) => (
          <ItemSelector
            key={page}
            item={pages.indexOf(page)}
            variant="pageMenu"
            type="subpageTB"
            highlighted={props.subpage === page}
            link={
              pages.indexOf(page) === 0
                ? `/planets/${props.planet}`
                : `/planets/${props.planet}/${page}`
            }
          >
            {page}
          </ItemSelector>
        ))}
      </div>

      <div
        className={
          props.variant !== "menu" ? styles.desktopExternal : styles.hide
        }
      >
        <div className={styles.desktopMobileFooter}>
          {/* <div
            className={
              itemSelected === 0
                ? styles.mobileBottomActive
                : styles.mobileBottomInactive
            }
          ></div> */}
          {/* <div
            className={
              itemSelected === 1
                ? styles.mobileBottomActive
                : styles.mobileBottomInactive
            }
          ></div> */}
          {/* <div
            className={
              itemSelected === 2
                ? styles.mobileBottomActive
                : styles.mobileBottomInactive
            }
          ></div> */}
          {/* <div
            className={
              itemSelected === 3
                ? styles.mobileBottomActive
                : styles.mobileBottomInactive
            }
          ></div> */}
          {/* <div
            className={
              itemSelected === 4
                ? styles.mobileBottomActive
                : styles.mobileBottomInactive
            }
          ></div> */}
          {/* <div
            className={
              itemSelected === 5
                ? styles.mobileBottomActive
                : styles.mobileBottomInactive
            }
          ></div> */}
          {/* <div
            className={
              itemSelected === 6
                ? styles.mobileBottomActive
                : styles.mobileBottomInactive
            }
          ></div> */}
          {/* <div
            className={
              itemSelected === 7
                ? styles.mobileBottomActive
                : styles.mobileBottomInactive
            }
          ></div> */}
        </div>
        <div className={styles.desktop}>
          <div className={styles.innerBottomPlanets}>
            {planets.map((planet) => (
              <ItemSelector
                key={planet}
                item={planets.indexOf(planet)}
                variant="pageMenu"
                // setItem={setItem}
                // itemSelected={itemSelected}
                highlighted={props.planet === planet}
                type="planetLinks"
                link={`/planets/${planet}`}
              >
                {planet}
              </ItemSelector>
            ))}
          </div>
          {/* <div className={styles.pages}> */}
          {/* <div className={styles.mobileFooter}>
              <div
                className={
                  props.selectedTab === 0
                    ? styles.mobileBottomActive
                    : styles.mobileBottomInactive
                }
              ></div>
              <div
                className={
                  props.selectedTab === 1
                    ? styles.mobileBottomActive
                    : styles.mobileBottomInactive
                }
              ></div>
              <div
                className={
                  props.selectedTab === 2
                    ? styles.mobileBottomActive
                    : styles.mobileBottomInactive
                }
              ></div>
            </div> */}
          {/* </div> */}

          {/* <div className={styles.planets}>
            <div className={styles.mobileFooter}>
              <div
                className={
                  itemSelected === 0
                    ? styles.mobileBottomActive
                    : styles.mobileBottomInactive
                }
              ></div>
              <div
                className={
                  itemSelected === 1
                    ? styles.mobileBottomActive
                    : styles.mobileBottomInactive
                }
              ></div>
              <div
                className={
                  itemSelected === 2
                    ? styles.mobileBottomActive
                    : styles.mobileBottomInactive
                }
              ></div>
              <div
                className={
                  itemSelected === 3
                    ? styles.mobileBottomActive
                    : styles.mobileBottomInactive
                }
              ></div>
              <div
                className={
                  itemSelected === 4
                    ? styles.mobileBottomActive
                    : styles.mobileBottomInactive
                }
              ></div>
              <div
                className={
                  itemSelected === 5
                    ? styles.mobileBottomActive
                    : styles.mobileBottomInactive
                }
              ></div>
              <div
                className={
                  itemSelected === 6
                    ? styles.mobileBottomActive
                    : styles.mobileBottomInactive
                }
              ></div>
              <div
                className={
                  itemSelected === 7
                    ? styles.mobileBottomActive
                    : styles.mobileBottomInactive
                }
              ></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
