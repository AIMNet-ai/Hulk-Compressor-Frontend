import React from "react";
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
