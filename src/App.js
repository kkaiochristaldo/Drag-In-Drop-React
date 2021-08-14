import React from "react";
import "./App.css";

function App() {

  const data = [
    {title: "Group 1", items: ["1", "2", "3"]},
    {title: "Group 2", items: ["4", "5"]}
  
  ]

  return (
    <div className="App">
      <header className="App-header">
        <div className="drag-n-drop">
        {
          data.map((grp, grpI) => (
            <div key={grp.title} className="dnd-group">
              {
                grp.items.map(((item, itemI) => (
                  <div key={item} className="dnd-item">
                    {item}
                  </div>
                )))
              }
            </div>
          ))
        }
        </div>
        
      </header>
    </div>
  );
}

export default App;
