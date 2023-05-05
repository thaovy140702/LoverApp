import { createReducer } from "@reduxjs/toolkit";

export const UserReducer = createReducer({}, 
    (builder) => {

    // sign in
    builder.addCase("loginRequest", (state) => {
        state.loading = true
    })
    builder.addCase("loginSuccess", (state, action) => {
        state.loading = false
        state.isAuthenticated = true
        state.message = action.payload
        state.accessToken = action.payloadToken
        state.id = action.payloadId
        state.role = action.payloadRole
        state.email = action.payloadEmail
        state.username = action.payloadUsername
    });
    builder.addCase("loginFail", (state, action) => {
        state.loading = false
        state.isAuthenticated = false
        state.error = action.payload
    });

    // sign up
    builder.addCase("registerSuccess", (state, action) => {
        state.loading = false
        state.isAuthenticated = true
        state.message = action.payload
        state.accessToken = action.payloadToken
    });
    builder.addCase("registerRequest", (state) => {
        state.loading = true
    });
    builder.addCase("registerFail", (state, action) => {
        state.loading = false
        state.isAuthenticated = false
        state.error = action.payload
    });

    // clear toast message

    builder.addCase("clearError", (state) => {
        state.error = null
    });
    builder.addCase("clearMessage", (state) => {
        state.message = null
    });

    builder
      .addCase("getResetPasswordRequest", (state) => {
        state.loading = true;
      })
      .addCase("getResetPasswordSuccess", (state, action) => {
        state.loading = false
        state.messageResetPass = action.payloadMessage
        state.accessToken = action.accessOtpToken

      })
      .addCase("getResetPasswordFail", (state, action) => {
        state.loading = false
        state.error = action.payload
      });
})