import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AppHeader } from "./pages/AppHeader";
import { ThreadListPage } from "./pages/ThreadListPage/ThreadListPage";
import { CreateThreadPage } from "./pages/CreateThreadPage/CreateThreadPage";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <AppHeader />
      </div>
      <div className="Page">
        <Routes>
          <Route path="/" element={<ThreadListPage />} />
          <Route path="/thread/new" element={<CreateThreadPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
