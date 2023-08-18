import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { useSelector } from "react-redux";
// import { AiOutlineLock } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { TbLockOpen } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import { RiFileList3Line } from "react-icons/ri";
import Image from "next/image";
import { Divider, Box } from "@mui/material";
import AgeRestriction from "../popup/AgeRestriction";
import OfferPopup from "../popup/OfferPopup";
////
const Container = styled.div`
  background: #181736;
  color: #fff;
  height: 51px;
  display: flex;
  width: 100%;
  padding: 0 1em;
`;
const Header = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 105.624rem;
  color: ${(props) => props.theme.palette.colors.main};
  display: flex;
  margin: 0 auto;
  @media only screen and (min-width: 2200px) {
    max-width: 140.624rem;
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  color: #fff;
  min-width: max-content;
  font-size: 1rem;
  text-transform: uppercase;
  a {
    display: flex;
    font-size: 13px;
    font-weight: 900;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s;
    padding-right: 10px;
    &:hover {
      opacity: 0.8;
    }
  }
  p {
    font-size: 13px;
    font-weight: 400;
    text-transform:uppercase
    margin: 0 0.4em;
  }
  b {
    font-weight: 700;
    font-size: 1.125rem;
  }
  .icon {
    font-size: 1.1rem;
    cursor: pointer;
    margin-right:4px;
    transition: all 0.2s;
  }
`;
const headerData1 = [
  {
    icon: <TbLockOpen className="icon" />,
    link: "#",
    name: "Pact Act form",
  },
  {
    icon: <BsTelephone className="icon" />,
    link: "#",
    name: " +1 000-000-0000",
  },
  {
    icon: <RiFileList3Line className="icon" />,
    link: "#",
    name: "Recently Viewed",
  },
];
const headerData = [
  {
    icon: <TbLockOpen className="icon" />,
    link: "#",
    name: "Pact Act form",
  },
  {
    icon: <HiOutlineUsers className="icon" />,
    link: "/account/register",
    name: "Register",
  },
  {
    icon: <BsTelephone className="icon" />,
    link: "tel:+4044910786",
    name: " +1 404-491-0786",
  },
  {
    icon: <RiFileList3Line className="icon" />,
    link: "mailto:cs@masterdistros.com",
    name: "cs@masterdistros.com",
  },
];

const TopHeader = () => {
  const userDetails = useSelector((state) => state.auth.userDetails);
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [showAgeRes, setShowAgeRes] = React.useState(false);
  const [showOffer, setShowOffer] = React.useState(false);

  useEffect(() => {
    let body = document.getElementsByTagName("body")[0];
    if (showAgeRes) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    const DontShowPopups = sessionStorage.getItem("DontShowPopups");
    ////console.log(DontShowPopups);
    if (DontShowPopups) {
      setShowAgeRes(false);
    } else {
      setShowAgeRes(true);
    }
  }, [showAgeRes]);

  useEffect(() => {
    if (!showOffer) {
      setShowOffer(true);
    }
  }, []);

  return (
    <Container>
      {showAgeRes && <AgeRestriction show={showAgeRes} setShow={setShowAgeRes} />}
      {showOffer && userDetails && <OfferPopup show={showOffer} />}
      <Header>
        {/* <Row>
          <p>ALL GEEK BAR DISPOSABLES IN 0MG, 10MG AND 20MG NOW ONLY 8 FOR $19.99</p>{" "}
          <a style={{ marginLeft: 6 }}> CLICK HERE</a>
        </Row> */}
        <Row className="noBelowMd">
          <Box
            px={1}
            sx={{
              cursor: "pointer",
              "& .user-name": {
                fontSize: 12,
              },
            }}
          >
            <Row>
              {userDetails ? (
                <>
                  {headerData1.map((v) => (
                    <Link href={v.link} key={Math.random()}>
                      <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
                        {v.icon}
                        <p>{v.name}</p>
                        {/* <FaAngleDown className="icon" /> */}
                      </Box>
                    </Link>
                  ))}
                </>
              ) : (
                <>
                  {headerData.map((v) => (
                    <Link href={v.link} key={Math.random()}>
                      <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
                        {v.icon}
                        <p>{v.name}</p>
                        {/* <FaAngleDown className="icon" /> */}
                      </Box>
                    </Link>
                  ))}
                </>
              )}
            </Row>
          </Box>
        </Row>
        {/* {userDetails ? (
          <Row className="noAboveMd">
            <Icon bg="#000000">
              <Image
                src="/images/header/United-States-Flag.png"
                alt="login"
                width={9}
                height={9}
              />
            </Icon>
            <p style={{ textTransform: "uppercase" }}>
              Hi! {userDetails?.customerDto?.firstName}
            </p>
          </Row>
        ) : (
          <Link href="/account/login">
            <Row className="noAboveMd">
              <Icon bg="#000000">
                <Image
                  src="/images/header/login-icon.png"
                  alt="login"
                  width={9}
                  height={9}
                />
              </Icon>
              <p style={{ textTransform: "uppercase" }}>
                login&nbsp;/&nbsp;register
              </p>
            </Row>
          </Link>
        )} */}
      </Header>
    </Container>
  );
};

export default TopHeader;
