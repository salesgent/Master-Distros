import styled from "styled-components";
import { motion } from "framer-motion";
export const ProductsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  overflow: hidden;
  scroll-behavior: smooth;
`;
export const ProductsHeader = styled.div`
  width: 100%;
  background: ${(props) => props.theme.palette.bg.secondary};
  display: grid;
  place-items: center;
  height: 119px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: black !important;
  }
  @media only screen and (max-width: 640px) {
    height: 80px;
    h2,
    h3 {
      font-size: 32px;
    }
  }
`;

////////routebar
export const NavHeader = styled.div`
  padding: 0.6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.88rem;
  min-height: 12rem;
  // background: url("/images/home/banner/banner-3.png");
  background: ${(props) => props.theme.palette.bg.main}20;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  max-width: 100vw;
  text-overflow: ellipsis;
  h4 {
    font-size: 1.6rem;
    color: #181736;
    font-weight: 700;
    word-break: break-word;
    text-align: center;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
`;
export const ProductButton = styled(motion.button)`
  font-size: 1.2rem;
  font-weight: 900;
  text-transform: capitalize;
  padding: 1rem 0.8rem;
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

export const ProductsContainer = styled.div`
  width: 100%;
  max-width: 103.87rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  margin-top: 1.6em;
  @media screen and (max-width: 1410px) {
    padding: 0 1em;
  }
`;
export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1.4rem;
  padding: ${(props) => props.padding || "2rem 0"};
  grid-row-gap: 22px;
  margin-bottom: 4em;
  @media only screen and (max-width: 1445px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 580px) {
    grid-template-columns: 1fr 1fr;
    padding-top: 0rem;
    /* width: 100vw; */
    margin-top: 1em;
    grid-gap: 1rem;
  }
`;

export const ProductsNotFound = styled.div`
  /* width: 90%; */
  height: 5rem;
  width: 50vw;
  max-width: 950px;
  display: grid;
  place-items: center;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  font-size: 36px;
  margin: 2rem 0;
  margin-bottom: 25vh;
  background: #ef7922;
  background: #ffc403;
  background: ${(props) => props.theme.palette.bg.secondary};
  color: ${(props) => props.theme.palette.colors.main};
  @media only screen and (max-width: 1280px) {
    width: 90vw;
    font-size: 1.5rem;
  }
`;

////category bar

export const CategoryBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1em 2em;
  background: #dda60a;
  height: 5rem;
  p {
    color: ${(props) => props.theme.palette.colors.main};
    margin-left: 0.5em;
    font-size: 1.9rem;
    letter-spacing: 0.01em;
    font-weight: 500;
    text-transform: uppercase;
  }
`;
