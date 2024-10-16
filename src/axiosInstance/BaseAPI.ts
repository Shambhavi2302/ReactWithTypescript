import axiosInstance from "./axiosInstance";
import { AxiosResponse, AxiosError } from "axios";
import { ExampleCompModel } from "../examplecomponent.model";

const APT_GET_METHOD: string = "GET";
const APT_POST_METHOD: string = "POST";
const APT_PUT_METHOD: string = "PUT";
const APT_PATCH_METHOD: string = "PATCH";

type APICallbackOptions = {
  successCallback?: (response: Partial<ExampleCompModel>) => void;
  failureCallBack?: (err: any) => void;
};

const handleResponse = (
  options: APICallbackOptions,
  response: AxiosResponse
) => {
  // const { status = "", data } = response;
  const {
    status = 0,
    data = {},
  }: { status: number; data: Partial<ExampleCompModel> } = response;
  console.log("API Response Data:", data);
  if (status === 200 || status === 201 || status === 202) {
    if (
      options?.successCallback &&
      typeof options.successCallback === "function"
    ) {
      const { data = {} }: { data: Partial<ExampleCompModel> } = response;
      options.successCallback(data);
    }
  } else {
    if (
      options?.failureCallBack &&
      typeof options.failureCallBack === "function"
    ) {
      // const { response = {} } = res;
      options.failureCallBack(response);
    }
  }
};

export const makeAPIRequest = async (
  requestMethod: string = APT_GET_METHOD,
  requestURL: string = "",
  data: Partial<ExampleCompModel> = {},
  options: APICallbackOptions = {}
) => {
  await axiosInstance({
    method: `${requestMethod}`,
    url: requestURL,
    data: data,
  })
    .then((response: AxiosResponse) => {
      handleResponse(options, response);
    })

    .catch((err: any) => {
      handleResponse(options, err);
    });
};

export const makeAPIPOSTRequest = (
  url: string = "",
  data: Partial<ExampleCompModel> = {},
  key: any = "",
  options: APICallbackOptions = {}
) => {
  return makeAPIRequest(APT_POST_METHOD, url, data, options);
};

export const makeAPIPUTRequset = (
  url: string = "",
  data: Partial<ExampleCompModel> = {},
  key: any = "",
  options: APICallbackOptions = {}
) => {
  return makeAPIRequest(APT_PUT_METHOD, url, data, options);
};

export const makeAPIGETRequest = (
  url: string = "",
  data: Partial<ExampleCompModel> = {},
  key: any = "",
  options: APICallbackOptions = {}
) => {
  return makeAPIRequest(APT_GET_METHOD, url, data, options);
};

export const makeAPIPATCHRequest = (
  url: string = "",
  data: Partial<ExampleCompModel> = {},
  key = "",
  options: APICallbackOptions = {}
) => {
  return makeAPIRequest(APT_PATCH_METHOD, url, data, options);
};
