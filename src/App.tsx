import { Routes, Route } from "react-router-dom";
import { CreateContextProvider } from "./context/CreateContextProvider";
import "./styles/index.scss";
// import { useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { Header } from "./components/Header/Header";
import { CartPage } from "./components/Cart/CartPage/index";
import { Home } from "./components/Home/Home";
import { Phones } from "./components/Phones/Phones";
import "./Test.scss";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";
import { Tablets } from "./components/Tablets/Tablets";
import { Accessories } from "./components/Accessories/Accessories";

function App() {
  return (
    <CreateContextProvider>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phones" element={<Phones />} />

          <Route path="/phones-info/:phoneId" element={<ProductDetail />} />

          <Route path="/tablets" element={<Tablets />} />

          <Route path="/accessories" element={<Accessories />} />

          <Route path="/cart" element={<CartPage />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </div>
    </CreateContextProvider>
  );
}

export default App;
