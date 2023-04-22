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


    // load user
    builder.addCase("loadUserRequest", (state) => {
        state.loading = true
    })
    .addCase("loadUsers", (state) => {
        state.loading = true
    })
    .addCase("loadUserSuccess", (state, action) => {
        state.loading = false
        state.isAuthenticated = true
        state.user = action.payload
    })
    .addCase("loadUserFail", (state, action) => {
        state.loading = false
        state.isAuthenticated = false
        state.error = action.payload
    })

    // clear toast message

    builder.addCase("clearError", (state) => {
        state.error = null
    });
    builder.addCase("clearMessage", (state) => {
        state.message = null
    });
})