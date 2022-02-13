import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SimpleStore from "./components/SimpleStore";
import Wallet from "./components/Wallet/Wallet";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wallet />
      </header>
    </div>
  );
}

export default App;
