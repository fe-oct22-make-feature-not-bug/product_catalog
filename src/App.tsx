import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import { Footer } from "./components/Footer/Footer";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { Card } from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Home page!</h1>} />

        <Route path="/phones" element={<h1>Mobile phones!</h1>} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Card />
      <Footer />
    </div>
  );
}

export default App;
