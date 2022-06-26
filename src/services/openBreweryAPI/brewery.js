import axios from "./http";

export default {
  list() {
    return axios
      .get("breweries")
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },
};
