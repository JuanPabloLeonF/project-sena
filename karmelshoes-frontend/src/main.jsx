import React from "react";
import ReactDOM from "react-dom/client";
import { SenaApp } from "./pages/SenaApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SenaApp></SenaApp>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
