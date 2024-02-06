import { Drawer, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetails } from "../../AsyncFunctions/Auth";
import { fetchCartData } from "../../AsyncFunctions/cart";
import { toggleOpenDrawer } from "../../store/cart";
//////////
import useWindowSize from "../../utilities/hooks/useWindowSize";
import CartDrawerStack from "../cartDrawer/CartDrawer";
import Footer from "../footer/footer";
import { setToken } from "../../store/Auth";

const Header = dynamic(() => import("../Header/Header"), { ssr: false });
import Navigation from "../Navigation/Navigation";
import TopHeader from "../TopHeader/TopHeader";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const { query } = useRouter();
  const userDetails = useSelector((state) => state.auth.userDetails);
  const tokens = useSelector((state) => state.auth.tokens);
  const openDrawer = useSelector((state) => state.cart.openDrawer);

  useEffect(() => {
    if (query?.accessToken) {
      dispatch(
        setToken({
          token: query?.accessToken,
          retoken: "",
        })
      );
    }
  }, [query]);

  useEffect(() => {
    if (tokens?.token) {
      getUserDetails(tokens?.token)(dispatch);
    }
  }, [tokens]);

  useEffect(() => {
    if (userDetails) {
      fetchCartData(tokens?.token)(dispatch);
    }
  }, [userDetails]);

  return (
    <Stack sx={{ width: "100%", overflow: "hidden" }} flexDirection="column">
      <TopHeader />
      <Header />
      {width > 1400 && <Navigation />}
      <Drawer open={openDrawer} onClose={() => dispatch(toggleOpenDrawer(false))} anchor="right">
        <CartDrawerStack />
      </Drawer>
      {children}
      <Footer />
    </Stack>
  );
};

export default Layout;
