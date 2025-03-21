import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Residencies from "../Residencies/Residencies";
import Companies from "../companies/Companies";
import Value from "../Value/Value";
import Contact from "../contact/Contact";
import Home from "./Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/residencies" element={<Residencies />} />
        <Route path="companies" element={<Companies />} />
        <Route path="Value" element={<Value />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
