import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from './pages/dashboard/Dashboard';
import Appointment_tab from "./pages/appointments_list/Appointment_tab";
import Login from "./pages/login/Login";
import './App.css';
import React from "react";

function App() {

  const [current, setCurrent] = React.useState('dashboard')

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard current={current} setCurrent={setCurrent} />} />
        <Route path="/appointment" element={<Appointment_tab current={current} setCurrent={setCurrent} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
