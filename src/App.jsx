import React from "react";
import "./App.css"
import Header from "./components/Header";
import Notes from "./components/Notes";


const App = () => {
  return (
    <div className="main">
      <Header />
      <Notes />
    </div>
  );
};

export default App;
