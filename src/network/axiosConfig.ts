import axios from "axios";

export const instance = axios.create({
  baseURL: "https://staging.mazaady.com/api/v1/",
});

instance.interceptors.request.use(
  function (config) {
    // => Do something before request is sent
    config.headers["private-key"] = "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16";

    return config;
  },
  function (error) {
    // => Do something with request error
    return Promise.reject(error);
  }
);
