import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./screens/dashboard/Dashboard";
import { Toaster } from "react-hot-toast";
import PageNotFound from "./screens/other/PageNotfound";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
