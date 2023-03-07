import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import { Footer } from "./components/Footer/Footer";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { Header } from "./components/Header/Header";
import { CartPage } from "./components/Cart/CartPage";
import { Home } from "./components/Home/Home";
import { Phones } from "./components/Phones/Phones";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";
import "./Test.scss";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/phones" element={<Phones />} />
        <Route
          path="/tablets"
          element={
            <>
              <h1 className="h1">Tablets</h1>
            </>
          }
        />

        <Route path="/cart" element={<CartPage />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <div className="product-detail">
        <ProductDetail />
      </div>

      <Footer />
    </div>
  );
}

export default App;
