import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./reset.css";

import Header from "./components/layout/header/header";
import Router from "./routes";
import Footer from "./components/layout/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
