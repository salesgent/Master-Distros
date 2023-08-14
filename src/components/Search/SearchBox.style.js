import styled from "styled-components";
export const SearchContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  position: relative;
  height: 100%;
  @media screen and (max-width: 1400px) {
    margin: 0.5rem 0;
  }
`;
export const SearchBox = styled.div`
  min-width: 99%;
  max-width: 100.5%;
  height: 42px;
  border-radius: 13px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1em;
  background: white;
  font-size: 1.31rem;
  padding-right: 0;
  background-color: #f3efef;
  input {
    color: #8f8f8f;
    width: 92%;
    height: 100%;
    outline: none;
    font-weight: 400;
    border: none;
    justify-self: flex-start;
    background: transparent;
    font-size: 1.31rem;

    &::placeholder {
      font-size: 12px;
      opacity: 1;
      color: #8f8f8f !important;
      font-weight: 300;
    }
  }
  .icon {
    font-size: 1.4rem;
    color: #8f8f8f;
    min-width: 54px;
    height: 100%;
    display: grid;
    place-items: center;
  }
`;
