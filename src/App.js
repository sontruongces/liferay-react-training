import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FormWrapper from "./components/Form/FromWrapper";
import SuccessPage from "./pages";
import history from "./history";

function App() {
  return (
    <div className="app">
      <Router history={history}>
        <Routes>
          <Route path="/" exact element={<FormWrapper />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
