import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 100%;
  padding: 4rem;
  background-color: #e9e8f4;
  font-size: 16px;

  h6,
  h5,
  p,
  span,
  button,
  div {
    font-family: "karla-fonts";
  }
  div,
  button,
  span {
    font-size: 16px;
    font-family: "karla-fonts";
  }
  @media only screen and (max-width: 1620px) {
    padding: 3em 0.5em;
  }
  @media screen and (max-width: 840px) {
    div,
    button,
    span {
      font-size: 12px;
      font-family: "karla-fonts";
    }

    padding: 2rem 0.5rem;
  }
`;
