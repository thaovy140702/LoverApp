import { createReducer } from "@reduxjs/toolkit";

export const PartnerReducer = createReducer(
    {
        partners: [],
        partner: {},
        loading: false,
        error: null,
        selectedPartnerId: null,
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
            
            .addCase("selectPartnerDetail", (state, action) => {
                const selectedPartnerId = action.payload;
                const selectedPartner = state.partners.find(
                (partner) => partner.id === selectedPartnerId
                );
                state.selectedPartnerId = selectedPartnerId;
                state.partner = selectedPartner || {};
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