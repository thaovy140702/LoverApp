import { createReducer } from "@reduxjs/toolkit";

export const LogoutReducer = createReducer(
    {
    },
    (builder) => {
        builder
            .addCase("getLogoutRequest", (state) => {
                state.loading = true
            })
            .addCase("getLogoutSuccess", (state, action) => {
                state.loading = false
                state.message = action.payloadMessage
            })
            .addCase("getLogoutFail", (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
)