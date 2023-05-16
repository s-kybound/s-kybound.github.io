import React from "react";
import PageNotFound from "./pages/PageNotFound";
import WorkInProgress from "./pages/WorkInProgress";
import "./assets/styles/App.css";
import { Route, Navigate, Routes, HashRouter } from "react-router-dom";

function App() {
  return (
    /** Add main bar here or smt */
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Navigate to="/wip" />} />
        <Route path="/work" element={<Navigate to="/wip" />} />
        <Route path="/blog" element={<Navigate to="/wip" />} />
        <Route path="/notes" element={<Navigate to="/wip" />} />
        <Route path="/files" element={<Navigate to="/wip" />} />
        <Route path="/contact" element={<Navigate to="/wip" />} />
        <Route path="/wip" element={<WorkInProgress />} />
        <Route path="/not-found" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
