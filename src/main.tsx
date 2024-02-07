import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculator from "./Calculator.tsx";
import Bahay from "./Bahay.tsx";
import Jason from "./Jason.tsx";
import Shumi from "./Shumi.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import GameBoy from "./GameBoy.tsx";
import GameBoyOffScreen from "./GameBoyOffScreen.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameBoyOffScreen />}></Route>
        <Route path="/loading" element={<GameBoy />}></Route>
        <Route path="/home" element={<Bahay />}></Route>
        <Route path="/Calculator" element={<Calculator />}></Route>
        <Route path="/Jason" element={<Jason />}></Route>
        <Route path="/Shumi" element={<Shumi />}></Route>
        {/* <Route path="/Bahay" element={<Bahay/>}></Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
