import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

//////
import { BodyText } from "../../utilities/theme/components";

export const FooterSection = styled.section`
  width: 100%;
  display: flex;
  display: grid;
  place-items: center;
  overflow: hidden;
  padding: 0 1em;
  // background: #2e2929;
  background-color: #000000;
  background-image: url("/images/background.png");
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
`;

export const FooterContainer = styled.div`
  width: 100%;
  /* max-width: 1454px; */
  max-width: 103.87rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  @media screen and (max-width: 768px) {
    max-width: 100vw;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-left: auto;
  padding: 4em 0em;
  /* padding-bottom: 4em; */
`;
export const FooterLinksBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h6 {
    text-transform: capitalize;
    font-size: 1.6rem;
    font-weight: 700;
    font-family: "Gothic A1";
    // border-bottom: 3px solid;
    // border-color: ${(props) => props.theme.palette.bg.main};
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 0.6em;
    padding-bottom: 0.6em;
    padding-right: 1.5em;
    /* min-width: 100%; */
    position: relative;
    &::after {
      content: "";
      height: 3px;
      width: 7rem;
      background-color: #dda60a;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  @media screen and (max-width: 768px) {
    h6 {
      font-size: 2rem;
    }
    margin-bottom: 2rem;
    width: 95%;
  }
`;
export const FooterCol = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-transform: capitalize;
  min-width: max-content;
  padding: 0 2em 0 0;
  b {
    font-weight: 700;
  }
  @media screen and (max-width: 746px) {
    justify-content: space-between;
  }
  &.second {
    margin-left: 66px;
  }
`;
export const FooterLinksCol = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 100%;
`;

export const FooterText = styled(BodyText)`
  font-weight: 300 !important;
  font-family: "Gothic A1";
  margin: ${(props) => props.margin};
  font-size: 16px;
`;

const LinkText = styled(FooterText)`
  text-transform: capitalize;
  cursor: pointer;
  transition: 0.5s;
  font-weight: 400;
  font-family: "Gothic A1";
  margin: 0.3em 0;
  &:hover {
    color: #dda60a;
  }
  @media screen and (max-width: 768px) {
    margin: 0.3rem 0;
  }
`;

export const FooterLink = ({ children, url, fontWeight }, ...rest) => {
  if (url) {
    return (
      <Link href={url} target="_blank">
        <LinkText {...rest} fontWeight={fontWeight}>
          {children}
        </LinkText>
      </Link>
    );
  } else {
    return (
      <LinkText {...rest} target="_blank" fontWeight={fontWeight}>
        {children}
      </LinkText>
    );
  }
};

export const IconsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1.2rem;
  color: white;
  font-size: 2.2rem;
  max-width: 200px;
  .icon {
    cursor: pointer;
    transition: all 0.4s;
    &:hover {
      transform: scale(1.3);
    }
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 21px 1em 43px 1em;
  border-top: 1px solid #cacaca;
  @media screen and (max-width: 746px) {
    flex-direction: column;
    p {
      margin-top: 1em;
    }
  }
`;
