import React, { useState } from "react";
import logo from "./assets/hulk.png";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import Routes from "./routes";

function App() {
  const [count, setcount] = useState(0);
  return (
    <Router>
      <Navbar />
      <Routes />
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
