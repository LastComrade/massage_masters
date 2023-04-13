import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Blogs from "../components/BlogsPage/Blogs";
import Footer from "../components/Footer";

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <Hero title="Blogs" />
      <Blogs />
      <Footer />
    </>
  );
};

export default BlogPage;
