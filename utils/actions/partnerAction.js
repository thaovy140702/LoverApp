import axios from "axios";
import { server } from "../../store/store";
import axiosConfig from '../axiosConfig'


export const getAllPartners = () => async (dispatch) => {
    const token =''
    try {
        dispatch({
            type: "getAllPartnersRequest",
        });
    
        const {data} = await axiosConfig({
            method: 'GET',
            url: '/parter/allinfo',
            // data: payload
        }) 

        dispatch({
            type: "getAllPartnersSuccess",
            payload: data,
        });
    
    } catch (error) {
        dispatch({
            type: "getAllPartnersFail",
            payload: error.response.data.message
        });

    }
};

export const selectPartnerDetail = (partnerId) => {
    return {
      type: "selectPartnerDetail",
      payload: partnerId,
    };
  };

export const getPartnerDetail = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "getPartnerDetailRequest",
        });

        const { data } = await axios.get(
            `${server}/parter/findinfo/${id}`, 
             {
                withCredentials: true
            });

        dispatch({
            type: "getPartnerDetailRequest",
            payload: data,
        });
    
    } catch (error) {
        dispatch({
            type: "getPartnerDetailFail",
            payload: error.response.data.message
        });

    }
};


  // get partner profile

  export const getPartnerProfile = (id) => async (dispatch) => {
    try {
      dispatch({
        type: "getPartnerProfileRequest",
      });
  
      const { data } = await axiosConfig({
        method: "GET",
        url: `/parter/findinfo/${id}`,
      });
  
      dispatch({
        type: "getPartnerProfileSuccess",
        payloadPartnerProfile: data,
      });
    } catch (error) {
      dispatch({
        type: "getPartnerProfileFail",
        payload: error.response.data.message,
      });
    }
  };

  