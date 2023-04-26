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


//  reset password 
// export const resetPassword = (email) => async (dispatch) => {
    
//     try {
//         dispatch({
//             type: "getResetPasswordRequest",
//         });
    
//         const {data} = await axiosConfig({
//             method: 'POST',
//             url: '/auth/resetpassword',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             data: {
//                 email: email
//             }
//         }) 

//         dispatch({
//             type: "getResetPasswordSuccess",
//             payloadMessage: data.mess,
//             accessOtpToken: data.accessOtpToken
//         });
    
//     } catch (error) {
//         dispatch({
//             type: "getResetPasswordFail",
//             payload: error.response.data.message
//         });

//     }
// };


// // enter OTP Code

// export const enterOTPCode = (otp) => async (dispatch) => {
    
//     try {
//         dispatch({
//             type: "getOtpRequest",
//         });
    
//         const {data} = await axiosConfig({
//             method: 'POST',
//             url: '/auth/checkcode',
//             data: {
//                 code: otp
//             }
//         }) 
//         dispatch({
//             type: "getOtpSuccess",
//             payloadMessOtp: data.mess,
//         });
    
//     } catch (error) {
//         dispatch({
//             type: "getOtpFail",
//             payload: error.response.data.message
//         });

//     }
// };

// // enter newpassword
// export const enterNewPassword = (newpassword) => async (dispatch) => {
    
//     try {
//         dispatch({
//             type: "setNewPasswordRequest",
//         });
    
//         const {data} = await axiosConfig({
//             method: 'PATCH',
//             url: '/auth/newpassword',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             data: {
//                 newpassword: newpassword
//             }
//         }) 

//         dispatch({
//             type: "setNewPasswordSuccess",
//             payloadMess: data.mess,
//         });
    
//     } catch (error) {
//         dispatch({
//             type: "setNewPasswordFail",
//             payload: error.response.data.message
//         });

//     }
// };

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