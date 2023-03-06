import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import { Footer } from "./components/Footer/Footer";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Phones } from "./components/Phones/Phones";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home /> } />
    
        <Route path="/phones" element={<Phones />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Card />

      <ProductDetail />

      <Footer />
    </div>
  );
}

export default App;
