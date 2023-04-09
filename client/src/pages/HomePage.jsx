import React from "react";
import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import HeroSecond from "../components/Home/HeroSecond";
import Packages from "../components/Home/Packages";
import Services from "../components/Home/Services";
import Prices from "../components/Home/Prices";
import PackagePrice from "../components/Home/PackagePrice";
import Testimonials from "../components/Home/Testimonials";
import BusinessNumbers from "../components/Home/BusinessNumbers";
import BlogPosts from "../components/Home/BlogPosts";
import Gallery from "../components/Home/Gallery";
import Footer from "../components/Home/Footer";

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
