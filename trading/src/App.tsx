import React from "react";
import "./App.css";
import Dashboard from "./components/layout/Dashboard";

function App({ content }: { content: string }) {
  return (
    <div className="App">
      <Dashboard />
      {content}
    </div>
  );
}

export default App;
