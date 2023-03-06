import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import { Footer } from "./components/Footer/Footer";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home page!</h1>} />

        <Route path="/phones" element={<h1>Mobile phones!</h1>} />

        <Route path="*" element={< PageNotFound />} />
      </Routes>
      <Card />

      < ProductDetail />

      <Footer />
    </div>
  );
}

export default App;
