import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
    <div style={{ width: "100vw", overflowX: "hidden", maxWidth:"100%" }}>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      {/* <div className="content">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        </div> */}
      <Footer />
        </div>
    </>
  );
};

export default App;
