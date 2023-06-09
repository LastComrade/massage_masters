import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/HomePage/Hero";
import HeroSecond from "../components/HomePage/HeroSecond";
import Packages from "../components/Packages";
import Services from "../components/Services";
import Prices from "../components/Prices";
import PackagePrice from "../components/PackagePrice";
import Testimonials from "../components/Testimonials";
import BusinessNumbers from "../components/BusinessNumbers";
import BlogPosts from "../components/BlogPosts";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroSecond />
      <Packages />
      <Services />
      <Prices />
      <PackagePrice />
      <Testimonials />
      <BusinessNumbers />
      <BlogPosts />
      <Gallery />
      <Footer />
    </>
  );
};

export default HomePage;
