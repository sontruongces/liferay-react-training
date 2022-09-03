import "./App.css";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {
  ContactForm,
  InsuranceForm,
  BeneficiaryForm
} from "./components/forms";
import { getCurrentForm } from "./components/redux/selector";

const getForm = () => {
  const currentForm = useSelector(getCurrentForm);
  switch (currentForm) {
    case 0:
      return <InsuranceForm />;
    case 1:
      return <BeneficiaryForm />;
    case 2:
      return <ContactForm />;
    default:
      return <InsuranceForm />;
  }
};

function App() {
  return (
    <div className="app">
      <Header />
      <Box sx={{ marginTop: "2rem", marginBottom: "5rem" }}>{getForm()}</Box>
      <Footer />
    </div>
  );
}

export default App;
