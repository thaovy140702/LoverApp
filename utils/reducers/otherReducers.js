import { createReducer } from "@reduxjs/toolkit";

export const otherReducer = createReducer(
  {
    slide: [],
    myProfile: {},
    booking:{},
    loading: false,
    data: null,
    error: null,
  },
  (builder) => {
    // slide
    builder
      .addCase("getSlideRequest", (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase("getSlideSuccess", (state, action) => {
        state.loading = false;
        state.slide = action.payload;
        state.error = null;
      })
      .addCase("getSlideFail", (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      });


    // change password
    builder
      .addCase("putChangePasswordRequest", (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase("putChangePasswordSuccess", (state, action) => {
        state.loading = false;
        state.messChangePass = action.payloadMessChangePass;
        state.error = null;
      })
      .addCase("putChangePasswordFail", (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      });


    // load profile of user
    builder
      .addCase("getProfileRequest", (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase("getProfileSuccess", (state, action) => {
        state.loading = false
        state.myProfile = action.payloadProfile
        state.error = null;
      })
      .addCase("getProfileFail", (state, action) => {
        state.loading = false
        state.data = null;
        state.error = action.payload
      });


      // Edit profile of user
    builder
    .addCase("editProfileRequest", (state) => {
      state.loading = true
      state.error = null;
    })
    .addCase("editProfileSuccess", (state, action) => {
      state.loading = false
      state.message = action.payloadEditProfile
      state.error = null;
    })
    .addCase("editProfileFail", (state, action) => {
      state.loading = false
      state.data = null;
      state.error = action.payload
    });


      // Add info onboarding
      builder
      .addCase("addInfoRequest", (state) => {
        state.loading = true
        state.error = null;
      })
      .addCase("addInfoSuccess", (state, action) => {
        state.loading = false
        state.messAddInfo = action.payloadAddInfo
        state.error = null;
      })
      .addCase("addInfoFail", (state, action) => {
        state.loading = false
        state.data = null;
        state.error = action.payload
      });

      // Paypal
      builder
      .addCase("addPaypalRequest", (state) => {
        state.loading = true
        state.error = null;
      })
      .addCase("addPaypalSuccess", (state, action) => {
        state.loading = false
        state.messAddPaypal = action.payloadAddPaypal
        state.error = null;
      })
      .addCase("addPaypalFail", (state, action) => {
        state.loading = false
        state.data = null;
        state.error = action.payload
      });

      // load list booking
    builder
    .addCase("getBookingRequest", (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase("getBookingSuccess", (state, action) => {
      state.loading = false;
      state.booking = action.payloadBooking;
      state.error = null;
    })
    .addCase("getBookingFail", (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    });
  }
);
