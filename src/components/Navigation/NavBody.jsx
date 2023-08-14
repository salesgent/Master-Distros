import React, { useState, useRef, useLayoutEffect } from "react";
import Link from "next/link";
////////////////////////////////////////////////////////////////
import styles from "./style.module.scss";
import styled from "styled-components";

const Overlay = styled.div``;

const NavBody = ({ data, id, setshow }) => {
  let list = data.subCategories;
  const [horMenu, setHorMenu] = useState(true);

  const menuBody = useRef(null);

  useLayoutEffect(() => {
    const filter = list?.find((v) => v?.subCategories.length > 0);
    // console.log(filter, "item");
    if (Boolean(filter)) {
      setHorMenu(true);
    } else {
      setHorMenu(false);
    }
  }, []);
  // console.log(list, "list");
  if (horMenu) {
    return (
      // <Overlay
      //   className={styles.menuBody + " " + `class-overlay-${id}`}
      //   ref={menuBody}
      //   lengthSubCat={list.length}
      //   pId={`overlay-${id}`}
      //   id={`id-overlay-${id}`}
      //   style={{ width: "100%" }}
      // >
      <div className={styles.horzMenu}>
        {list?.map((cat, i) => (
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
        ))}
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
