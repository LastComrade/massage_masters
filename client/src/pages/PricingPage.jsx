import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Packages from "../components/Packages";
import PackagePrice from "../components/PackagePrice";
import Footer from "../components/Footer";

const PricingPage = () => {
  return (
    <>
      <Navbar />
      <Hero title="Pricing" />
      <Packages />
      <PackagePrice />
      <Footer />
    </>
  );
};

export default PricingPage;
