import styled from "styled-components";
import { Stack } from "@mui/material";
import { Swiper } from "swiper/react";
import { H1 } from "../../../utilities/theme/components";
export const ProductsContainer = styled(Stack)`
  width: 100%;
  padding-bottom: 5px;
  overflow: hidden;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  h6 {
    color: ${(props) => props.theme.palette.bg.main};
    text-transform: capitalize;
    font-size: 1.94rem;
    margin-right: 10%;
    margin-top: 2em;
    margin-bottom: 0.2em;
    font-weight: 500;
  }
  @media only screen and (max-width: 768px) {
    h6 {
      margin-top: 2em;
    }
  }
  &.bg-grey {
    background-image: url(/images/home/background/new-product-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 3rem;
  }
`;
export const ProductSwiperContainer = styled(Swiper)`
  width: 100%;
  display: flex;
  flex-direction: row;
  min-height: 30rem;
  align-items: center;
  img:{
    width:140px;
  }
  @media only screen and (max-width: 1498px) {
    min-width: 90%;
  }

  @media only screen and (max-width: 768px) {
    min-height: 20rem;
    max-width: 100vw;
    img:{
      width:140px;
    }
  }
`;
export const ProductSliderHeader = styled(H1)`
  min-width: 35rem;
  text-align: right;
  align-self: flex-start;
  width: max-content;
  max-width: 50vw;

  padding: 0.4em 1.5em;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  color: white;
  margin-bottom: 1.5em;

  padding-left: 1em;

  @media screen and (max-width: 746px) {
    padding: 0.4em 1em;
    min-width: 35rem;
    max-width: 90%;
    text-align: center;
    margin-bottom: 1em;
  }
  @media only screen and (min-width: 1990px) {
    padding-left: 6vw;
  }
`;
export const ProductsBrandImg = styled.img`
  object-fit: cover;
  margin: auto;
`;

export const NavButton = styled.div`
  display: grid;
  place-items: center;
  border-radius: 0.94rem;
  color: #494949;
  cursor: pointer;
  margin-right: ${(props) => (props.left ? "0" : "2em")};
  margin-left: ${(props) => (props.left ? "2em" : "0em")};
  margin-top: -2em;
  font-size: 2rem;
  &:hover {
    /* background: #e8e4e4; */
    color: black;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
  /* position: absolute; */
`;

export const ProductsHeaderBar = styled.div`
  width: 100%;
  min-height: 3.38rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2em;
  max-width: ${(props) => props.theme.maxWidth.productDetails};
  border-bottom: 1px solid #c2c2c2;
  h6 {
    font-size: 1.875rem;
    font-weight: 600;
    color: ${(props) => props.theme.palette.bg.main};
    text-transform: uppercase;
    margin-bottom: 0.6em;
  }
  span {
    height: 3px;
    width: 4.06rem;
    border-radius: 2px;
    background-color: ${(props) => props.theme.palette.bg.main};
  }
  @media only screen and (max-width: 1280px) {
    width: 95%;
  }
`;
