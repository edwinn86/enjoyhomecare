import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SeniorCarePage from './components/SeniorCare';
import PetCarePage from './components/PetCare';
import OddJobsPage from './components/OddJobs';
import PropertyManagementPage from './components/PropertyManagement';
import HomePage from './components/HomePage';
import ManagementPage from './components/ManagementPage';

export default function App() {


  return (

    <Router>
      <div id="test">

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
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

