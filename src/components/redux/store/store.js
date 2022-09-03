import { configureStore } from "@reduxjs/toolkit";
import insuranceProfileReducer from "../slices/insuranceProfileSlice";

const store = configureStore({
  reducer: {
    insuranceProfile: insuranceProfileReducer
  }
});

export default store;
