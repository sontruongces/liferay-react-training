import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { formData } from "../../redux/selector";
import { BENEFICIARY_PROFILE, relativeOptions } from "../../constants";
import { Input, Form, MuiSelect, useForm } from "../controls";

export default function BeneficiaryForm() {
  const initialValue = useSelector(formData);
  const { values, onHandleValueChange } = useForm(initialValue);
  return (
    <Form>
      <h1>{BENEFICIARY_PROFILE}</h1>
      <Grid>
        <Input
          value={values.beneficiaryEmail}
          required
          onChange={onHandleValueChange}
          type="text"
          name="beneficiaryEmail"
          label="Email"
          placeholder="Enter beneficiary email"
        />
        <Input
          value={values.beneficiaryFirstName}
          required
          onChange={onHandleValueChange}
          type="text"
          name="beneficiaryFirstName"
          label="First Name"
          placeholder="Enter beneficiary first name"
        />
        <Input
          value={values.beneficiaryMiddleName}
          onChange={onHandleValueChange}
          type="text"
          name="beneficiaryMiddleName"
          label="Middle Name"
          placeholder="Enter beneficiary middle name"
        />
        <Input
          value={values.beneficiaryLastName}
          onChange={onHandleValueChange}
          type="text"
          required
          name="beneficiaryLastName"
          label="Last Name"
          placeholder="Enter beneficiary last name"
        />
        <Input
          value={values.beneficiaryBirthday}
          onChange={onHandleValueChange}
          type="date"
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
          type="text"
          name="beneficiaryPhone"
          label="Phone"
          placeholder="Enter phone number"
        />
        <MuiSelect
          value={values.relationship}
          onChange={onHandleValueChange}
          required
          type="text"
          name="relationship"
          label="Relationship"
          options={relativeOptions}
        />
      </Grid>
    </Form>
  );
}
