import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import AdsTxt from "./pages/AdsTxt";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/app-ads.txt" element={<AdsTxt />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
