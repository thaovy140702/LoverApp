import axios from "axios";
import { server } from "../../store/store";
import axiosConfig from '../axiosConfig'


export const logout = () => async (dispatch) => {
    
    try {
        dispatch({
            type: "getLogoutRequest",
        });
    
        const {data} = await axiosConfig({
            method: 'POST',
            url: '/auth/logout'
        }) 

        dispatch({
            type: "getLogoutSuccess",
            payloadMessage: data.message,
        });
    
    } catch (error) {
        dispatch({
            type: "getLogoutFail",
            payload: error.response.data.message
        });

    }
};

