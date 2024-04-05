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
  const updateCart = (item) => {
    updateCartQuantity([{ ...item }], token)(dispatch);
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
        handleIncrementDecrement={(product) => updateCart(product)}
        imgnotfoundUrl="/images/products/logo.png"
        handleRedirect={(link) => handleRedirect(link)}
      />
    </CartDrawerStyle>
  );
};

export default CartDrawerStack;
