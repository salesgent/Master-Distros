import styled from "styled-components";
import { Stack } from "@mui/material";

export const LeftNavContainer = styled.div`
  min-width: 377px;
  min-height: 61.8125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1em 1em;
  color: ${(props) => props.theme.palette.colors.secondary};
  /* margin-right: max(5%, 1em); */
`;

export const DropDownHeading = styled.div`
  width: 100%;
  display: flex;
  position:relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 25px;
  font-weight: 900;
  text-transform: uppercase;
  color:#181736;
  height: 67px;
  min-width: max-content;
  border-bottom:1px solid rgba(0, 0, 0, 0.5);
  ::before{
    content: "";
    height: 3px;
    width: 68px;
    background-color: #000000;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const DropContent = styled(Stack)`
  width: 100%;
  padding: 1.2em 1em 1.2em 0em;
  // background: #FBFBFB;
  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 15px;
    cursor: pointer;
  }
  .icon {
    color: orange;
    margin-right: 0.8em;
  }
  .small {
    font-size: 0.95rem;
  }
`;

export const DropRow = styled(Stack)`
  width: 100%;
  padding-bottom: 1em;
  cursor: pointer;

  input {
    width: 0.95rem;
    height: 0.95rem;
    margin-right: 1em;
    accent-color: #fbbe36;
    color: ${(props) => props.theme.palette.colors.main};
    border: 1px solid white !important;
    outline: none;
    cursor: pointer;
    &:hover,
    &:focus {
      color: white !important;
    }
  }
  h6 {
    font-size: 1.44rem;
    font-weight: 400;
    text-transform: uppercase;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.7rem;
    max-height: 1.8rem;
  }
`;

export const Hr = styled.hr`
  border: none;
  width: 100%;
  margin: 0.5em 0;
  background-color: black;
  height: 1px;
`;
