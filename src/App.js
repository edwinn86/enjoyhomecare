import './App.css';
import 'bulma/css/bulma.min.css';
import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SeniorCarePage from './components/SeniorCare';
import PetCarePage from './components/PetCare';
import OddJobsPage from './components/OddJobs';
import PropertyManagementPage from './components/PropertyManagement';
import HomePage from './components/HomePage';
import ManagementPage from './components/ManagementPage';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function App() {





  return (

    <Router>
      <div id="test">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/senior-care" element={<SeniorCarePage typeOfCare = "Senior Care"/>} />
          <Route path="/pet-care" element={<PetCarePage typeOfCare = "Pet Care"/>} />
          <Route path="/odd-jobs" element={<OddJobsPage typeOfCare = "Odd Jobs"/>} />
          <Route path="/property-management" element={<PropertyManagementPage typeOfCare = "Property Management"/>} />
          <Route path="/management-login" element={<ManagementPage />} />
        </Routes>
      </div>
    </Router>

  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
