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


const Header = dynamic(() => import("../Header/Header"), { ssr: false });
import Navigation from "../Navigation/Navigation";
import TopHeader from "../TopHeader/TopHeader";

const Layout = ({ children }) => {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.auth.userDetails);
  const tokens = useSelector((state) => state.auth.tokens);
  const openDrawer = useSelector((state) => state.cart.openDrawer);

  useEffect(() => {
    if (tokens?.token && !userDetails) {
      getUserDetails(tokens?.token)(dispatch);
    }
    if (userDetails) {
      fetchCartData(tokens?.token)(dispatch);
    }
  }, [tokens, userDetails]);

  return (
    <Stack sx={{ width: "100%", overflow: "hidden" }} flexDirection="column">
      <TopHeader />
      <Header />
      {width > 1400 && <Navigation />}
      <Drawer
        open={openDrawer}
        onClose={() => dispatch(toggleOpenDrawer(false))}
        anchor="right"
      >
        <CartDrawerStack />
      </Drawer>
      {children}

      <Footer />
    </Stack>
  );
};

export default Layout;
