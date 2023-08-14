import axios from "axios";
import getConfig from "next/config";
import { setCartData, setCartLoading, setLocalCartData } from "../store/cart";
import { setAlert } from "./alert";
const { publicRuntimeConfig } = getConfig();
const { DOMAIN_BASE_URL } = publicRuntimeConfig;
////////////////////////////////////////////////////////////////
// import {
//   setCartData,
//   setCartList,
//   setCartLoading,
//   setLocalCartData,
// } from "../store/cart";
// import { setAlert } from "./alert";

////////////////////cart functions
export const fetchCartData = (token) => async (dispatch) => {
  dispatch(setCartLoading(true));
  const getStoreIdsData = localStorage.getItem("storeIds");
  const storeId = getStoreIdsData?.storeId || 2;
  try {
    const data = await axios.get(
      `${DOMAIN_BASE_URL}/cartLineItem/search?storeId=${storeId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    dispatch(setCartData(data?.data?.result));
    dispatch(setCartLoading(false));
  } catch (err) {
    dispatch(setCartLoading(false));
    setAlert("error", "unable to fetch cart Data")(dispatch);
  }
};

export const addTocart = (selectedProduct, token) => async (dispatch) => {
  dispatch(setCartLoading(true));
  try {
    const getStoreIdsData = localStorage.getItem("storeIds");
    const storeId = getStoreIdsData?.storeId || 2;
    const data = await axios.post(
      `${DOMAIN_BASE_URL}/cartLineItem?storeId=${storeId}`,
      selectedProduct,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    fetchCartData(token)(dispatch);
    dispatch(setCartLoading(false));
    setAlert("success", "Product added to cart")(dispatch);
  } catch (err) {
    dispatch(setCartLoading(false));
    setAlert("error", "unable to addTocart")(dispatch);
  }
};

export const deleteProductFromCart =
  (selectedProduct, token) => async (dispatch) => {
    dispatch(setCartLoading(true));
    let localCart;
    try {
      const getStoreIdsData = localStorage.getItem("storeIds");
      const storeId = getStoreIdsData?.storeId || 2;
      const data = await axios.delete(
        `${DOMAIN_BASE_URL}/cartLineItem/clearSelected?storeId=${storeId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          data: selectedProduct,
          // url: "/cartLineItem/clearSelected",
        }
      );

      fetchCartData(token)(dispatch);

      dispatch(setCartLoading(false));
      setAlert("success", "Item has been Removed from cart")(dispatch);
    } catch (err) {
      dispatch(setCartLoading(false));

      setAlert("error", "unable to update Cart Data")(dispatch);
    }
  };

