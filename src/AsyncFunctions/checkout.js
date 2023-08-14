import axios from "axios";
import getConfig from "next/config";
import { setStates } from "../store/checkout";
const { publicRuntimeConfig } = getConfig();
const { DOMAIN_BASE_URL } = publicRuntimeConfig;
import { setAlert } from "./alert";
import { getUserDetails } from "./Auth";
import { fetchCartData } from "./cart";
/////////////////////checkout functions //////////////////////

export const fetchState = (countryCode) => async (dispatch) => {
  try {
    const data = await axios.get(`${DOMAIN_BASE_URL}/country/${countryCode}/allState`);
    return data?.data?.result;
  } catch (err) {
    setAlert("error", "unable to fetch the states")(dispatch);
  }
};
export const fetchCountries = () => async (dispatch) => {
  try {
    const data = await axios.get(`${DOMAIN_BASE_URL}/country/all`);
    return data?.data?.result;
  } catch (err) {
    setAlert("error", "unable to fetch the countries")(dispatch);
  }
};
export const fetchShippingOptions = async (dispatch, token) => {
  try {
    const data = await axios.get(`${DOMAIN_BASE_URL}/shipping/options`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
    // dispatch(setShippingOptions(data?.data?.result));
  } catch (err) {
    setAlert("error", "unable to fetch shippingOptions")(dispatch);
  }
};
export const fetchPaymentOptions = async (dispatch, token) => {
  try {
    const data = await axios.get(`${DOMAIN_BASE_URL}/store/paymentMode`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
    // dispatch(setpaymentOptions(data?.data?.result));
  } catch (err) {
    setAlert("error", "unable to fetch payment methods")(dispatch);
  }
};

export const AddStore = (data, token) => async (dispatch) => {
  try {
    const result = await axios.post(`${DOMAIN_BASE_URL}/ecommerce/customer/store`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });

    getUserDetails(token)(dispatch);
    setAlert("success", "Added store successfully")(dispatch);
    return result;
  } catch (err) {
    setAlert("error", "Unable to create a store")(dispatch);
  }
};
export const addNewAddress = (data, token) => async (dispatch) => {
  try {
    const result = await axios.post(`${DOMAIN_BASE_URL}/customer/address`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });

    getUserDetails(token)(dispatch);
    setAlert("success", "Added new Address successfully")(dispatch);
    return result;
  } catch (err) {
    setAlert("error", "Unable to add New address")(dispatch);
  }
};

export const PostOrder = (token, details) => async (dispatch) => {
  let orderDetails = {
    discountCouponList: [],
    // orderDto: details.orderDto,
    // paymentDtoList: details.paymentDtoList,
    // ecommerceCustomPaymentDto: details?.ecommerceCustomPaymentDto,
    ...details,
  };
  try {
    const getStoreIdsData = localStorage.getItem("storeIds");
    const storeId = getStoreIdsData?.storeId || 2;
    const data = await axios.post(`${DOMAIN_BASE_URL}/ecommerce/order?storeId=${storeId}`, orderDetails, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setAlert("success", "Order Placed successfully")(dispatch);
    getUserDetails(token)(dispatch);
    fetchCartData(token)(dispatch);
    return data?.data?.result;
    // dispatch(setpaymentOptions(data?.data?.result));
  } catch (err) {
    setAlert("error", err?.response?.data?.error?.details || "unable to complete the order", { autoClose: false })(
      dispatch
    );
    return false;
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////
// orderDto: {customerStoreId: 4, storeId: 1, salesRepresentativeId: 1, customerId: null,…}
// customerBillingAddressId: 4
// customerId: null
// customerNotes: ""
// customerShippingAddressId: 4
// customerStoreId: 4
// discount: 0
// internalNotes: ""
// invoiceTimestamp: null
// paymentTermsId: 1
// preferredPaymentMethodId: 9
// preferredPaymentModeId: 9
// preferredShippingModeId: 4
// salesRepresentativeId: 1
// shipTimestamp: null
// shippingAmount: 0
// shippingNotes: ""
// status: "Pro Forma"
// storeId: 1
// subTotal: 1393
// taxAmount: 83.58
// totalAmount: 1476.58
// totalQuantity: 7
// paymentDtoList: [{paymentModeId: 9, amount: 1476.58, transactionId: ""}]
// 0: {paymentModeId: 9, amount: 1476.58, transactionId: ""}
// amount: 1476.58
// paymentModeId: 9
// transactionId: ""
//////////////////////////////////////////
