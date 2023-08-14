import React from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../../../store/products";
import { BsChevronDown } from "react-icons/bs";
import { useRouter } from "next/router";
import { SelectBox } from "./FilterBar.style";
import { Box, Typography } from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

const sortData = [
  {
    value: "1",
    sort: "default",
    order: "ASC",
  },
  {
    value: "2",
    sort: "date",
    order: "ASC",
  },
  {
    value: "3",
    sort: "date",
    order: "DESC",
  },
  {
    value: "4",
    sort: "name",
    order: "ASC",
  },
  {
    value: "5",
    sort: "name",
    order: "DESC",
  },
  {
    value: "6",
    sort: "price",
    order: "ASC",
  },
  {
    value: "7",
    sort: "price",
    order: "DESC",
  },
];
const FilterBar = ({ setPageable, query, search, onDetails, page, total }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [state, setState] = React.useState("4");
  ////////filter products
  const filterProducts = (value) => {
    // setInitial(false);
    dispatch(setPage(0));
    setPageable(true);
    let url = search
      ? `/all/search/${query?.id}`
      : `/products/${query?.product}/${query?.id}`;

    if (value === "1") {
      return;
    } else if (value === "2") {
      router.push({
        pathname: url,
        query: { sort: "date", order: "ASC" },
      });
    } else if (value === "3") {
      router.push({
        pathname: url,
        query: { sort: "date", order: "DESC" },
      });
    } else if (value === "4") {
      router.push({
        pathname: url,
        query: { sort: "name", order: "ASC" },
      });
    } else if (value === "5") {
      router.push({
        pathname: url,
        query: { sort: "name", order: "DESC" },
      });
    } else if (value === "6") {
      router.push({
        pathname: url,
        query: { sort: "price", order: "ASC" },
      });
    } else if (value === "7") {
      router.push({
        pathname: url,
        query: { sort: "price", order: "DESC" },
      });
    }
  };
  React.useEffect(() => {
    const filtered = sortData.find(
      (v) => router?.query?.sort === v.sort && router?.query?.order === v.order
    );
    if (filtered) {
      setState(filtered.value);
    } else {
      setState("4");
    }
  }, [router.query]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: "13px",
        py: 2,
        borderBottom: "1px solid #E1E1E1",
      }}
    >
      <Typography
        variant="h6"
        x={{ fontSize: "13px", fontFamily: "Gothic A1" }}
      >
        Showing 1–{page * 12} of {total} item(S)
      </Typography>
      {!onDetails && (
        <SelectBox>
          <span>SORT BY :</span>
          <ExpandMoreRoundedIcon
            className="icon"
            onClick={(e) => e.preventDefault()}
          />
          <select
            onChange={(e) => {
              setState(e.target.value);
              filterProducts(e.target.value);
            }}
            value={state}
          >
            <option tabIndex={0} value={"2"}>
              Default
            </option>

            <option tabIndex={0} value={"3"}>
              Date(Oldest - Latest){" "}
            </option>
            <option tabIndex={0} value={"2"}>
              Date(Latest - Oldest){" "}
            </option>
            <option tabIndex={0} value={"4"}>
              Name(A - Z)
            </option>
            <option tabIndex={0} value={"5"}>
              Name(Z - A)
            </option>
            <option tabIndex={0} value={"6"}>
              price(low - high)
            </option>
            <option tabIndex={0} value={"7"}>
              price(high - low )
            </option>
          </select>
        </SelectBox>
      )}
    </Box>
  );
};

export default FilterBar;
