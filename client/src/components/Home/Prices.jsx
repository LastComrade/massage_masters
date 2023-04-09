import React from "react";

const Prices = () => {
  return (
    <section className="ftcoo-section py-5">
      <div className="container-fluid px-md-5">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-12 heading-section ftcoo-animate text-center">
            <h3 className="subheading">Services</h3>
            <h2 className="mb-1">Treatments</h2>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="row no-gutters">
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="treatment w-100 text-center ftcoo-animate border border-right-0 border-bottom-0 p-3 py-4">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="flaticon-candle"></span>
                  </div>
                  <div className="text mt-2">
                    <h3>Salt &amp; Aroma</h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="treatment w-100 text-center ftcoo-animate border border-bottom-0 p-3 py-4">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="flaticon-spa-1"></span>
                  </div>
                  <div className="text mt-2">
                    <h3>Hydro</h3>
                    <p>A small river named Duden flows.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="treatment w-100 text-center ftcoo-animate border border-right-0 p-3 py-4">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="flaticon-stone"></span>
                  </div>
                  <div className="text mt-2">
                    <h3>Hot Stone</h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="treatment w-100 text-center ftcoo-animate border p-3 py-4">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="flaticon-lotus"></span>
                  </div>
                  <div className="text mt-2">
                    <h3>Aroma</h3>
                    <p>A small river named Duden flows.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-flex align-items-stretch">
            <div
              id="accordion"
              className="myaccordion w-100 text-center py-5 px-1 px-md-4"
            >
              <div>
                <h3>Prices</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia
                </p>
              </div>
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button
                      className="d-flex align-items-center justify-content-between btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Spa Therapies
                      <i className="fa" aria-hidden="true"></i>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body text-left">
                    <ul>
                      <li className="d-flex">
                        <span>Face Treatments</span>
                        <span>40 min.</span>
                        <span>$10</span>
                      </li>
                      <li className="d-flex">
                        <span>Nail Treatments</span>
                        <span>30 min.</span>
                        <span>$20</span>
                      </li>
                      <li className="d-flex">
                        <span>Medical Treatments</span>
                        <span>60 min.</span>
                        <span>$10</span>
                      </li>
                      <li className="d-flex">
                        <span>Hair Treatments</span>
                        <span>30 min.</span>
                        <span>$30</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <button
                      className="d-flex align-items-center justify-content-between btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Massage Therapies
                      <i className="fa" aria-hidden="true"></i>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body text-left">
                    <ul>
                      <li className="d-flex">
                        <span>Face Treatments</span>
                        <span>40 min.</span>
                        <span>$10</span>
                      </li>
                      <li className="d-flex">
                        <span>Nail Treatments</span>
                        <span>30 min.</span>
                        <span>$20</span>
                      </li>
                      <li className="d-flex">
                        <span>Medical Treatments</span>
                        <span>60 min.</span>
                        <span>$10</span>
                      </li>
                      <li className="d-flex">
                        <span>Hair Treatments</span>
                        <span>30 min.</span>
                        <span>$30</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="row no-gutters">
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="treatment w-100 text-center ftcoo-animate border border-right-0 border-bottom-0 p-3 py-4">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="flaticon-beauty-treatment"></span>
                  </div>
                  <div className="text mt-2">
                    <h3>Relaxation</h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="treatment w-100 text-center ftcoo-animate border border-bottom-0 p-3 py-4">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="flaticon-relax"></span>
                  </div>
                  <div className="text mt-2">
                    <h3>Athlete</h3>
                    <p>A small river named Duden flows.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="treatment w-100 text-center ftcoo-animate border border-right-0 p-3 py-4">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="flaticon-massage"></span>
                  </div>
                  <div className="text mt-2">
                    <h3>Thai</h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="treatment w-100 text-center ftcoo-animate border p-3 py-4">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="flaticon-rose"></span>
                  </div>
                  <div className="text mt-2">
                    <h3>Rose</h3>
                    <p>A small river named Duden flows.</p>
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

export default Prices;
