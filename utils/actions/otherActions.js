import axios from "axios";
import { server } from "../../store/store";
import axiosConfig from "../axiosConfig";

// load slide
export const getSlide = () => async (dispatch) => {
  try {
    dispatch({
      type: "getSlideRequest",
    });

    const { data } = await axiosConfig({
      method: "GET",
      url: "/slider/all",
      // data: payload
    });

    dispatch({
      type: "getSlideSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getSlideFail",
      payload: error.response.data.message,
    });
  }
};

// change password

export const changePassword =
  (id, password, newpassword) => async (dispatch) => {
    try {
      dispatch({
        type: "putChangePasswordRequest",
      });

      const { data } = await axiosConfig({
        method: "PUT",
        url: `/auth/changepassword/${id}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          password: password,
          newpassword: newpassword,
        },
      });

      dispatch({
        type: "putChangePasswordSuccess",
        payloadMessChangePass: data.mess,
      });
    } catch (error) {
      dispatch({
        type: "putChangePasswordFail",
        payload: error.response.data.message,
      });
    }
  };

// get user profile

export const getProfile = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getProfileRequest",
    });

    const { data } = await axiosConfig({
      method: "GET",
      url: `/user/findinfouser/${id}`,
    });

    dispatch({
      type: "getProfileSuccess",
      payloadProfile: data,
    });
  } catch (error) {
    dispatch({
      type: "getProfileFail",
      payload: error.response.data.message,
    });
  }
};

// edit user profile
export const editProfile =
  (id, description, name, gender, old, phone, character, appearance) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "editProfileRequest",
      });

      const { data } = await axiosConfig({
        method: "PUT",
        url: `/user/update/${id}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          name: name,
          gender: gender,
          old: old,
          phone: phone,
          description: description,
          character: character,
          appearance: appearance,
        },
      });

      dispatch({
        type: "editProfileSuccess",
        payloadEditProfile: data.mess,
      });
    } catch (error) {
      dispatch({
        type: "editProfileFail",
        payload: error.response.data.message,
      });
    }
  };

// add info onboarding
export const addInfoOnboarding =
  (name, gender, old, character, appearance, image) => async (dispatch) => {
    try {
      dispatch({
        type: "addInfoRequest",
      });

      const formData = new FormData();
      formData.append("name", name)
      formData.append("gender", gender)
      formData.append("old", old)
      formData.append("character", old)
      formData.append("old", old)
      formData.append("character", character)
      formData.append("appearance ", appearance)
      formData.append("image", image)

      const { data } = await axiosConfig({
        method: "POST",
        url: `/user/add`,

        headers: {
          "Content-Type": "multipart/form-data",
        },
        formData
      });

      dispatch({
        type: "addInfoSuccess",
        payloadAddInfo: data.mess,
      });
    } catch (error) {
      dispatch({
        type: "addInfoFail",
        payload: error.response.data.message,
      });
    }
  };

  // Paypal
  export const addPaypal =
  (cost, monney) => async (dispatch) => {
    try {
      dispatch({
        type: "addPaypalRequest",
      });

      const { data } = await axiosConfig({
        method: "POST",
        url: `/paypal/pay`,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          cost: cost,
          monney: monney,
        },
      });

      dispatch({
        type: "addPaypalSuccess",
        payloadAddPaypal: data,
      });
    } catch (error) {
      dispatch({
        type: "addPaypalFail",
        payload: error.response.data.message,
      });
    }
  };
  
  // get list booking

  export const getListBooking= (id) => async (dispatch) => {
    try {
      dispatch({
        type: "getBookingRequest",
      });
  
      const { data } = await axiosConfig({
        method: "GET",
        url: `/book/listbooking/${id}`,
      });
  
      dispatch({
        type: "getBookingSuccess",
        payloadBooking: data.data,
      });
    } catch (error) {
      dispatch({
        type: "getBookingFail",
        payload: error.response.data.message,
      });
    }
  };