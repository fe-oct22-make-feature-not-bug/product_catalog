import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import { Footer } from "./components/Footer/Footer";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { CartPage } from "./components/Cart/CartPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home page!</h1>} />

        <Route path="/phones" element={<h1>Mobile phones!</h1>} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Card />
      <Footer />
    </div>
  );
}

export default App;
