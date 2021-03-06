import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SimpleStore from "./components/SimpleStore";
import Wallet from "./components/Wallet/Wallet";
import { Route, Routes } from "react-router-dom";
import Providers from "./components/Providers/Providers";
import HomePage from "./components/Home/HomePage";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="wallet" element={<Wallet />}></Route>
          <Route path="providers" element={<Providers />}></Route>
          <Route path="" element={<HomePage />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
