import React from "react";
import Hero from "../components/Hero";
import Services from "./Services";
import Portfolio from "./Portfolio";

const Home = ({ addToCart }) => {
  return (
    <>
      <Hero />
      {/* Pass addToCart to Services */}
      <Services addToCart={addToCart} />
      <Portfolio />
    </>
  );
};

export default Home;