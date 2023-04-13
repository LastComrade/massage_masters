import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Team from "../components/TeamPage/Team";
import Footer from "../components/Footer";

const TeamPage = () => {
  return (
    <>
      <Navbar />
      <Hero title="Team" />
      <Team />
      <Footer />
    </>
  );
};

export default TeamPage;
