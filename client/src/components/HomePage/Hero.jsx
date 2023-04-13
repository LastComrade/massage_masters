import React from "react";

const Hero = () => {
  return (
    <section
      className="ftco-section hero-wrap"
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
          <div className="col-md-10 ftco0-animate text-center">
            <div className="icon">
              <span className="flaticon-lotus"></span>
            </div>
            <h1>Spa &amp; Beauty Center</h1>
            <div className="row justify-content-center">
              <div className="col-md-7 mb-3">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <p>
              <a
                href="https://www.linkedin.com/in/konark-lohat/"
                className="btn btn-primary p-3 px-5 py-4 mr-md-2"
              >
                Get in Touch
              </a>
              <a
                href="https://www.linkedin.com/in/konark-lohat/"
                className="btn btn-outline-primary p-3 px-5 py-4 ml-md-2"
              >
                Contact
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
