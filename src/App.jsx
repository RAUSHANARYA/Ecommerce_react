import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Homes from "./pages/Homes";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>

      <Header />
       <Product/>

      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;