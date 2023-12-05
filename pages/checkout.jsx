import { CheckoutPageComponent } from "@salesgenterp/ui-components";
import getConfig from "next/config";
import { useRouter } from "next/router";
import React from "react";
import "react-credit-cards/es/styles-compiled.css";
import { useDispatch, useSelector } from "react-redux";
import { LoginFunction } from "../src/AsyncFunctions/Auth";
import { setAlert } from "../src/AsyncFunctions/alert";
import { PostOrder } from "../src/AsyncFunctions/checkout";

const CheckoutPage = () => {
  const { publicRuntimeConfig } = getConfig();
  const { DOMAIN_BASE_URL } = publicRuntimeConfig;
  const dispatch = useDispatch();
  const router = useRouter();
  const cartData = useSelector((state) => state.cart.cartData);
  const tokens = useSelector((state) => state.auth.tokens);
  const discountCoupons = useSelector((state) => state.checkout?.discountCoupons);
  const userDetails = useSelector((state) => state.auth.userDetails);

  const handleLogin = async (data) => {
    await LoginFunction({
      username: data?.email,
      type: "customer",
      password: data?.password,
    })(dispatch);
  };

  const PlaceOrder = async (body) => {
    const data = await PostOrder(tokens?.token, body)(dispatch);
    if (data?.productOutOfStock) {
      setAlert("error", "There are few line items out of stock, please review them once.")(dispatch);
      router.push(`/cart`);
    }
    if (data?.orderDto?.id) router.push(`/thankyou/${data?.orderDto?.id}`);
  };

  let styles = {
    bg: "#181736",
    primaryColor: "#DDA60A",
    stepperIcon: { bg: "#DDA60A ", opened: "#F0F9F0" },
    h1Color: "#fff ",
    checkoutSummary: { bg: "#DDA60A" },
    input: { bg: "#E9E8F4", border: "#181736" },
    button: {
      bg: "#181736",
    },
  };
  return (
    <>
      <CheckoutPageComponent
        apiEndPoint={DOMAIN_BASE_URL}
        token={tokens?.token}
        authoriseDotNet={true}
        cartData={cartData}
        discountCoupons={discountCoupons}
        styles={styles}
        handleLogin={handleLogin}
        placeOrder={PlaceOrder}
        clickRedirect={(link) => router.push(`/${link}`)}
        showShippingPriceRangeLimit={false}
      />
    </>
  );
};

export default CheckoutPage;
