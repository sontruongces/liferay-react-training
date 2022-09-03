import { Grid } from "@mui/material";
import { INSURANCE_PROFILE } from "../constants";
import { Input, Form, useForm } from "../controls";

const initialValue = {
  email: "",
  firstName: "",
  middleName: "",
  lastName: "",
  birthday: "",
  idCard: "",
  phone: "",
  monthlySaving: 0
};

export default function InsuranceForm() {
  const { values, onHandleValueChange } = useForm(initialValue);
  return (
    <Form>
      <h1>{INSURANCE_PROFILE}</h1>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Input
            value={values.email}
            onChange={onHandleValueChange}
            required
            name="email"
            label="Email"
            placeholder="Enter your email"
          />
          <Input
            value={values.firstName}
            onChange={onHandleValueChange}
            required
            name="firstName"
            label="First Name"
            placeholder="Enter your first name"
          />
          <Input
            value={values.middleName}
            onChange={onHandleValueChange}
            name="middleName"
            label="Middle Name"
            placeholder="Enter your middle name"
          />
          <Input
            value={values.lastName}
            onChange={onHandleValueChange}
            required
            name="lastName"
            label="Last Name"
            placeholder="Enter your last name"
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            value={values.birthday}
            onChange={onHandleValueChange}
            required
            name="birthday"
            label="Birthday"
            placeholder="Enter your birthday"
          />
          <Input
            value={values.idCard}
            onChange={onHandleValueChange}
            required
            name="idCard"
            label="ID Card"
            placeholder="Enter your ID card"
          />
          <Input
            value={values.phone}
            onChange={onHandleValueChange}
            required
            name="phone"
            label="Phone"
            placeholder="Enter phone number"
          />
          <Input
            value={values.monthlySaving}
            onChange={onHandleValueChange}
            required
            name="monthlySaving"
            label="Monthly Savings"
            placeholder="Enter month savings"
          />
        </Grid>
      </Grid>
    </Form>
  );
}
