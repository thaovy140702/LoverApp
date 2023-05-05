import axios from "axios";
import { server } from "../../store/store";
import axiosConfig from '../axiosConfig'


// load slide
export const getSlide = () => async (dispatch) => {
    
    try {
        dispatch({
            type: "getSlideRequest",
        });
    
        const {data} = await axiosConfig({
            method: 'GET',
            url: '/slider/all',
            // data: payload
        }) 

        dispatch({
            type: "getSlideSuccess",
            payload: data,
        });
    
    } catch (error) {
        dispatch({
            type: "getSlideFail",
            payload: error.response.data.message
        });

    }
};

// change password

export const changePassword = (id, password, newpassword) => async (dispatch) => {
    
    try {
        dispatch({
            type: "putChangePasswordRequest",
        });
    
        const {data} = await axiosConfig({
            method: 'PUT',
            url: `/auth/changepassword/${id}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                password: password,
                newpassword: newpassword
            }
        }) 

        dispatch({
            type: "putChangePasswordSuccess",
            payloadMessChangePass: data.mess,
        });
    
    } catch (error) {
        dispatch({
            type: "putChangePasswordFail",
            payload: error.response.data.message
        });

    }
};

export const getProfile = (id) => async (dispatch) => {
    
    try {
        dispatch({
            type: "getProfileRequest",
        });
    
        const {data} = await axiosConfig({
            method: 'GET',
            url: `/user/findinfouser/${id}`,
        }) 

        dispatch({
            type: "getProfileSuccess",
            payloadProfile: data,
        });
    
    } catch (error) {
        dispatch({
            type: "getProfileFail",
            payload: error.response.data.message
        });

    }
};