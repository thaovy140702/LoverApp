import { createReducer } from "@reduxjs/toolkit";

export const otherReducer = createReducer(
  {
    slide: [],
    myProfile: {}
  },
  (builder) => {
    // slide
    builder
      .addCase("getSlideRequest", (state) => {
        state.loading = true;
      })
      .addCase("getSlideSuccess", (state, action) => {
        state.loading = false;
        state.slide = action.payload;
      })
      .addCase("getSlideFail", (state, action) => {
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


    // load profile of user
    builder
      .addCase("getProfileRequest", (state) => {
        state.loading = true
      })
      .addCase("getProfileSuccess", (state, action) => {
        state.loading = false
        state.myProfile = action.payloadProfile
      })
      .addCase("getProfileFail", (state, action) => {
        state.loading = false
        state.error = action.payload
      });


      // Edit profile of user
    builder
    .addCase("editProfileRequest", (state) => {
      state.loading = true
    })
    .addCase("editProfileSuccess", (state, action) => {
      state.loading = false
      state.message = action.payloadEditProfile
    })
    .addCase("editProfileFail", (state, action) => {
      state.loading = false
      state.error = action.payload
    });


      // Add info onboarding
      builder
      .addCase("addInfoRequest", (state) => {
        state.loading = true
      })
      .addCase("addInfoSuccess", (state, action) => {
        state.loading = false
        state.messAddInfo = action.payloadAddInfo
      })
      .addCase("addInfoFail", (state, action) => {
        state.loading = false
        state.error = action.payload
      });

      // Paypal
      builder
      .addCase("addPaypalRequest", (state) => {
        state.loading = true
      })
      .addCase("addPaypalSuccess", (state, action) => {
        state.loading = false
        state.messAddPaypal = action.payloadAddPaypal
      })
      .addCase("addPaypalFail", (state, action) => {
        state.loading = false
        state.error = action.payload
      });
  }
);
