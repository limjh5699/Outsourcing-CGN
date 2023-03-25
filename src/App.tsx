import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/layout/header/header";
import Router from "./routes";

import "./reset.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
