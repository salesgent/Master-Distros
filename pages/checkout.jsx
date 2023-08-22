import { CheckoutPageComponent } from "@salesgenterp/ui-components";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { LoginFunction } from "../src/AsyncFunctions/Auth";
import {
  addNewAddress,
  AddStore,
  fetchCountries,
  fetchPaymentOptions,
  fetchShippingOptions,
  fetchState,
  PostOrder,
} from "../src/AsyncFunctions/checkout";
import { CheckoutPageContainer } from "../src/components/checkout/checkout.styles";
import "react-credit-cards/es/styles-compiled.css";

import {
  setBillingAddress,
  setCurrentStep,
  setselectedShipping,
  setShippingAddress,
  setShowShipping,
  setStore,
  setStoreCredits,
} from "../src/store/checkout";
import { setAlert } from "../src/AsyncFunctions/alert";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [shippingOptions, setShippingOptions] = useState([]);
  const [paymentOptions, setPaymentOptions] = useState([]);
  const [orderLoading, setOrderLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countries, setCountries] = useState(null);
  const [states, setStates] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [card, setCard] = useState(null);
  const [summary, setSummary] = useState({
    billing: null,
    shipping: null,
  });
  const selectedBilling = useSelector((state) => state.checkout?.selectedBillingAddress);
  const selectedShipping = useSelector((state) => state.checkout?.selectedShippingAddress);
  const cartData = useSelector((state) => state.cart.cartData);
  const shippingMethod = useSelector((state) => state.checkout?.selectedShipping);
  const tokens = useSelector((state) => state.auth.tokens);
  const isloading = useSelector((state) => state.auth.isLoading);
  const userDetails = useSelector((state) => state.auth.userDetails);
  const activeStep = useSelector((state) => state.checkout.ActiveStep);
  const selectedStore = useSelector((state) => state.checkout.SelectedStore);
  const showShipping = useSelector((state) => state.checkout.showShipping);
  const storeCr = useSelector((state) => state.checkout.storeCredits);
  const discountCoupons = useSelector((state) => state.checkout?.discountCoupons);
  const mounted = useRef(false);
  const taxPercentage = 0;
  const storePayment = storeCr ? { name: "store credits" } : null;
  let discountTotal = 0;
  // discountCoupons?.forEach((element) => {
  //   discountTotal = discountTotal + element.amount;
  // });
  useEffect(() => {
    if (tokens?.token && !mounted.current) {
      fetchPaymentOptions(dispatch, tokens?.token).then((data) => {
        setPaymentOptions(data?.data?.result || []);
      });
      fetchShippingOptions(dispatch, tokens?.token).then((data) => {
        setShippingOptions(data?.data?.result || []);
      });
    }
  }, [tokens]);

  useEffect(() => {
    if (userDetails) {
      dispatch(setStore(userDetails?.customerStoreDtoList[0]?.id));
      if (activeStep === 0) dispatch(setCurrentStep(1));
    }
  }, [userDetails, activeStep]);

  useEffect(() => {
    if (selectedCountry) {
      fetchState(selectedCountry)(dispatch).then((data) => setStates(data));
    }
  }, [selectedCountry]);

  useEffect(() => {
    fetchCountries()(dispatch).then((data) => {
      if (!data) return;
      setSelectedCountry(data[0]?.id);
      setCountries(data);
    });
  }, []);

  useEffect(() => {
    let store;
    let billing;
    let shipping;
    if (selectedStore) {
      store = userDetails?.customerStoreDtoList?.find((li) => li.id === selectedStore);
    }
    if (selectedBilling) {
      billing = store?.customerStoreAddressList?.find((li) => li.id === selectedBilling);
      setSummary({
        ...summary,
      });
    }
    if (selectedShipping) {
      shipping = store?.customerStoreAddressList?.find((li) => li.id === selectedShipping);
    }
    setSummary({
      billing: {
        title: billing?.address1,
        data: `${billing?.city}, ${billing?.state}, ${billing?.zip}, ${billing?.country}`,
      },
      shipping: {
        title: shipping?.address1,
        data: ` ${shipping?.city}, ${shipping?.state}, ${shipping?.zip}, ${shipping?.country}`,
      },
    });
  }, [selectedStore, selectedBilling, selectedShipping]);

  const PlaceOrder = (note) => {
    setOrderLoading(true);
    let tax = (taxPercentage / 100) * cartData?.totalCartPrice;

    let orderDto = {
      customerBillingAddressId: selectedBilling,
      customerId: null,
      customerNotes: "",
      customerShippingAddressId: selectedShipping,
      customerStoreId: selectedStore,
      discount: 0,
      internalNotes: "",
      invoiceTimestamp: null,
      paymentTermsId: 1,
      preferredPaymentMethodId: selectedPayment?.id,
      preferredPaymentModeId: selectedPayment?.id,
      preferredShippingModeId: shippingMethod?.id,
      salesRepresentativeId: 1,
      shipTimestamp: null,
      shippingAmount: shippingMethod?.amount,
      orderNotes: note,
      status: "Pro Forma",
      storeId: 1,
      subTotal: cartData?.totalCartPrice,
      taxAmount: tax,
      totalAmount: cartData?.totalCartPrice + tax + (shippingMethod?.amount || 0),
      totalQuantity: cartData?.totalCartQuantity,
    };
    let orderPaymentList;
    let ecommerceCustomPaymentDto = null;

    if (card) {
      ecommerceCustomPaymentDto = {
        cardNumber: card?.cardNumber,
        // cardName: card?.cardName,
        expirationMonth: card?.expirationMonth,
        expirationYear: card?.expirationYear,
        cvv: card?.cvv,
        firstName: card?.firstName,
        lastName: card?.lastName,
        address: card?.address,
        city: card?.city,
        stateId: card?.stateId,
        zipcode: card?.zipcode,
        countryId: card?.countryId,
      };
    }
    if (storeCr && storeCr?.amount > cartData?.totalCartPrice + tax + (shippingMethod?.amount || 0) - discountTotal) {
      orderPaymentList = [
        {
          amount: cartData?.totalCartPrice + tax + (shippingMethod?.amount || 0) - discountTotal,
          paymentModeId: storeCr?.id,
        },
      ];
    } else if (
      storeCr &&
      storeCr?.amount < cartData?.totalCartPrice + tax + (shippingMethod?.amount || 0) - discountTotal
    ) {
      orderPaymentList = [
        {
          amount: storeCr?.amount,
          paymentModeId: storeCr?.id,
        },
        {
          amount: cartData?.totalCartPrice + tax + (shippingMethod?.amount || 0) - storeCr?.amount - discountTotal,
          paymentModeId: selectedPayment?.id,
        },
      ];
    } else {
      orderPaymentList = [
        {
          amount: cartData?.totalCartPrice + tax + (shippingMethod?.amount || 0),
          paymentModeId: selectedPayment?.id,
          customerOrderCard: ecommerceCustomPaymentDto,
        },
      ];
    }
    let paymentDtoList = orderPaymentList;

    if (ecommerceCustomPaymentDto) {
      PostOrder(tokens?.token, {
        orderDto,
        paymentDtoList,
        ecommerceCustomPaymentDto,
        // discountCouponList: discountCoupons,
      })(dispatch).then((data) => {
        if (data?.productOutOfStock) {
          setAlert("error", "There are few line items out of stock, please review them once.")(dispatch);
          router.push(`/cart`);
        }
        if (data?.orderDto?.id) router.push(`/thankyou/${data?.orderDto?.id}`);
      });
    } else {
      PostOrder(tokens?.token, {
        orderDto,
        paymentDtoList,
        // discountCouponList: discountCoupons,
      })(dispatch).then((data) => {
        if (data?.productOutOfStock) {
          setAlert("error", "There are few line items out of stock, please review them once.")(dispatch);
          router.push(`/cart`);
        }
        if (data?.orderDto?.id) router.push(`/thankyou/${data?.orderDto?.id}`);
      });
    }
    setOrderLoading(false);
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
    <CheckoutPageContainer className="checkout">
      <CheckoutPageComponent
        currStep={activeStep}
        styles={styles}
        userName={userDetails?.customerDto?.firstName}
        handleBack={(step) => {
          if (activeStep > 0) {
            if (step) {
              return dispatch(setCurrentStep(step));
            }
            dispatch(setCurrentStep(activeStep - 1));
          }
        }}
        handleNext={() => {
          if (activeStep < 4) {
            dispatch(setCurrentStep(activeStep + 1));
          }
        }}
        handleLogin={(data) => {
          LoginFunction({
            username: data?.email,
            type: "customer",
            password: data?.password,
          })(dispatch).then(() => {
            dispatch(setCurrentStep(activeStep + 1));
          });
        }}
        loading={isloading}
        ////step1
        addStore={(data) => {
          delete data["store"];
          AddStore(data, tokens?.token)(dispatch);
        }}
        setBilling={(data) => dispatch(setBillingAddress(data))}
        setShowShipping={(data) => {
          if (data === false) dispatch(setShippingAddress(selectedBilling));
          dispatch(setShowShipping(data));
        }}
        userStores={userDetails?.customerStoreDtoList}
        //
        selectedStore={selectedStore}
        setSelectedStore={(data) => dispatch(setStore(data))}
        addStoreAddress={(data) => {
          delete data["billingAddress"];
          addNewAddress(data, tokens?.token)(dispatch);
        }}
        setSelectedCountry={(data) => setSelectedCountry(data)}
        countries={countries}
        states={states}
        ///////

        setShipping={(...data) => {
          if (data[0]) {
            dispatch(setShippingAddress(data[0]));
          }
          dispatch(setselectedShipping(data[1]));
        }}
        addShipping={(data) => {
          delete data["shippingAddress"];
          addNewAddress(data, tokens?.token)(dispatch);
        }}
        showShipping={showShipping}
        deliveryOptions={shippingOptions}
        //payments
        setPaymentDetails={(storeCr, paymentMethod, cr) => {
          if (storeCr && userDetails?.customerDto?.storeCredit > 0) {
            dispatch(
              setStoreCredits({
                id: 5,
                amount: userDetails?.customerDto?.storeCredit,
              })
            );
          } else {
            dispatch(setStoreCredits(null));
          }

          if (cr && cr !== false) {
            setCard(cr);
          } else {
            setCard(false);
          }
          if (paymentMethod) {
            setSelectedPayment(paymentMethod);
          }
        }}
        paymentMethods={paymentOptions?.filter((payment) => payment?.ecommerce)}
        storeCredits={userDetails?.customerDto?.storeCredit}
        ///order review
        clickRedirect={(link) => {
          router.push(`/${link}`);
        }}
        ordering={orderLoading}
        deliveryCharges={shippingMethod?.amount || 0}
        placeOrder={(data) => {
          PlaceOrder(data);
        }}
        cartData={cartData}
        tax={taxPercentage}
        selectedStoreCredits={storeCr?.amount || 0}
        //sum
        billingAddress={summary?.billing}
        shippingAddress={summary?.shipping}
        shippingMethod={shippingMethod}
        selectedPaymentMethod={selectedPayment || storePayment}
      />
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
