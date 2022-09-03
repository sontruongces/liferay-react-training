import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentForm: 0
};

const insuranceProfileSlice = createSlice({
  name: "insuranceProfile",
  initialState,
  reducers: {
    goNextForm: (state) => {
      state.currentForm++;
    },
    goPreForm: (state) => {
      state.currentForm--;
    }
  }
});

const { actions, reducer: insuranceProfileReducer } = insuranceProfileSlice;
export const { goNextForm, goPreForm } = actions;
export default insuranceProfileReducer;
