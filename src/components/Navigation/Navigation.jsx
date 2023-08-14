import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

////////////////////////////////////////////////////////////////
import NavBody from "./NavBody";
import styles from "./style.module.scss";
import useWindowScroll from "../../utilities/hooks/useWindowScroll";
import { useDatafetcher } from "../../utilities/hooks/useDatafetcher";
import { ErrorMessage } from "../../utilities/theme/components";
import { Badge, Popper, Box } from "@mui/material";
import Link from "next/link";
import { toggleOpenDrawer } from "../../store/cart";
import { setAlert } from "../../AsyncFunctions/alert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const NavgationBar = () => {
  const userDetails = useSelector((state) => state.auth.userDetails);
  const [showNavData, setShowNavData] = useState(-1);
  const { scrollY } = useWindowScroll();
  const dispatch = useDispatch();
  const { data: navData, error } = useDatafetcher("/menu?businessTypeId=1", true);
  const localCart = useSelector((state) => state.cart.localCartData);
  const cartData = useSelector((state) => state.cart.cartData);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (prop) => (event) => {
    setShowNavData(prop);
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper " + Math.random() : undefined;
  return (
    <div className={scrollY > 250 ? styles.scrolledContainer : styles.container}>
      {error && <ErrorMessage>unable to fetch navigation data!</ErrorMessage>}
      <div className={styles.mainContainer}>
        {navData &&
          navData.map((nav, i) => (
            <div
              className={styles.navLink}
              key={i}
              onMouseEnter={handleClick(nav.id)}
              onMouseLeave={() => {
                setShowNavData(-1);
              }}
              id={`overlay-${nav.id}`}
              style={
                nav?.subCategories && nav.subCategories.length > 0 && nav.subCategories[0]?.subCategories?.length > 0
                  ? {}
                  : { position: "relative" }
              }
            >
              {nav?.subCategories && nav.subCategories.length < 1 ? (
                <Link
                  href={{
                    pathname: `/products/${nav.alias}/${nav.id}`,
                  }}
                >
                  <a className={styles.hover}>{nav.name?.toLocaleLowerCase()}</a>
                </Link>
              ) : (
                <Link
                  href={{
                    pathname: `/products/${nav.alias}/${nav.id}`,
                  }}
                >
                  {nav.name?.toLocaleLowerCase()}
                </Link>
              )}
              {nav?.subCategories && nav.subCategories.length > 0 && (
                <>
                  <BsChevronDown
                    style={
                      showNavData === nav.id
                        ? {
                            transition: ".5s",
                            marginLeft: ".4rem",
                            transform: "rotate(180deg)",
                          }
                        : {
                            transition: ".5s",
                            marginLeft: ".4rem",
                            transform: "rotate(0deg)",
                          }
                    }
                  />
                  <Popper
                    id={id}
                    open={anchorEl && showNavData === nav.id}
                    anchorEl={anchorEl}
                    placement="bottom"
                    popperOptions="bottom"
                    style={{ zIndex: 99999 }}
                  >
                    <Box
                      sx={{
                        // p: 1,
                        bgcolor: "background.paper",
                        overflow: "auto",
                      }}
                      className={styles.box}
                    >
                      {showNavData === nav.id && (
                        <NavBody data={nav} id={nav.id} length={navData.length} setshow={setShowNavData} />
                      )}
                    </Box>
                  </Popper>
                </>
              )}
            </div>
          ))}
        {scrollY > 250 && (
          <Badge
            badgeContent={userDetails ? cartData?.totalCartQuantity || 0 : localCart?.totalCartQuantity || 0}
            onClick={() => {
              if (userDetails) {
                dispatch(toggleOpenDrawer(true));
              } else {
                setAlert("warn", "login to view cart");
              }
            }}
            showZero={true}
            color="error"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <div style={{ cursor: "pointer" }}>
              <ShoppingCartIcon sx={{ fontSize: 32 }} />
            </div>
          </Badge>
        )}
      </div>
    </div>
  );
};

export default NavgationBar;
