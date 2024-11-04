import { Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Landing from "./components/Landing";
import Testimonials from "./components/Testimonials";
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import SurveySection from "./components/SurveySection";
import CustomerSurvey from "./components/CustomerSurvey";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Layout from "./Layout";
import Home from "./components/Home";

import Contactus from "./components/Contactus";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="/" element={<SurveySection />} />
        <Route path="/survey" element={<CustomerSurvey />} />
        <Route path="contactus" element={<Contactus />} />
      </Route>
    </Routes>
  );
}

export default App;
