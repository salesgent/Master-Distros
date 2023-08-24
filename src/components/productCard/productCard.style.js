import styled from "styled-components";
import { motion } from "framer-motion";
import { Rating } from "@mui/material";
export const ProductCard = styled.div`
  width: 100%;
  max-width: 252px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  transition: all 0.6s;
  background-color: ${(props) => (props.isWhiteBg ? "white" : "transparent")};
  padding: ${(props) => (props.onListPage ? "0" : "0")};
  padding-bottom: 1em;
  color: black;
  cursor: pointer;
  &:hover {
    .quickView {
      opacity: 1;
    }

    .circle {
      background-color: ${(props) => props.theme.palette.bg.main};
      color: white;
    }
  }
`;
export const ImageBox = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  position: relative;
  max-width: 100%;
  min-height: 17.375rem;
  margin-bottom: 12px;
`;
export const OfferCircle = styled.div`
  width: 2.69rem;
  height: 2.69rem;
  border-radius: 50%;
  border: 1px solid;
  border-color: ${(props) => props.theme.palette.bg.main};
  color: ${(props) => props.theme.palette.bg.main};
  font-weight: 400;
  font-size: 0.81rem;
  display: grid;
  place-items: center;
  position: absolute;
  top: 1em;
  right: 1em;

  transition: 0.3s;

  z-index: 2;
`;
export const QuickView = styled.div`
  min-width: 15rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  place-items: center;
  background-color: #ebeaea8f;
  z-index: 1;
  min-width: 100%;
  min-height: 100%;
  position: absolute;

  transition: 0.5s;
  opacity: 0;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const QuickViewBtn = styled.div`
  place-items: center;
  font-size: 0.85rem;
  width: 8.6rem;
  height: 2.3rem;
  background-color: white;
  border-radius: 3px;
  text-transform: capitalize;
  color: #323232;
  border-radius: 2.375rem;
  z-index: 2;
  transition: 0.6s;
  display: grid;
  cursor: pointer;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 5px;
  &:hover {
    letter-spacing: 1px;
  }
`;
export const SelectOptionBtn = styled.div`
  place-items: center;
  font-size: 0.85rem;
  width: 8.6rem;
  height: 2.3rem;
  background-color: white;
  border-radius: 3px;
  text-transform: capitalize;
  color: #323232;
  border-radius: 2.375rem;
  z-index: 2;
  transition: 0.6s;
  display: grid;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    letter-spacing: 1px;
  }
`;
export const ProductContent = styled.div`
  height: 53%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1em;
  width: 100%;
  .title {
    font-size: 0.75rem;
    text-decoration: underline;
    color: ${(props) => props.theme.palette.bg.main};
    font-weight: 400;
    text-align: center;
    margin-top: 1em;
    text-transform: capitalize;
  }
`;

export const ProductName = styled.h4`
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  color: #181736;
  max-height: 4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const ProductPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1.4em 0;
  p {
    font-size: 31px;
    font-weight: 900;
    color: #181736;
    line-height: 34px;
  }
  span {
    font-size: 16px;
    font-weight: 400;
    color: #00000070;
    text-decoration: line-through;
    margin-right: 0.5em;
  }
`;
export const ProductRating = styled(Rating)`
  margin-bottom: 0.6em;
`;

export const ProductButton = styled(motion.button)`
  font-size: 18px;
  font-weight: 900;
  width: 100%;
  text-transform: capitalize;
  padding: 0 1.4em;
  height: 42px;
  background-color: #dda60a;
  border-radius: 1.56rem;
  border: none;
  cursor: pointer;
  color: white;
  opacity: ${(props) => props.disabled && ".6"};
  &:focus {
    border: none;
    outline: none;
  }
`;

/////quick view popup
export const ProductQuickView = styled.div`
  width: ${(props) => props.theme.maxWidth.productDetails};
  max-width: 95vw;
  padding: 1em;
  position: relative;
  .closeIcon {
    top: 1.06rem;
    right: 1rem;
    position: absolute;
    transition: all 0.6s;
    cursor: pointer;
    font-size: 1.5rem;
    &:hover {
      color: red;
    }
  }
  /* @media only screen and (max-width: 786px) {
    display: none;
  } */
`;
