import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import Routes from "./routes";

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container py-3'>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
/*

    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>{count}</h1>
        <button
          onClick={() => {
            setcount(count + 1);
          }}>
          Add One
        </button>
      </header>
    </div>

*/
