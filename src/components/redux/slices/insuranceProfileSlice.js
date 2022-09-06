import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentForm: 0,
  data: {
    email: "",
    firstName: "",
    middleName: "",
    lastName: "",
    birthday: "",
    idCard: "",
    phone: "",
    monthlySaving: 0,
    beneficiaryEmail: "",
    beneficiaryFirstName: "",
    beneficiaryMiddleName: "",
    beneficiaryLastName: "",
    beneficiaryBirthday: "",
    beneficiaryIdCard: "",
    beneficiaryPhone: "",
    relationship: 1,
    agreement: false
  },
  errors: {
    email: "",
    firstName: "",
    middleName: "",
    lastName: "",
    birthday: "",
    idCard: "",
    phone: "",
    monthlySaving: "",
    beneficiaryEmail: "",
    beneficiaryFirstName: "",
    beneficiaryMiddleName: "",
    beneficiaryLastName: "",
    beneficiaryBirthday: "",
    beneficiaryIdCard: "",
    beneficiaryPhone: "",
    relationship: "",
    agreement: ""
  }
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
    },
    updateData: (state, action) => {
      const { fieldName, value } = action.payload;
      state.data[fieldName] = value;
    },
    updateError: (state, action) => {
      const errors = action.payload;
      errors.forEach((e) => {
        state.errors[e.path] = e.message;
      });
    },
    resetErrors: (state) => {
      state.errors = initialState.errors;
    }
  }
});

const { actions, reducer: insuranceProfileReducer } = insuranceProfileSlice;
export const { goNextForm, goPreForm, updateData, updateError, resetErrors } =
  actions;
export default insuranceProfileReducer;
