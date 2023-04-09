import React from "react";

const BusinessNumbers = () => {
  return (
    <section
      className="ftcoo-counter img py-5"
      id="section-counter"
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftcoo-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="2560">
                      0
                    </strong>
                    <span>Happy Customers</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftcoo-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="60">
                      0
                    </strong>
                    <span>Treatments</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftcoo-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="50">
                      0
                    </strong>
                    <span>Years of Experience</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftcoo-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="100">
                      0
                    </strong>
                    <span>Lesson Conducted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessNumbers;
