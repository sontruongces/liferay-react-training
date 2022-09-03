import { Grid } from "@mui/material";
import { BENEFICIARY_PROFILE, relativeOptions } from "../constants";
import { Input, Form, MuiSelect, useForm } from "../controls";

const initialValue = {
  beneficiaryEmail: "",
  beneficiaryFirstName: "",
  beneficiaryMiddleName: "",
  beneficiaryLastName: "",
  beneficiaryBirthday: "",
  beneficiaryIdCard: "",
  beneficiaryPhone: "",
  relationship: 1
};

export default function BeneficiaryForm() {
  const { values, onHandleValueChange } = useForm(initialValue);
  return (
    <Form>
      <h1>{BENEFICIARY_PROFILE}</h1>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Input
            value={values.beneficiaryEmail}
            required
            onChange={onHandleValueChange}
            name="beneficiaryEmail"
            label="Email"
            placeholder="Enter beneficiary email"
          />
          <Input
            value={values.beneficiaryFirstName}
            required
            onChange={onHandleValueChange}
            name="beneficiaryFirstName"
            label="First Name"
            placeholder="Enter beneficiary first name"
          />
          <Input
            value={values.beneficiaryMiddleName}
            onChange={onHandleValueChange}
            name="beneficiaryMiddleName"
            label="Middle Name"
            placeholder="Enter beneficiary middle name"
          />
          <Input
            value={values.beneficiaryLastName}
            onChange={onHandleValueChange}
            required
            name="beneficiaryLastName"
            label="Last Name"
            placeholder="Enter beneficiary last name"
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            value={values.beneficiaryBirthday}
            onChange={onHandleValueChange}
            required
            name="beneficiaryBirthday"
            label="Birthday"
            placeholder="Enter beneficiary birthday"
          />
          <Input
            value={values.beneficiaryIdCard}
            onChange={onHandleValueChange}
            required
            name="beneficiaryIdCard"
            label="ID Card"
            placeholder="Enter beneficiary ID card"
          />
          <Input
            value={values.beneficiaryPhone}
            onChange={onHandleValueChange}
            required
            name="beneficiaryPhone"
            label="Phone"
            placeholder="Enter phone number"
          />
          <MuiSelect
            value={values.relationship}
            onChange={onHandleValueChange}
            required
            name="relationship"
            label="Relationship"
            options={relativeOptions}
          />
        </Grid>
      </Grid>
    </Form>
  );
}
