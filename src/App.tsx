import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import { Footer } from "./components/Footer/Footer";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";

function App() {

  // useEffect(() => {
  //   if (user) {
  //     getTodos()
  //       .then(setTodos)
  //       .catch(() => {
  //         setTodos([]);
  //         showError(ErorrMessage.ON_UPLOAD);
  //       });
  //   }

  //   return () => {
  //     window.clearInterval(errorTimer);
  //   };
  // }, [showError, todos.length]);

  return (
    <div className="App">
      <Header />
      <h1 className="h1">Welcome to Nice Gadgets store!</h1>

      <Routes>
        <Route path="/" element={<Home />} />

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
