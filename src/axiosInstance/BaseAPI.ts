import axiosInstance from "./axiosInstance";
import { AxiosResponse } from "axios";

const APT_GET_METHOD = "GET";
const APT_POST_METHOD = "POST";
const APT_PUT_METHOD = "PUT";
const APT_PATCH_METHOD = "PATCH";

type APICallbackOptions = {
  successCallback?: (response: any) => void;
  failureCallBack?: (err: any) => void;
};

const handleResponse = (options: APICallbackOptions, res: AxiosResponse) => {
  const { status = "", data } = res;
  console.log("API Response Data:", data);
  if (status === 200 || status === 201 || status === 202) {
    if (
      options?.successCallback &&
      typeof options.successCallback === "function"
    ) {
      const { data = {} } = res;
      options.successCallback(data);
    }
  } else {
    if (
      options?.failureCallBack &&
      typeof options.failureCallBack === "function"
    ) {
      // const { response = {} } = res;
      options.failureCallBack(res);
    }
  }
};

export const makeAPIRequest = async (
  requestMethod = APT_GET_METHOD,
  requestURL = "",
  data = {},
  options = {}
) => {
  await axiosInstance({
    method: `${requestMethod}`,
    url: requestURL,
    data: data,
  })
    .then((response) => {
      handleResponse(options, response);
    })

    .catch((err) => {
      handleResponse(options, err);
    });
};

export const makeAPIPOSTRequset = (
  url = "",
  data = {},
  key = "",
  options = {}
) => {
  return makeAPIRequest(APT_POST_METHOD, url, data, options);
};

export const makeAPIPUTRequset = (
  url = "",
  data = {},
  key = "",
  options = {}
) => {
  return makeAPIRequest(APT_PUT_METHOD, url, data, options);
};

export const makeAPIGETRequest = (
  url = "",
  data = {},
  key = "",
  options = {}
) => {
  return makeAPIRequest(APT_GET_METHOD, url, data, options);
};

export const makeAPIPATCHRequest = (
  url = "",
  data = {},
  key = "",
  options = {}
) => {
  return makeAPIRequest(APT_PATCH_METHOD, url, data, options);
};
