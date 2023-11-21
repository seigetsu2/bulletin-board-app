import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AppHeader } from "./pages/AppHeader";
import { ThreadListPage } from "./pages/ThreadListPage/ThreadListPage";
import { CreateThreadPage } from "./pages/CreateThreadPage/CreateThreadPage";
import { useThreadList } from "./hooks/useThreadList";
import { PostListPage } from "./pages/PostListPage/PostListPage";

function App() {
  const [threadList, refreshThreadList] = useThreadList();
  return (
    <div className="App">
      <div className="Header">
        <AppHeader />
      </div>
      <div className="Page">
        <Routes>
          <Route
            path="/"
            element={<ThreadListPage threadList={threadList} />}
          />
          <Route
            path="/thread/new"
            element={<CreateThreadPage refreshThreadList={refreshThreadList} />}
          />
          <Route path="/thread/:threadId" element={<PostListPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
