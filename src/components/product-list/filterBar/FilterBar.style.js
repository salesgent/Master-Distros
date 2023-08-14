import styled from "styled-components";

export const FilterBarContainer = styled.div`
  width: 100%;
  font-size: 1.137rem;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
  /* text-transform: capitalize; */
  align-items: center;
  padding-right: 0;
  border-bottom: 1px solid #e1e1e1;
  .routeName {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 103.87rem;
    a {
      color: #323232;
    }

    p {
      font-size: 1.13rem;
      line-height: 1.6rem;
      max-height: 1.6rem;
      overflow: hidden;
      max-width: 35vw;
      text-overflow: ellipsis;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
      /* word-break: break-all; */
    }
  }
  @media only screen and (max-width: 640px) {
    padding: 0.5em 2em;
  }
`;
export const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #7e7979;
  span {
    font-weight: 600;
    color: #000;
  }
  position: relative;
  .icon {
    position: absolute;
    /* z-index: 2; */
    color: #000;
    right: 5px;
    top: 6px;
  }
  select {
    border: 1px solid #d4cdcd;
    min-height: 32px;
    width: 11.8rem;
    text-transform: capitalize;
    height: 2.5rem;
    border-radius: 0px;
    padding: 0.2em 0.6em;
    margin-left: 0.5em;
    font-size: 1rem;
    color: #7e7979;
    z-index: 1;
    background: transparent;
    &::-ms-expand {
      display: none;
    }
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: "";
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;
