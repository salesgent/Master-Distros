import axios from "axios";
import getConfig from "next/config";
import { setToken, setUserDetails, toggleLoading } from "../store/Auth";
import { setAlert } from "./alert";
const { publicRuntimeConfig } = getConfig();
const { DOMAIN_BASE_URL } = publicRuntimeConfig;
////////////////////////////////////////////////

/////////login function
export const LoginFunction = (data) => async (dispatch) => {
  dispatch(toggleLoading(true));

  try {
    const result = await axios.post(`${DOMAIN_BASE_URL}/authenticate`, data);
    dispatch(toggleLoading(false));
    dispatch(
      setToken({
        token: result?.data?.result?.access,
        retoken: result?.data?.result?.refresh,
      })
    );
    setAlert("success", "Login successful")(dispatch);
    return true;
  } catch (err) {
    setAlert("error", "Invalid Credentials")(dispatch);
    dispatch(toggleLoading(false));
  }
};
export const getUserDetails = (token) => async (dispatch) => {
  try {
    const result = await axios.get(`${DOMAIN_BASE_URL}/ecommerce/customer`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch(setUserDetails(result.data.result));
    return true;
  } catch (err) {
    return false;
  }
};
/////////////forget password
export const forgetPassword = (email) => async (dispatch) => {
  try {
    const data = await axios.post(`${DOMAIN_BASE_URL}/ecommerce/customer/sendForgotPasswordEmail?email=${email}`);
    setAlert("success", "Link has been sent to your Email")(dispatch);
    return true;
  } catch (error) {
    setAlert("error", "Something went wrong!")(dispatch);
    return false;
  }
};

export const resetPassword = (password, confirmPassword, email, token) => async (dispatch) => {
  let body = {
    password,
    confirmPassword,
  };

  try {
    await axios.post(`${DOMAIN_BASE_URL}/ecommerce/customer/resetPassword?email=${email}&token=${token}`, body);
    setAlert("success", "Your Password is updated successfully!")(dispatch);
    return true;
  } catch (error) {
    setAlert("error", "Something went wrong!")(dispatch);
    return false;
  }
};

/////////////////register
export const getSalesmanDetails = async (dispatch) => {
  try {
    const data = await axios.get(`${DOMAIN_BASE_URL}/ecommerce/employee/list`);

    return data?.data?.result?.content;
  } catch (err) {
    setAlert("error", "unables to get salesman's data")(dispatch);
  }
};
export const fetchCountries = async (dispatch) => {
  try {
    const data = await axios.get(`${DOMAIN_BASE_URL}/country/all`);

    return data?.data?.result;
  } catch (err) {
    setAlert("error", "unables to get salesman's data")(dispatch);
  }
};
export const register = (details) => async (dispatch) => {
  dispatch(toggleLoading(true));
  const {
    email,
    password,
    firstName,
    lastName,
    phone,
    address1,
    address2,
    city,
    country,
    state,
    zip,
    websiteReference,
    taxId,
    tobaccoId,
    feinNumber,
    voidCheckNumber,
    drivingLicenseNumber,
    company,
    dbaName,
    referBySalesRep,
    businessLicense,
    tobaccoLicense,
    feinLicense,
    drivingLicense,
    voidCheck,
  } = details;

  const userDetails = {
    customerStoreAddressList: [
      {
        address1,
        address2,
        city,
        countryId: country,
        stateId: state,
        zip,
      },
    ],
    firstName,
    lastName,
    email,
    phone,
    company,
    dbaName,
    primaryBusinessName: "vape store",
    taxId,
    tobaccoId,
    feinNumber,
    drivingLicenseNumber,
    referBySalesRep,
    websiteReference,
    voidCheckNumber,
  };

  let bodyFormData = new FormData();
  businessLicense?.[0] && bodyFormData.append("businessLicense", businessLicense?.[0], businessLicense?.[0]?.name);
  tobaccoLicense?.[0] && bodyFormData.append("tobaccoLicense", tobaccoLicense?.[0], tobaccoLicense?.[0]?.name);
  feinLicense?.[0] && bodyFormData.append("feinLicense", feinLicense?.[0], feinLicense?.[0]?.name);
  drivingLicense?.[0] && bodyFormData.append("drivingLicense", drivingLicense?.[0], drivingLicense?.[0]?.name);
  voidCheck?.[0] && bodyFormData.append("voidCheck", voidCheck?.[0], voidCheck?.[0]?.name);
  bodyFormData.append("customerObj", JSON.stringify(userDetails));

  try {
    await axios.post(`${DOMAIN_BASE_URL}/ecommerce/customer/withDocuments`, bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: `application/json, text/plain`,
      },
    });
    dispatch(toggleLoading(false));
    setAlert(
      "success",
      "We have received your wholesale application, please check your email for further details!"
    )(dispatch);
    return true;
  } catch (err) {
    setAlert("error", err?.response?.data?.error?.details || "Unable to signup", { autoClose: false })(dispatch);
    dispatch(toggleLoading(false));
    return false;
  }
};
