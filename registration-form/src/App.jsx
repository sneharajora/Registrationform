import Login from "./components/Login";

import "./index.css";
import Form from "./components/Form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Form />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
