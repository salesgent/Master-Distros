import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiFillCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { TableCell, TableRow } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
////////
import { QuantityBox } from "../ProductDetails.styles";
import { setAlert } from "../../../AsyncFunctions/alert";

const VariantsCardRow = ({
  item,
  productsList,
  setProductsList,
  reset,
  index,
}) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.auth.userDetails);
  useEffect(() => {
    let newList = productsList.filter(
      (variant) => variant.productId !== item.productId
    );
    if (quantity > 0) {
      newList.push({ ...item, quantity });
    }
    setProductsList(newList);
  }, [quantity]);

  useEffect(() => {
    setQuantity(0);
  }, [reset]);
  const handleIncremenDecrement = (type) => {
    const { availableQuantity } = item;
    if (!userDetails)
      return setAlert("warn", "login to add quantity")(dispatch);

    if (type === "increment") {
      if (quantity >= availableQuantity) {
        setAlert("warn", `only ${availableQuantity} is available`)(dispatch);
        setQuantity(parseInt(availableQuantity));
      } else {
        setQuantity(parseInt(quantity + 1));
      }
    } else {
      if (quantity > 0) {
        setQuantity(parseInt(quantity - 1));
      }
    }
  };
  return (
    <TableRow sx={index % 2 === 0 ? { background: "#F3F3F3" } : null}>
      <TableCell component="th" scope="row" align="left" sx={{ height: 46 }}>
        <p style={{ fontSize: "16px", paddingLeft: "6px", FontWeight: 600 }}>
          {item?.productVariantLabelValues?.FLAVORS ||
            item?.productVariantLabelValues?.COLORS ||
            item?.productVariantLabelValues?.SIZE ||
            "unknown"}
        </p>
        <p style={{ fontSize: "12px", paddingLeft: "6px" }}>UPC:{item?.sku}</p>
      </TableCell>
      <TableCell component="th" align="center">
        {item.availableQuantity > 0 || !userDetails ? (
          <QuantityBox small maxWidth="100px">
            <div className="circle">
              <span onClick={() => handleIncremenDecrement("decrement")}>
                <AiOutlineCaretDown style={{ fontSize: "inherit" }} />
              </span>
            </div>

            <input
              className="input-qty"
              type="number"
              value={quantity}
              onBlur={(e) => {
                if (!e.target.value) setQuantity(parseInt(0));
              }}
              onChange={(e) => {
                if (
                  e.target.value <= item?.availableQuantity &&
                  e.target.value >= 0
                )
                  setQuantity(parseInt(e.target.value));
              }}
            />
            <div className="circle">
              <span onClick={() => handleIncremenDecrement("increment")}>
                <AiFillCaretUp style={{ fontSize: "inherit" }} />
              </span>
            </div>
          </QuantityBox>
        ) : (
          <p className="red" style={{ fontSize: ".8rem" }}>
            out of stock
          </p>
        )}
      </TableCell>
      <TableCell component="th" align="center">
        {userDetails ? (
          <>
            <p style={{ fontSize: "12px", fontWeight: 700 }}>
              ${item.standardPrice.toFixed(2)}
            </p>
            {item.availableQuantity > 0 || !userDetails ? (
              <p style={{ fontSize: "12px" }}>
                In Stock:{item?.availableQuantity}
              </p>
            ) : (
              <p className="red" style={{ fontSize: "12px" }}>
                Out of Stock:{item?.availableQuantity}
              </p>
            )}
          </>
        ) : (
          <Link href="/account/login">Login</Link>
        )}
      </TableCell>
    </TableRow>
  );
};

export default VariantsCardRow;
