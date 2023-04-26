import { createReducer } from "@reduxjs/toolkit";

export const ResetPasswordReducer = createReducer(
  {},
  (builder) => {
   
    // reset password
    // builder
    //   .addCase("getResetPasswordRequest", (state) => {
    //     state.loading = true;
    //   })
    //   .addCase("getResetPasswordSuccess", (state, action) => {
    //     state.loading = false
    //     state.message = action.payloadMessage
    //     state.accessToken = action.accessOtpToken

    //   })
    //   .addCase("getResetPasswordFail", (state, action) => {
    //     state.loading = false
    //     state.error = action.payload
    //   });

    // // enter otp code
    builder
      .addCase("getOtpRequest", (state) => {
        state.loading = true;
      })
      .addCase("getOtpSuccess", (state, action) => {
        state.loading = false;
        state.messOtp = action.payloadMessOtp;
      })
      .addCase("getOtpFail", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      

    // // set new password
    builder
      .addCase("setNewPasswordRequest", (state) => {
        state.loading = true;
      })
      .addCase("setNewPasswordSuccess", (state, action) => {
        state.loading = false;
        state.mess = action.payloadMess;
      })
      .addCase("setNewPasswordFail", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
);
