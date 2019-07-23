import React from "react";
import "./App.css";
import sampledata from "./sampledata.json";
import SampleTable from "./SampleTable";

function App() {
  return (
    <div className="App">
      <SampleTable sampleData={sampledata} />
    </div>
  );
}

export default App;
