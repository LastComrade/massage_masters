import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ title }) => {
  return (
    <section class="hero-wrap hero-wrap-2" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
          <div class="col-md-9 ftco0-animate text-center">
            <h1 class="mb-3 bread">{title}</h1>
            <p class="breadcrumbs">
              <span class="mr-2">
                <Link to="/">Home</Link>
              </span>{" "}
              <span>{title}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
