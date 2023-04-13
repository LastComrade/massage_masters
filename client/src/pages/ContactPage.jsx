import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <Hero title="Contact Us" />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactPage;
