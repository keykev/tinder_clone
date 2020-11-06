import React from "react";
import './App.css';
import Header from "./components/Header"
import TinderCards from "./components/TinderCards"
import SwipeButtons from "./components/SwipeButtons"

function App() {
  return (
    <div className="app">
      
      {/* Header */}
      <Header />
      {/* Tinder card */}
      <TinderCards />
      {/* Swipe buttons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
