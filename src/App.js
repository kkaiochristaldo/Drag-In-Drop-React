import React from "react";
import "./App.css";
import DragNDrop from "./components/DragNDrop";

function App() {

  const data = [
    {title: "Group 1", items: ["1", "2", "3"]}
  ]

  return (
    <div className="App">
      <header className="App-header">
        
        <DragNDrop data={data} />
        
      </header>
    </div>
  );
}

export default App;