export const updateCartQuantity =
  (selectedProduct, token) => async (dispatch) => {
    dispatch(setCartLoading(true));
    try {
      const getStoreIdsData = localStorage.getItem("storeIds");
      const storeId = getStoreIdsData?.storeId || 2;
      const data = await axios.put(
        `${DOMAIN_BASE_URL}/cartLineItem/updateAll?storeId=${storeId}`,
        selectedProduct,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(setCartLoading(false));
      fetchCartData(token)(dispatch);
      setAlert("success", "cart updated successfully")(dispatch);
    } catch (err) {
      dispatch(setCartLoading(false));

      setAlert("error", "unable to update Cart Data")(dispatch);
    }
  };

/////////////////////////local cart
export const localAddToCart = (product, cartData) => async (dispatch) => {
  // dispatch(setCartLoading(true));

  let localCart;
  if (
    cartData &&
    Object.keys(cartData).length > 0 &&
    cartData?.cartLineItemDtoList?.length > 0
  ) {
    let { totalCartPrice, totalCartQuantity, cartLineItemDtoList } = cartData;
    let itemExists = cartLineItemDtoList.filter((item) => {
      if (item.productId === product[0].productId) return item;
    });
    if (itemExists.length > 0) {
      let selectedProduct = {
        ...product[0],
        quantity: product[0].quantity + itemExists[0].quantity,
      };
      updateLocalCart(
        selectedProduct,
        cartData,
        "increment",
        product[0].quantity
      )(dispatch);
    } else {
      localCart = {
        totalCartPrice:
          totalCartPrice + product[0].standardPrice * product[0].quantity,
        totalCartQuantity: totalCartQuantity + product[0].quantity,
        cartLineItemDtoList: [...cartLineItemDtoList, product[0]],
      };
      dispatch(setLocalCartData(localCart));
    }
  } else {
    localCart = {
      cartLineItemDtoList: product,
      totalCartPrice: product[0].standardPrice * product[0].quantity,
      totalCartQuantity: product[0].quantity,
    };
    dispatch(setLocalCartData(localCart));
  }

  setAlert("success", "Product added to cart")(dispatch);
  // dispatch(setCartLoading(false));
};

export const RemoveLocalProduct = (product, cartData) => async (dispatch) => {
  dispatch(setCartLoading(true));
  let localCart;

  let { totalCartQuantity, cartLineItemDtoList, totalCartPrice } = cartData;
  let list = cartLineItemDtoList.filter(
    (id) => id.productId !== product.productId
  );
  let removeFromTotal = product.standardPrice * product.quantity;
  localCart = {
    totalCartQuantity: totalCartQuantity - product.quantity,
    totalCartPrice: totalCartPrice - removeFromTotal,
    cartLineItemDtoList: list,
  };

  dispatch(setLocalCartData(localCart));
  setAlert("success", "cart updated successfully")(dispatch);
  dispatch(setCartLoading(false));
};

export const updateLocalCart =
  (product, cartData, type, quantity) => async (dispatch) => {
    // dispatch(setCartLoading(true));
    let localCart;

    let { totalCartQuantity, cartLineItemDtoList, totalCartPrice } = cartData;
    // let enteringkey = cartLineItemDtoList.findIndex((pr) => pr.id === product.id);
    const enteringkey = cartLineItemDtoList.findIndex((object) => {
      return object.productId === product.productId;
    });
    let array = [...cartLineItemDtoList];
    // let list = cartLineItemDtoList.filter(
    //   (id) => id.productId !== product.productId
    // );
    array.splice(enteringkey, 1, product);
    localCart = {
      totalCartQuantity:
        type === "decrement"
          ? totalCartQuantity - quantity
          : totalCartQuantity + quantity,
      totalCartPrice:
        type === "decrement"
          ? totalCartPrice - product.standardPrice * quantity
          : totalCartPrice + product.standardPrice * quantity,
      // cartLineItemDtoList: [...list, product],
      cartLineItemDtoList: array,
    };

    dispatch(setLocalCartData(localCart));
    setAlert("success", "cart updated successfully")(dispatch);
    // dispatch(setCartLoading(false));
  };

export const updateLocalCartOnChange =
  (product, cartData, type, quantity) => async (dispatch) => {
    // dispatch(setCartLoading(true));
    let localCart;

    let { totalCartQuantity, cartLineItemDtoList, totalCartPrice } = cartData;
    // let enteringkey = cartLineItemDtoList.findIndex((pr) => pr.id === product.id);
    const enteringkey = cartLineItemDtoList.findIndex((object) => {
      return object.productId === product.productId;
    });
    let array = [...cartLineItemDtoList];
    let list = cartLineItemDtoList.filter(
      (id) => id.productId !== product.productId
    );
    array.splice(enteringkey, 1, product);

    localCart = {
      totalCartQuantity:
        type === "decrement"
          ? totalCartQuantity - quantity
          : totalCartQuantity + quantity,
      totalCartPrice:
        type === "decrement"
          ? totalCartPrice - product.standardPrice * quantity
          : totalCartPrice + product.standardPrice * quantity,
      // cartLineItemDtoList: [...list, product],
      cartLineItemDtoList: array,
    };

    dispatch(setLocalCartData(localCart));
    setAlert("success", "cart updated successfully")(dispatch);
    // dispatch(setCartLoading(false));
  };
