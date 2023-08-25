import styled, { keyframes } from "styled-components";

const header = keyframes`
 0% {
    height: 0;
    opacity: 0;
  }
  50% {
    height: 60px;
    opacity: 0;
  }
  75% {
    height: 90px;
    opacity: 0.65;
  }
  95% {
    height: 112px;
    opacity: 0.95;
  }
  100% {
    heigh: 114px;
    opacity: 1;
  }
`;

export const HeaderSection = styled.div`
  width: 100%;
  padding: 0 1em;
  // display: flex;
  // place-items: center;
  // min-height: 6.25rem;
  top: 0;
  z-index: 15;
  animation-name: ${(props) => (props.scroll ? header : "")};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  box-shadow: 1px 1px 3px #d1d1d1;
  position: ${(props) => (props.scroll ? "fixed" : "static")};
  animation-fill-mode: forwards;
  background-color: #000000;
  background-image: url("/images/background.png");
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
  padding: 1em;
  @media only screen and (max-width: 1400px) {
    padding: 0 1em;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  /* max-width: 1690px; */
  max-width: 103.9rem;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  margin: auto;
  /* justify-content: space-between; */
  align-items: center;
  color: ${(props) => props.theme.palette.colors.secondary};
  @media only screen and (min-width: 2200px) {
    max-width: 140.624rem;
  }
  @media screen and (max-width: 768px) {
    .side-space {
      width: 0;
      display: none;
    }
  }
`;
export const LogoContainer = styled.div`
  width: 15rem;
  cursor: pointer;
  position: relative;
  // margin-right: auto;
  // margin-left: auto;
  @media screen and (max-width: 1400px) {
    margin: 0 auto;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-self: flex-end;
  text-align: center;
  height: 3.875rem;
  .divider {
    background-color: #f5f5f580;
    width: 1px;
    min-height: 100%;
    margin: 0 1em;
  }
  span {
    cursor: pointer;
  }
  .icon-btn {
    // height: 56px;
    // width: 56px;
    margin-left: 5px;
    color: #181736;
    svg {
      font-size: 2rem;
    }
  }
  .login-btn {
    // height: 56px;
    margin-left: 5px;
    color: #181736;
    min-width: auto;
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;
export const IconBoxes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: max-content;
  height: 3.56rem;
  border-radius: 0.81rem;
  transition: 0.4s;
  color: #fff;
  cursor: pointer;
  position: relative;
  &:hover {
    color: ${(props) => (props.bg ? "#fff" : "#fff")};
    opacity: ${(props) => (props.bg || props.noHover ? "1" : ".7")};
  }
  .icon {
    font-size: 1.3rem;
    color: #fff;
  }

  p {
    font-size: 1.19rem;
    margin-left: 0.3em;
  }
  .cart-icon {
    width: 26px;
    height: 31px;
    color: #fff;
    position: relative;
    margin-right: 8px;
  }
  @media only screen and (max-width: 768px) {
    .userName {
      display: none;
    }
  }
`;

export const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: ${(props) => (props.bg ? "46px" : "46px")};
  height: 46px;
  border-radius: 50%;
  transition: 0.4s;
  color: black;
  padding: 0.5em;
  margin: 0 0 0 1em;
  cursor: pointer;
  position: relative;
  background-color: #cb9b1d !important;
  &:hover {
    color: ${(props) => (props.bg ? "white" : "black")};
    opacity: ${(props) => (props.bg || props.noHover ? "1" : ".7")};
  }
  .icon {
    font-size: 1.3rem;
  }

  p {
    font-size: 1.19rem;
    margin-left: 0.3em;
    text-transform: ${(props) => (props.capitalize ? "capitalize" : "uppercase")};
  }
  .cart {
    p {
      font-size: 0.69rem;
    }
    b {
      font-size: 1.06rem;
      font-weight: 700;
    }
  }
  .cart-icon {
    width: 25px;
    height: 25px;
    position: relative;
  }
  /* &:hover {
    background-color: red;
    color: white;
  } */
`;

export const Icon = styled.div`
  width: 2.31rem;
  height: 2.31rem;
  font-size: 1.2rem;
  position: relative;
  display: grid;
  place-items: center;
  /* background-color: ${(props) => props.theme.palette.bg.main}; */
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
  @media only screen and (max-width: 768px) {
    /* background: transparent; */
    width: 2.1rem;
    height: 2.1rem;
  }
`;

export const HeaderNav = styled.div`
  display: grid;
  // place-items: center;
  height: 100%;
  max-width: 41rem;
  width: 100%;
  margin: auto;
`;

export const HeaderLink = styled.a`
  font-weight: 800;
  font-family: "Qanelas";
  color: ${(props) => props.theme.palette.colors.main};
  font-size: 1.1rem;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: max-content;
  .icon {
    margin-left: 0.5rem;
  }
  &:hover {
    opacity: 0.8;
  }
  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

export const SmIcons = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 3.5rem;
  color: black;
  width: 6.9rem;

  @media screen and (min-width: 1400px) {
    display: none;
  }
`;

export const CartDrawerStyled = styled.div`
  width: 600px;
  background-color: white;
`;
