import axios from "axios";
import { server } from "../../store/store";
import axiosConfig from "../axiosConfig"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getRefreshToken = () => async (dispatch) => {
  try {
    const response = await axiosConfig.post("/auth/refresh");
    dispatch({
      type: "getRefreshTokenSuccess",
      payload: response.data.accessToken,
    });
  } catch (error) {
    dispatch({
      type: "getRefreshTokenFail",
      payload: error.message,
    });
  }
};

export const updateData = (newData) => {
    return async (dispatch) => {
      try {
        const data = await AsyncStorage.getItem('persist:root'); 
        const parsedData = JSON.parse(data);
        // const mergedData = {
        //   ...parsedData,
        //   ...newData,
        // }; // merge the current data with the new data
  
        await AsyncStorage.setItem("accessToken", JSON.stringify(newData)); // save the merged data back to AsyncStorage
  
        // dispatch({ }); // dispatch the action with the updated data
      } catch (error) {
        console.log(error);
      }
    };
  };



