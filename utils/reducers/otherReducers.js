import { createReducer } from "@reduxjs/toolkit";

export const otherReducer = createReducer(
  {
    profile: {},
  },
  (builder) => {
    // slide
    builder.addCase("loadSlideRequest", (state) => {
      state.loading = true;
    });
    builder.addCase("loadSlideSuccess", (state) => {
      state.loading = false;
    });

    // reset password
    builder
      .addCase("getResetPasswordRequest", (state) => {
        state.loading = true;
      })
      .addCase("getResetPasswordSuccess", (state, action) => {
        state.loading = false;
        state.message = action.payloadMessage;
      })
      .addCase("getResetPasswordFail", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // enter otp code
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

    // set new password
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

    // change password
    builder
      .addCase("putChangePasswordRequest", (state) => {
        state.loading = true;
      })
      .addCase("putChangePasswordSuccess", (state, action) => {
        state.loading = false;
        state.messChangePass = action.payloadMessChangePass;
      })
      .addCase("putChangePasswordFail", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
);
