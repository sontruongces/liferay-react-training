import * as yup from "yup";

export const insuranceFormSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  firstName: yup.string().required("First name is required"),
  middleName: yup.string(),
  lastName: yup.string().required("Last name is required"),
  birthday: yup.string().required("Birthday is required"),
  idCard: yup
    .string()
    .matches(/^[0-9]{10}$/, "Id card must be exactly 10 digits"),
  phone: yup.string().required("Phone is required"),
  monthlySaving: yup.number().required("Month savings is required")
});

export const beneficiaryFormSchema = yup.object().shape({
  beneficiaryEmail: yup.string().email().required("Email is required"),
  beneficiaryFirstName: yup.string().required("First name is required"),
  beneficiaryMiddleName: yup.string(),
  beneficiaryLastName: yup.string().required("Last name is required"),
  beneficiaryBirthday: yup.string().required("Birthday is required"),
  beneficiaryIdCard: yup
    .string()
    .matches(/^[0-9]{10}$/, "Id card must be exactly 10 digits"),
  beneficiaryPhone: yup.string().required("Phone is required"),
  relationship: yup.string().required()
});
