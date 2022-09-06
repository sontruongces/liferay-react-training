import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { ContractForm, InsuranceForm, BeneficiaryForm } from "./index";
import { getCurrentForm } from "../../redux/selector";

const getForm = () => {
  const currentForm = useSelector(getCurrentForm);
  switch (currentForm) {
    case 0:
      return <InsuranceForm />;
    case 1:
      return <BeneficiaryForm />;
    case 2:
      return <ContractForm />;
    default:
      return <InsuranceForm />;
  }
};

function FormWrapper() {
  return (
    <div className="app">
      <Header />
      <Box sx={{ marginTop: "2rem", marginBottom: "5rem" }}>{getForm()}</Box>
      <Footer />
    </div>
  );
}

export default FormWrapper;
