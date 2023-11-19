import React from "react";
import ReactDOM from "react-dom/client";
import {Lady} from "/src/pages/Lady";
import {Gentleman} from "/src/pages/Gentleman";
import {Child} from "/src/pages/Child";
import { SenaApp } from "./pages/SenaApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WhoWeAre } from "./pages/WhoWeAre";
import { Registration } from "./pages/Registration";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SenaApp></SenaApp>}></Route>
        <Route path="/whoWeAre" element={<WhoWeAre></WhoWeAre>}></Route>
        <Route path="/lady" element={<Lady></Lady>}></Route>
        <Route path="/gentleman" element={<Gentleman></Gentleman>}></Route>
        <Route path="/child" element={<Child></Child>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
