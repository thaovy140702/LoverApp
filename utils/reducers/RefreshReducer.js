import { createReducer } from "@reduxjs/toolkit";

export const RefreshReducer = createReducer(
    {
        refreshToken: {},
       
    },
    (builder) => {
        builder
            .addCase("getRefreshTokenRequest", (state) => {
                state.loading = true,
                state.isAuthenticated = false
            })
            .addCase("getRefreshTokenSuccess", (state, action) => {
                state.loading = false
                state.refreshToken = action.payload
                state.accessToken = action.payloadToken
                state.isAuthenticated = true
            })
            .addCase("getRefreshTokenFail", (state, action) => {
                state.loading = false,
                state.error = action.payload
            })
    }
)