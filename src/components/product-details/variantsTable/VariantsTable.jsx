import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import styled from "styled-components";
import React from "react";
import VariantsCardRow from "./VariatnRow";

const variantsContainer = styled.div`
  width: 100%;
  max-height: 456px;
  overflow: auto;
  color: black;
  margin: 1em 0;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(178, 169, 169, 1);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }

  h6 {
    font-size: 1.15rem;
    font-weight: 700;
    text-transform: capitalize;
  }
  p {
    font-size: 0.94rem;
    font-weight: 400;
  }
  .red {
    color: red;
    text-transform: capitalize;
  }
`;
const TableBox = styled(Table)`
  width: 100%;
  min-width: 640px;
  @media only screen and (max-width: 695px) {
    min-width: 95%;
  }
  .MuiTableCell-root {
    border-bottom: 0px;
    padding: 6px;
  }
`;
const VariantsTable = ({
  content,
  productsList,
  setProductsList,
  reset,
  headers,
}) => {
  return (
    <TableContainer component={variantsContainer} sx={{ maxHeight: 255 }}>
      <TableBox aria-label="a dense table" stickyHeader>
        <TableHead>
          <TableRow
            sx={{
              "& .MuiTableCell-root": {
                height: 46,
              },
            }}
          >
            {headers.map((name, i) => (
              <TableCell key={i}>
                <h6>{name?.toLowerCase()}</h6>
              </TableCell>
            ))}
            <TableCell align="center">
              <h6>Qty </h6>
            </TableCell>
            <TableCell align="center">
              <h6>Price</h6>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {content.map((item, i) => (
            <VariantsCardRow
              reset={reset}
              productsList={productsList}
              item={item}
              key={i}
              index={i}
              setProductsList={setProductsList}
            />
          ))}
        </TableBody>
      </TableBox>
    </TableContainer>
  );
};

export default VariantsTable;
