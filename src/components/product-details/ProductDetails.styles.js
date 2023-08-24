import styled from "styled-components";

export const ProductDetailsSection = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
  .red {
    color: red;
  }
`;
export const ProductDetailsContainer = styled.section`
  // width: 100%;
  // overflow: hidden;
  // max-width: 103.87rem;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-direction: column;
  // margin: 0 auto;
  // font-family: "jost-fonts";
`;

export const ProductView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding-top: 4rem;
  .red {
    color: red;
  }
  hr {
    border-top: 1px solid;
    width: 100%;
    margin-bottom: 2rem;
    max-width: 700px;
  }
  .outofstock {
    padding: 1em 0em;
    font-size: 2rem;
    color: #ff0000;
    text-transform: capitalize;
  }

  @media only screen and (max-width: 1168px) {
    flex-direction: column;
    padding-top: 2rem;
  }
`;
export const ProductImageContainer = styled.div`
  width: 35%;
  margin-top: 1em;
  margin-right: 3em;
  @media only screen and (max-width: 1168px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const ProductDetailsBox = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 65%;
  @media only screen and (max-width: 1168px) {
    width: 100%;
    min-width: 90%;
    padding: 0 5%;
  }
`;
export const ProductDetailedName = styled.h3`
  text-transform: capitalize;
  font-size: 2rem;
  font-weight: 700;
  color: #181736;
  word-break: break-word;
  margin: 0.4em 0;
  max-width: 100%;
  margin-bottom: 0.2em;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
export const ProductDetailsTitle = styled(Row)`
  font-size: 17px;
  font-weight: 400;
  letter-spacing: 2%;
  margin-bottom: 0.5em;
  margin-top: 0.8em;
  color: #4d4c4c;
  display: flex;
  p {
    margin-right: 5px;
  }
  .error-text {
    color: #181736;
  }
  .green-text {
    color: #76c043;
    font-weight: 500;
  }
`;

export const SkuTable = styled.div`
  font-size: 17px;
  margin: 0.8em 0;
  margin-top: 2em;

  b {
    font-weight: 600;
    margin-right: 0.5em;
    line-height: 2;
    text-transform: uppercase;
  }

  .blue {
    color: #2483ab;
    font-weight: 500;
  }
`;

export const PriceBox = styled(Row)`
  align-items: flex-end;
  margin: 1rem 0;
  span {
    font-size: 1.675rem;
    color: #ababab;
    text-decoration: line-through;
    font-weight: 500;
    margin-right: 0.6em;
  }
  h6 {
    font-size: 3.06rem;
    font-weight: 700;
    color: #df363e;
  }
`;

export const CategorySelector = styled(Row)`
  width: 100%;

  margin: 1rem 0;

  h4 {
    font-size: 24px;
    font-weight: 700;
    margin-right: 0.8rem;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    h4 {
      margin-bottom: 1rem;
    }
  }
`;

export const BtnsSection = styled(Row)`
  margin: 2rem 0;
  button {
    /* padding: 0.82em 3.48em; */
    width: 16.5rem;
    height: 4.5rem;
    font-size: 1.56rem;
    font-weight: 500;
    transition: 0.4s;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    border-radius: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: none;
    align-items: center;
    color: white;
    background-color: #dda60a;
    cursor: pointer;
    border: 1px solid white;
    &:hover {
      opacity: 0.8;
    }
    &:focus {
      outline: none;
    }
    /* .icon {
      margin-right: 0.5em;
    } */
  }
`;

export const TabsContainer = styled(Row)`
  width: 100%;
  margin: 4em;
  color: black;
  border-color: black;
  margin-bottom: 0rem;
  border-bottom: 1px solid #cbcbcb;
  .tab {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    width: 11.9rem;
    /* min-width: max-content; */
    text-transform: capitalize;
    padding: 0.8em 0;
    font-size: 1.437rem;
    /* transition: 0.4s; */
    margin-right: 0.6em;

    h6 {
      padding-left: 0;
      font-size: 23px;
      font-weight: 300;
      color: black;
      width: 100%;
      min-width: max-content;
      transition: 0.4s;
      &:hover {
        font-weight: 600;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    .tab h6 {
      font-size: 21px;
      font-weight: 500;
      text-align: center;
      margin: 0.5em 0;
      border: none !important;
    }
  }
`;

export const FullDescriptionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2em;
  font-size: 17px;
  margin-bottom: 4em;
  color: #8f8f8f;
`;

export const QuantityBox = styled(Row)`
  justify-content: space-between;
  margin: ${(props) => (!props.small ? "1em 0" : "auto")};
  max-width: 88px;
  border: 1px solid #000;
  border-radius: 6px;
  background: #f3f3f3;
  .circle {
    padding: 3px;
  }
  .input-qty {
    width: 34px;
    text-align: center;
    height: 28px;
    border-width: 0 1px 0 1px;
    &:focus {
      border-width: 0 1px 0 1px;
    }
  }
  &.no-variant {
    margin: 0;
  }
  span {
    width: ${(props) => (props.small ? "20px" : "30px")};
    height: ${(props) => (props.small ? "20px" : "30px")};
    border: 0px;
    display: grid;
    place-items: center;
    font-size: 14px;
    cursor: pointer;
    border-radius: ${(props) => (props.small ? ".2em" : ".5em")};
    margin: 0;
    padding: 0;
    transition: 0.4s;
    &:hover {
      color: black;
    }
  }
  #price {
    width: ${(props) => (props.small ? "34.5px" : "55px")};
    height: ${(props) => (props.small ? "34.5px" : "55px")};
    border: 0px;
    display: grid;
    place-items: center;
    font-size: 15px;
    font-weight: 500;
    margin: 0px;
    color: black;
    border-radius: ${(props) => (props.small ? ".65em" : ".85em")};
  }
`;
