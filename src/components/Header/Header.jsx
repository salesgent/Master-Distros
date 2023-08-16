import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import { FiMail } from "react-icons/fi";
import { Icon } from "./header.style";
////////////////////////////////////////////////////////////////////////////
import { IconBoxes } from "./header.style";
import {
  HeaderContainer,
  HeaderNav,
  HeaderSection,
  IconBox,
  LogoContainer,
  IconsContainer,
  SmIcons,
} from "./header.style";
import SearchHeader from "../Search/Search";
import useWindowScroll from "../../utilities/hooks/useWindowScroll";
import { Badge, Drawer, Stack, Typography, Divider, IconButton, Button } from "@mui/material";
import NavDrawer from "../Navigation/NavDrawer/NavDrawer";
import useWindowSize from "../../utilities/hooks/useWindowSize";
import styles from "../Navigation/NavDrawer/mobile.module.scss";
import { setOpenDrawer } from "../../store/home";
import { toggleOpenDrawer } from "../../store/cart";
import AccountDropDown from "./DropDown/AccountDropDown";

import { setAlert } from "../../AsyncFunctions/alert";

const data = [
  {
    name: "Elf Bar",
    link: "#",
  },
  {
    name: "Flum Pebble",
    link: "#",
  },
  {
    name: "Hyde Vape",
    link: "#",
  },
  {
    name: "Lost Mary 5000",
    link: "#",
  },
  {
    name: "Esco Bars",
    link: "#",
  },
];

const Header = () => {
  const { scrollY } = useWindowScroll();
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const [showDropDown, setShowDropDown] = useState(false);
  const localCart = useSelector((state) => state.cart.localCartData);
  const cartData = useSelector((state) => state.cart.cartData);
  const openDrawer = useSelector((state) => state.Home.openDrawer);
  const userDetails = useSelector((state) => state.auth.userDetails);

  return (
    <HeaderSection className="header">
      <HeaderContainer>
        <SmIcons>
          <FiMenu onClick={() => dispatch(setOpenDrawer(true))} />
          {/* ///////////mobile drawer//// */}
          {width < 1400 && (
            <Drawer className="header" open={openDrawer} onClose={() => dispatch(setOpenDrawer(false))}>
              <div className={styles.drawerContainer}>
                <NavDrawer />
              </div>
            </Drawer>
          )}
        </SmIcons>
        <HeaderNav className="noBelowLg">
          <SearchHeader />
          {/* <Stack
            direction="row"
            alignItems="center"
            spacing={3}
            sx={{
              mt: "-19px",
              ml: 2.5,
              a: {
                fontSize: "12px",
                color: "#787878",
              },
            }}
          >
            {data.map((v) => (
              <Link href="#" key={Math.random()}>
                {v.name}
              </Link>
            ))}
          </Stack> */}
        </HeaderNav>
        <LogoContainer>
          <Link href="/">
            <Image
              src="/images/header/logo-full.png"
              alt="logo"
              layout="responsive"
              width={280}
              height={74}
              objectFit="contain"
            />
          </Link>
        </LogoContainer>
        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          divider={<Divider orientation="vertical" flexItem />}
          mx={2}
          sx={{
            display: {
              md: "flex",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <Link href="#">
            <a>
              <Stack spacing={1} direction="row" alignItems="center">
                <Image src="/images/header/deliver.png" alt="login" width={51} height={33} />
                <Typography variant="body2" sx={{ fontSize: "11px", color: "#595959" }}>
                  FREE DELIVERY
                  <br /> FROM $ 1000
                </Typography>
              </Stack>
            </a>
          </Link>
          <Link href="#">
            <a>
              <Stack spacing={1} direction="row" alignItems="center">
                <Image src="/images/header/wallet.png" alt="login" width={37} height={38} />
                <Typography variant="body2" sx={{ fontSize: "11px", color: "#595959" }}>
                  MONEY BACK
                  <br />
                  GUARANTEE
                </Typography>
              </Stack>
            </a>
          </Link>
        </Stack>
        {/* <IconBox>
          <Badge
            showZero={true}
            color="error"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <div className="cart-icon">
              <Image
                src={"/images/header/cart.svg"}
                alt="cart"
                width={41}
                height={41}
                layout="fill"
              />
            </div>
          </Badge>
        </IconBox> */}
        <IconsContainer>
          {/* {userDetails ? (
            <IconBox
              capitalize
              className="noBelowLg"
              noHover
              onMouseEnter={() => setShowDropDown(true)}
              onMouseLeave={() => setShowDropDown(false)}
            >
              <Image
                src="/images/header/login-icon.png"
                alt="login"
                width={12}
                height={15}
              />

              <p>Hi {userDetails?.customerDto?.firstName}</p>

              
            </IconBox>
          ) : (
            <Link href="/account/login">
              <IconBox capitalize className="noBelowLg">
                <Image
                  src="/images/header/login-icon.png"
                  alt="login"
                  width={17}
                  height={17}
                />

                <p>login </p>
              </IconBox>
            </Link>
          )} */}
          {/*
          <IconBox className="noBelowLg">
            <BiHeart className="icon" />
            <Badge badgeContent={0} showZero color="error">
              <p>wishlist</p>
            </Badge>
          </IconBox> */}
          {userDetails ? (
            <IconBoxes
              capitalize
              noHover
              onMouseEnter={() => setShowDropDown(true)}
              onMouseLeave={() => setShowDropDown(false)}
            >
              <Button variant="text" className="login-btn">
                <AiOutlineUser />
                <p className="userName">Hi {userDetails?.customerDto?.firstName}</p>
              </Button>
              {showDropDown && <AccountDropDown />}
            </IconBoxes>
          ) : (
            <Link href="/account/login">
              <IconButton className="icon-btn">
                <AiOutlineUser />
              </IconButton>
            </Link>
          )}
          <IconBox
            bg="true"
            onClick={() => {
              if (userDetails) {
                dispatch(toggleOpenDrawer(true));
              } else {
                setAlert("warn", "login to view cart");
              }
            }}
          >
            <Badge
              badgeContent={userDetails ? cartData?.totalCartQuantity || 0 : localCart?.totalCartQuantity || 0}
              showZero={true}
              color="error"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <div className="cart-icon">
                <Image src={"/images/header/cart.svg"} alt="cart" width={41} height={41} layout="fill" />
              </div>
            </Badge>
            {/* <div className="cart">
              <p>cart</p>
              <b>$0.00</b>
            </div>
            <BsChevronDown className="icon" /> */}
          </IconBox>
          {/* <IconButton className="icon-btn" sx={{ display: { xs: "none", sm: "flex" } }}>
            <AiOutlineHeart />
          </IconButton>
          <IconButton className="icon-btn" sx={{ display: { xs: "none", sm: "flex" } }}>
            <FiMail />
          </IconButton> */}
        </IconsContainer>
        {/* {width < 1400 && ( */}
        {/* <SmIcons onClick={() => dispatch(toggleOpenDrawer(true))}>
          <Badge
            badgeContent={
              userDetails
                ? cartData?.totalCartQuantity || 0
                : localCart?.totalCartQuantity || 0
            }
            showZero={true}
            color="primary"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Image
              src="/images/navigation/cart.png"
              alt="cart"
              width={33}
              height={29}
            />
          </Badge>
        </SmIcons> */}
        {/* )} */}
      </HeaderContainer>
      {width < 1400 && <SearchHeader />}
    </HeaderSection>
  );
};

export default Header;
