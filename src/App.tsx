import { Routes, Route } from "react-router-dom";


import SurveySection from "./components/SurveySection";
import CustomerSurvey from "./components/CustomerSurvey";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Layout from "./Layout";
import Home from "./components/Home";

import Contactus from "./components/Contactus";
import AnxietyLevel from "./components/AnxietyLevel";
import AppointmentPage from "./components/AppointmentPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="/" element={<SurveySection />} />
        <Route path="stress-survey" element={<CustomerSurvey />} />
        <Route path="anxiety-survey" element={<AnxietyLevel />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="appointment" element={<AppointmentPage />} />
      </Route>
    </Routes>
  );
}

export default App;
