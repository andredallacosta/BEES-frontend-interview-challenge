import axios from "axios";

const url = "https://api.openbrewerydb.org";

export const api = axios.create({
  baseURL: url,
});

export const baseUrl = url;

export default api;
