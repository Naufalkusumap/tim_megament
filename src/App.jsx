import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Approval from "./pages/approval";
import History from "./pages/history";
import Map from "./pages/map";
import Sidebar from "./components/sidebar";
import Login from "./pages/login";
import Form from "./pages/form";

function App() {
  return (
    <Router>
      <div className="flex">
        {/* <Sidebar /> */}
        <div className="flex-grow">
          <Routes>
            <Route path="/form" element={<Form />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/approval" element={<Approval />} />
            <Route path="/history" element={<History />} />
            <Route path="/map" element={<Map />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
