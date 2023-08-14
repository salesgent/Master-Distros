import styled from "styled-components";

export const FeaturesSection = styled.div`
  background: #F2F1F1};
  // display: grid;
  // place-items: center;
  min-height: 6.25rem;
  padding: 1em 0;
`;

export const FeaturesContainer = styled.div`
  // width: 100%;
  // display: flex;
  // flex-direction: ${(props) => (props.onListPage ? "column" : "row")};
  // align-items: ${(props) => (props.onListPage ? "flex-start" : "center")};
  // justify-content: center;
  // max-width: ${(props) => props.theme.maxWidth.home};
  // flex-wrap: wrap;
  max-width: 1400px;
  margin: auto;
`;

export const FeaturesBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.onListPage ? ".5em" : ".5em")};
  border-right: ${(props) => props.bordered && `1px solid ${props.theme.palette.colors.secondary}`};
  &:hover {
    transform: scale(1.1);
  }
  .imgBox {
    // width: 4rem;
    // height: 4rem;
    position: relative;
  }
  .col {
    color: #433f3f;
    margin-left: 0.6em;
    p {
      font-size: ${(props) => (props.onListPage ? "1.25rem" : "1.2rem")};
      font-weight: 800;
      margin-bottom: 0.1em;
      text-transform: uppercase;
    }
    span {
      font-size: ${(props) => (props.onListPage ? "0.875rem" : "0.9rem")};
      font-weight: 400;
    }
  }
  @media only screen and (max-width: 1200px) {
    border-right: ${(props) => props.bordered && props.sm && `none`};
  }
  @media only screen and (max-width: 600px) {
    border-right: ${(props) => props.bordered && `none`};
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin: 0.5em;
    .imgBox {
      margin-bottom: 0.6rem;
    }
    .col p {
      font-size: 1.3rem;
    }
    span {
      // display: none;
    }
  }
`;
