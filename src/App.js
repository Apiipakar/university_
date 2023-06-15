import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Website/Pages/Home";

// main program function
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
