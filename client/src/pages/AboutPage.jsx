import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroSecond from "../components/HomePage/HeroSecond";
import Packages from "../components/Packages";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import BusinessNumbers from "../components/BusinessNumbers";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Hero title="About" />
      <HeroSecond />
      <Packages />
      <Services />
      <Testimonials />
      <BusinessNumbers />
      <Gallery />
      <Footer />
    </>
  );
};

export default AboutPage;
