import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { CartDrawer } from "@salesgenterp/ui-components";
import { useRouter } from "next/router";
///
import {
  deleteProductFromCart,
  updateCartQuantity,
} from "../../AsyncFunctions/cart";
import { toggleOpenDrawer } from "../../store/cart";
import { setAlert } from "../../AsyncFunctions/alert";
const CartDrawerStyle = styled.div`
  width: 600px;
  background: #fff;
  .middleSection {
    justify-content: center;
    gap: 12px;
  }
  @media only screen and (max-width: 768px) {
    width: 90vw;
  }
`;

const CartDrawerStack = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const token = useSelector((state) => state.auth.tokens?.token);
  const cartData = useSelector((state) => state.cart.cartData);
  const loading = useSelector((state) => state.cart.isLoading);

  ///////update cart qt
  const updateCart = (type, item) => {
    const { quantity, availableQuantity, minQuantityToSale } = item;
    if (type === "increment") {
      if (quantity >= availableQuantity) {
        setAlert("warn", `only ${availableQuantity} is available`)(dispatch);
      } else {
        updateCartQuantity(
          [{ ...item, quantity: quantity + 1 }],
          token
        )(dispatch);
      }
    } else {
      if (quantity <= minQuantityToSale) {
        setAlert(
          "warn",
          `you need to buy atleast ${minQuantityToSale}`
        )(dispatch);
      } else {
        updateCartQuantity(
          [{ ...item, quantity: quantity - 1 }],
          token
        )(dispatch);
      }
    }
  };

  const handleRedirect = (link) => {
    router.push(`/${link}`);
    dispatch(toggleOpenDrawer(false));
  };
  return (
    <CartDrawerStyle>
      <CartDrawer
        cartData={cartData}
        color="#CB9B1D"
        loading={loading}
        maxWidth="600px"
        handleClose={() => dispatch(toggleOpenDrawer(false))}
        handleRemoveProduct={(product) => {
          deleteProductFromCart([product], token)(dispatch);
        }}
        handleIncrementDecrement={(type, product) => updateCart(type, product)}
        imgnotfoundUrl="/images/products/ABC-Logo.png"
        handleRedirect={(link) => handleRedirect(link)}
      />
    </CartDrawerStyle>
  );
};

export default CartDrawerStack;
