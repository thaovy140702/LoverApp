import axios from "axios";
import server from "../store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";

const instance = axios.create({
  baseURL: "https://lover-seven.vercel.app/api/v1",
});

instance.interceptors.request.use(async function (config) {
    // Do something before request is sent

    let values = await AsyncStorage.getItem("persist:root");
    const object = JSON.parse(values);
    const user = JSON.parse(object.user);
    const accessToken = user["accessToken"];

    config.headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // refresh token
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
