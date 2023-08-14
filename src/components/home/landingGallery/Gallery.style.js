import styled from "styled-components";

export const GalleryContainer = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth.home};
  display: flex;
  flex-direction: row;
  grid-gap: 12px;
  margin: 0 auto;
  padding: 0 1em;
  flex-wrap: wrap;
  margin-bottom: 2em;

  @media (max-width: 1285px) {
    margin-top: 1em;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 640px) {
    grid-gap: 0.6rem;
  }
  /* } */
`;

export const FirstItem = styled.div`
  display: grid;
  grid-area: item1;
  cursor: pointer;
  height: 25.5rem;
  overflow: hidden;
  width: 65%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #f3f3f3;
  color: #d32f2f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  position: relative;
  h6 {
    font-size: 3.187rem;
    font-weight: 700;
    text-align: center;
  }
  span {
    font-size: 1.375rem;
    font-weight: 500;
    text-align: center;
    margin: 1em 0;
  }
  button {
    width: 10.5rem;
    height: 2.6rem;
    font-size: 1.19rem;
    background: ${(props) => props.color || "#D32F2F"};
    color: ${(props) => props.theme.palette.colors.main};
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.3s;
    &:hover {
      letter-spacing: 1px;
      /* font-weight: 500; */
      opacity: 0.8;
    }
  }
  @media only screen and (max-width: 768px) {
    button {
      width: 13.5rem;
      height: 3.5rem;
      margin-top: 1em;
    }
    span {
      font-size: 2rem;
      margin: 0.4em 0;
    }
    width: 100%;
    height: auto;
  }
`;

export const Item = styled(FirstItem)`
  background-image: ${(props) => props.bg};
  background-color: #f3f3f3;
  width: 32%;
  position: relative;
  grid-area: ${(props) => props.gridArea};
  height: ${(props) => props.height || "19.13rem"};
  padding: 1em;

  color: ${(props) => props.theme.palette.colors.main};
  justify-content: flex-end;
  align-items: flex-start;
  p {
    font-size: 2.13rem;
    font-weight: 700;
  }
  button {
    margin-top: 1em;
  }
  @media only screen and (max-width: 768px) {
    /* display: ${(props) => (props.item4 ? "flex" : "none")}; */
    height: auto;
    /* aspect-ratio: ${(props) => (props.height ? "1.098" : "1.5")}; */
    padding-top: ${(props) => (props.height ? "40%" : "35%")};
    width: 49%;
    p {
      font-size: 2.9rem;
    }
  }
  @media only screen and (max-width: 374px) {
    width: 100%;
  }
`;
