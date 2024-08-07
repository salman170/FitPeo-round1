import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./screens/dashboard/Dashboard";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
