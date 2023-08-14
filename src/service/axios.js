import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { DOMAIN_BASE_URL } = publicRuntimeConfig;

const instance = axios.create({
  baseURL: DOMAIN_BASE_URL,
});

export default instance;
