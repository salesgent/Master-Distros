import Link from "next/link";
import React, { useLayoutEffect, useRef, useState } from "react";
////////////////////////////////////////////////////////////////
import styled from "styled-components";
import styles from "./style.module.scss";
import { Grid } from "@mui/material";

const Overlay = styled.div``;

const NavBody = ({ data, id, setshow }) => {
  let list = data.subCategories;
  const [horMenu, setHorMenu] = useState(true);

  const menuBody = useRef(null);

  useLayoutEffect(() => {
    list?.forEach((sub) => {
      if (sub?.subCategories) {
        setHorMenu(true);
      } else {
        setHorMenu(false);
      }
    });
  }, []);

  if (horMenu) {
    return (
      // <Overlay
      //   className={styles.menuBody + " " + `class-overlay-${id}`}
      //   ref={menuBody}
      //   lengthSubCat={list.length}
      //   pId={`overlay-${id}`}
      //   id={`id-overlay-${id}`}
      // >
      <div className={styles.horzMenu}>
        <Grid container>
          {list?.map((cat, i) => {
            return (
              <Grid
                container
                item
                key={i}
                lg={list?.length > 6 ? 2 : true}
                md={list?.length > 4 ? 3 : true}
                sm={list?.length > 3 ? 4 : true}
              >
                <div key={i} className={styles.col}>
                  <Link
                    href={{
                      pathname: `/products/${cat.alias}/${cat.id}`,
                    }}
                  >
                    <a
                      className={styles.headerLink}
                      onClick={() => {
                        // dispatch(setActiveProductId(cat?.id));

                        setshow(-1);
                      }}
                    >
                      {cat.name}{" "}
                    </a>
                  </Link>
                  <div className={styles.subCat}>
                    {cat?.subCategories?.map((sub, i) => (
                      <Link
                        href={{
                          pathname: `/products/${sub.alias}/${sub.id}`,
                        }}
                        key={i}
                      >
                        <a
                          onClick={() => {
                            // dispatch(setActiveProductId(sub?.id));
                            setshow(-1);
                          }}
                        >
                          {sub.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
      // </Overlay>
    );
  } else {
    return (
      // <Overlay className={styles.menuBody}>
      <div className={styles.verticalMenu}>
        {list?.map((li, i) => (
          <Link
            href={{
              pathname: `/products/${li.alias}/${li.id}`,
            }}
            key={i}
          >
            <a
              onClick={() => {
                // dispatch(setActiveProductId(li?.id));
                setshow(-1);
              }}
            >
              {li.name}
            </a>
          </Link>
        ))}
      </div>
      // </Overlay>
    );
  }
};

export default NavBody;
