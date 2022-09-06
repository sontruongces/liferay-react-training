import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import insuranceProfileReducer from "../slices/insuranceProfileSlice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
});

const store = configureStore({
  reducer: {
    insuranceProfile: insuranceProfileReducer
  },
  middleware: customizedMiddleware
});

export default store;
