import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Prices from "../components/Prices";
import Footer from "../components/Footer";

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <Hero title="Services" />
      <Prices />
      <Footer />
    </>
  );
};

export default ServicesPage;
