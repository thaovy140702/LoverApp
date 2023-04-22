import { createReducer } from "@reduxjs/toolkit";

export const PartnerReducer = createReducer(
    {
        partners: [],
        partner: {}
    },
    (builder) => {
        builder
            .addCase("getAllPartnersRequest", (state) => {
                state.loading = true
            })
            .addCase("getAllPartnersSuccess", (state, action) => {
                state.loading = false
                state.partners = action.payload
            })
            .addCase("getAllPartnersFail", (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            .addCase("getPartnerDetailRequest", (state) => {
                state.loading = true
            })
            .addCase("getPartnerDetailSuccess", (state, action) => {
                state.loading = false
                state.partner = action.payload.partner
            })
            .addCase("getPartnerDetailFail", (state, action) => {
                state.loading = false
                state.error = action.payload
            })


    }
)