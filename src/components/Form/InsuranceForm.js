import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { formData, getErrors } from "../../redux/selector";
import { INSURANCE_PROFILE } from "../../constants";
import { Input, Form, useForm } from "../controls";

export default function InsuranceForm() {
  const initialValue = useSelector(formData);
  const errors = useSelector(getErrors);
  const { values, onHandleValueChange } = useForm(initialValue);
  return (
    <Form>
      <h1>{INSURANCE_PROFILE}</h1>
      <Grid>
        <Input
          value={values.email}
          onChange={onHandleValueChange}
          required
          name="email"
          label="Email"
          placeholder="Enter your email"
          helperText={errors.email}
        />
        <Input
          value={values.firstName}
          onChange={onHandleValueChange}
          required
          type="text"
          name="firstName"
          label="First Name"
          placeholder="Enter your first name"
          helperText={errors.firstName}
        />
        <Input
          value={values.middleName}
          onChange={onHandleValueChange}
          type="text"
          name="middleName"
          label="Middle Name"
          placeholder="Enter your middle name"
          helperText={errors.middleName}
        />
        <Input
          value={values.lastName}
          onChange={onHandleValueChange}
          required
          type="text"
          name="lastName"
          label="Last Name"
          placeholder="Enter your last name"
          helperText={errors.lastName}
        />
        <Input
          value={values.birthday}
          onChange={onHandleValueChange}
          type="date"
          required
          name="birthday"
          label="Birthday"
          placeholder="Enter your birthday"
          helperText={errors.birthday}
        />
        <Input
          value={values.idCard}
          onChange={onHandleValueChange}
          required
          type="text"
          name="idCard"
          label="ID Card"
          placeholder="Enter your ID card"
          helperText={errors.idCard}
        />
        <Input
          value={values.phone}
          onChange={onHandleValueChange}
          required
          type="text"
          name="phone"
          label="Phone"
          placeholder="Enter phone number"
          helperText={errors.phone}
        />
        <Input
          value={values.monthlySaving}
          onChange={onHandleValueChange}
          required
          type="text"
          name="monthlySaving"
          label="Monthly Savings"
          placeholder="Enter month savings"
          helperText={errors.monthlySaving}
        />
      </Grid>
    </Form>
  );
}
