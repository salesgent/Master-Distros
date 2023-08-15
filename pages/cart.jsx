import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { CartPageComponent } from "@salesgenterp/ui-components";
import { useRouter } from "next/router";
import {
  deleteProductFromCart,
  updateCartQuantity,
} from "../src/AsyncFunctions/cart";
import { setAlert } from "../src/AsyncFunctions/alert";
// import dynamic from "next/dynamic";
///

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  background: #e9e8f4;
  padding: 6rem 0;
  display: grid;
  place-items: center;
  font-family: "karla-fonts";
  font-size: 16px;
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  div,
  button {
    font-family: "karla-fonts";
    /* font-size: 16px; */
  }
  h1,
  p {
    color: #fff;
  }
  .giBhRf.giBhRf {
    color: #fff;
  }
  @media screen and (max-width: 1400px) {
    padding: 2em 0;
  }
  @media screen and (max-width: 740px) {
    font-size: 12px;
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
  let styles = {
    imgSize: {
      width: "80px",
      height: "80px",
    },
    name: {
      lines: 3,
      size: "1em",
    },
    price: {
      size: "1.19em",
    },
    cartSummary: {
      bg: "#DDA60A",
      color: "#fff",
      hr: "#fff",
      input: {
        bg: "white",
        color: "grey",
      },
    },
    bg: "#181736",
    scroll: {
      bg: "#FAE8E5",
      color: "#ef9687",
    },
    borderLeft: "#DDA60A",
    headingColor: "#fff",
    Btn: {
      background: "#181736",
      color: "white",
    },
  };
  const handleRedirect = (link) => console.log(link);
  return (
    <Container>
      <CartPageComponent
        cartData={cartData}
        loading={loading}
        styles={styles}
        handleRemoveProduct={(product) => {
          let sure = confirm("Are you sure you want to delete this product");
          if (!sure) return;
          deleteProductFromCart([product], token)(dispatch);
        }}
        handleRemoveAll={(product) => {
          let sure = confirm("Are you sure you want to delete these products");
          if (!sure) return;
          deleteProductFromCart(product, token)(dispatch);
        }}
        retail={false}
        handleIncrementDecrement={(type, product) => updateCart(type, product)}
        imgnotfoundUrl="/images/products/logo.png"
        clickRedirect={(link) => router.push(link)}
      />
    </Container>
  );
};

export default CartDrawerStack;
