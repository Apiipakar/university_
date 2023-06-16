import React from "react";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import { Home } from "./Website/Pages/Home";

// main program function
export const App = () => {
  return (
    <BrowserRouter basename="/university_">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
