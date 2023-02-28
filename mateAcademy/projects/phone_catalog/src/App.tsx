import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import './styles/index.scss'
import { Footer } from './components/Footer/Footer';
import { PageNotFound } from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<h1>Home page!</h1>}
        /> 

        <Route
          path="/phones"
          element={<h1>Mobile phones!</h1>}
        />

        <Route
          path="*"
          element={< PageNotFound />}
        />
      </Routes>

     < Footer />
    </div>
  );
}

export default App;
