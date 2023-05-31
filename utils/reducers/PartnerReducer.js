import { createReducer } from "@reduxjs/toolkit";

export const PartnerReducer = createReducer(
  {
    partners: [],
    partner: {},
    loading: false,
    data: null,
    error: null,
    selectedPartnerId: null,
  },
  (builder) => {
    builder
      .addCase("getAllPartnersRequest", (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase("getAllPartnersSuccess", (state, action) => {
        state.loading = false;
        state.partners = action.payload;
        state.error = null;
      })
      .addCase("getAllPartnersFail", (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
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
        state.loading = true;
        state.error = null;
      })
      .addCase("getPartnerDetailSuccess", (state, action) => {
        state.loading = false;
        state.partner = action.payload.partner;
        state.error = null;
      })
      .addCase("getPartnerDetailFail", (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      });

    // load profile of partner
    builder
      .addCase("getPartnerProfileRequest", (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase("getPartnerProfileSuccess", (state, action) => {
        state.loading = false;
        state.partner = action.payloadPartnerProfile;
        state.error = null;
      })
      .addCase("getPartnerProfileFail", (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      });
    
  }
);
