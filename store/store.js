import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "../utils/reducers/UserReducer";
import persistReducer from "redux-persist/es/persistReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PartnerReducer } from "../utils/reducers/PartnerReducer";
import { otherReducer } from "../utils/reducers/otherReducers";
import { RefreshReducer } from "../utils/reducers/RefreshReducer";
import { LogoutReducer } from "../utils/reducers/LogoutReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ['user']
};

let rootReducer = combineReducers({
  user: UserReducer,
  partner: PartnerReducer,
  other: otherReducer,
  refresh: RefreshReducer,
  logout: LogoutReducer
});

// export const store = configureStore({
//   reducer: {
//     user: UserReducer,
//     partner: PartnerReducer
//   }
// })

let persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
});

export const server = "https://lover-seven.vercel.app/api/v1";
