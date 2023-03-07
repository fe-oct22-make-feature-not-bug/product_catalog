import { Routes, Route } from "react-router-dom";
import "./styles/index.scss";
// import { useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Phones } from "./components/Phones/Phones";
import "./Test.scss";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";

function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phones" element={<Phones />} />

        <Route path="/phones/:phoneId" element={<ProductDetail />} />

        <Route
          path="/tablets"
          element={
            <>
              <h1 className="h1">Tablets</h1>
            </>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
