import React, { useState } from "react";
import cx from "classnames";
import { useDispatch } from "react-redux";
import Router from "next/router";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import { Collapse } from "@mui/material";
////////////////////////////////////////////////////////////////
import Level1 from "./Level1";
import styles from "./mobile.module.scss";
import { ErrorMessage } from "../../../utilities/theme/components";
import { useDatafetcher } from "../../../utilities/hooks/useDatafetcher";
import { setOpenDrawer } from "../../../store/home";

const NavDrawer = ({ onListPage }) => {
  const { data: navData, error } = useDatafetcher("/menu?businessTypeId=1", {
    revalidateIfStale: false,
    revalidateOnFocus: false,
  });
  const dispatch = useDispatch();

  const [dropId, setDropId] = useState([-1]);

  const handleClick = (product) => {
    Router.push({
      pathname: `/products/${product.alias}/${product.id}`,
    });
    if (setOpenDrawer) dispatch(setOpenDrawer(false));
  };

  const OpenNav = (link) => {
    if (dropId.includes(link)) {
      let newList = dropId.filter((nav) => nav !== link);
      setDropId(newList);
    } else {
      setDropId([...dropId, link]);
    }
  };
  return (
    <>
      {error && <ErrorMessage>something went wrong</ErrorMessage>}
      {!onListPage && (
        <div className={styles.closeBar}>
          <p
            onClick={() => {
              dispatch(setOpenDrawer(false));
            }}
          >
            close <AiOutlineClose className={styles.icon} />
          </p>
        </div>
      )}
      {navData?.map((nav, i) => (
        <div key={i} style={{ borderBottom: " 1px dashed #CECECE" }}>
          <div
            className={cx(styles.mainLink, styles.navMenu)}
            key={i}
            onClick={() => {
              if (nav?.subCategories?.length > 0) {
                OpenNav(nav.id);
              } else {
                handleClick(nav);
              }
            }}
          >
            <p>
              {nav.name}
              {/* {onListPage && (
                <span>&nbsp;({nav?.subCategories?.length || 0})</span>
              )} */}
            </p>
            {nav?.subCategories?.length > 0 && (
              <>
                {dropId.includes(nav.id) ? (
                  <AiOutlineRight
                    className={styles.icondown}
                    style={{ transform: "rotate(-90deg)" }}
                  />
                ) : (
                  <AiOutlineRight className={styles.icondown} />
                )}
              </>
            )}
          </div>
          <Collapse in={dropId.includes(nav.id)}>
            <Level1
              data={nav.subCategories}
              h2={true}
              onListPage={onListPage}
            />
          </Collapse>
        </div>
      ))}
    </>
  );
};

export default NavDrawer;
