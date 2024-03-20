import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [flag, setFlag] = useState(false)
  const msg = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy."
  return (
    <div id="main">
      {flag && <p id="para">{msg}</p>}
        <button id="click" onClick={()=>setFlag(true)}>click</button>
    </div>
  );
}


export default App;
