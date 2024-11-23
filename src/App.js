import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Need from "./components/Need";
import Idea from "./components/Idea"

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Need Analysis */}
      <Need />

      {/* Idea & Sketches */}
      <Idea />
      
    </div>
  );
}

export default App;
