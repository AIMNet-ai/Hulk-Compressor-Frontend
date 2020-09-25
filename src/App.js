import React, { useState } from "react";
import logo from "./assets/hulk.png";

function App() {
  const [count, setcount] = useState(0);
  return (
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
  );
}

export default App;
