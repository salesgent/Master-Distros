import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Router from "next/router";
import { AiOutlineRight } from "react-icons/ai";
////////////////////////////////////////////////////////////////
import styles from "./mobile.module.scss";
import { setActiveProductId } from "../../../store/products";
import { setOpenDrawer } from "../../../store/home";
const Level1 = (props) => {
  const dispatch = useDispatch();
  const [dropId, setDropId] = useState([-1]);
  const { data, h2, onListPage } = props;
  const OpenNav = (link) => {
    if (dropId.includes(link)) {
      let newList = dropId.filter((nav) => nav !== link);
      setDropId(newList);
    } else {
      setDropId([...dropId, link]);
    }
  };

  const handleClick = (nav) => {
    // dispatch(setActiveProductId(parseInt(nav.id)));
    Router.push({
      pathname: `/products/${nav.alias}/${nav.id}`,
    });
    dispatch(setOpenDrawer(false));
  };
  return (
    <div className={styles.levelContainer}>
      {data?.map((nav, i) => (
        <div key={i}>
          <div
            className={styles.secLink}
            key={i}
            tabIndex={0}
            onClick={() => {
              if (nav?.subCategories?.length > 0) {
                OpenNav(nav.id);
              } else {
                handleClick(nav);
              }
            }}
            style={h2 ? { fontWeight: "bold" } : { fontWeight: "normal" }}
          >
            <p className="small" style={{fontSize:'17px'}}>
              {nav.name}
              {onListPage && (
                <span>&nbsp;({nav?.subCategories?.length || 0})</span>
              )}
            </p>
            {nav?.subCategories?.length > 0 && !onListPage && (
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
          {dropId.includes(nav.id) && (
            <Level1 data={nav.subCategories} setOpenDrawer={setOpenDrawer} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Level1;
