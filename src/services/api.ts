import axios from "axios";

const baseUrlApi = process.env.NEXT_URL_API;
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
export const apiUnauthenticated = axios.create({
  baseURL: baseUrlApi,
  timeout: 10000,
});

export const api = axios.create({
  baseURL: baseUrlApi,
  timeout: 10000,
});
