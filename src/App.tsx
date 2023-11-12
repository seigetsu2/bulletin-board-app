import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AppHeader } from "./pages/AppHeader";
import { ThreadListPage } from "./pages/ThreadListPage";

function App() {
  return (
    <div className="App">
      <AppHeader />
    </div>
  );
}

export default App;
