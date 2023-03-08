import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Principal from "./pages/Principal";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Principal />} />
    </Routes>
  </BrowserRouter>
);
