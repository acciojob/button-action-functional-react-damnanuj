import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [para, setPara] = useState("")

  return (
    <div id="main">
      <p id="para">{para}</p>
        <button id="click" onClick={()=>setPara("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.")}>click</button>
    </div>
  );
}


export default App;
