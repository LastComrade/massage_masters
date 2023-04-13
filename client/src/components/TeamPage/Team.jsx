import React from "react";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <section className="py-5 ftco0-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-12 heading-section text-center ftco0-animate">
            <h3 className="subheading">Specialists</h3>
            <h2 className="mb-1">Meet Our Spa Specialists</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 d-flex">
            <div className="coach align-items-stretch">
              <div
                className="img"
                style={{ backgroundImage: "url(images/trainer-1.jpg)" }}
              ></div>
              <div className="text bg-white p-4 ftco0-animate">
                <span className="subheading">Owner / Head Coach</span>
                <h3>
                  <Link to="/">Elizabeth Nelson</Link>
                </h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <ul className="ftco-social-media d-flex mt-4">
                  <li className="ftco0-animate">
                    <Link
                      to="/"
                      className="mr-2 d-flex justify-content-center align-items-center"
                    >
                      <span className="icon-twitter"></span>
                    </Link>
                  </li>
                  <li className="ftco0-animate">
                    <Link
                      to="/"
                      className="mr-2 d-flex justify-content-center align-items-center"
                    >
                      <span className="icon-facebook"></span>
                    </Link>
                  </li>
                  <li className="ftco0-animate">
                    <Link
                      to="/"
                      className="mr-2 d-flex justify-content-center align-items-center"
                    >
                      <span className="icon-instagram"></span>
                    </Link>
                  </li>
                </ul>
                <p></p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex">
            <div className="coach align-items-stretch">
              <div
                className="img"
                style={{ backgroundImage: "url(images/trainer-2.jpg)" }}
              ></div>
              <div className="text bg-white p-4 ftco0-animate">
                <span className="subheading">Owner / Head Coach</span>
                <h3>
                  <Link to="/">Scarlett Torres</Link>
                </h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <ul className="ftco-social-media d-flex mt-4">
                  <li className="ftco0-animate">
                    <Link
                      to="/"
                      className="mr-2 d-flex justify-content-center align-items-center"
                    >
                      <span className="icon-twitter"></span>
                    </Link>
                  </li>
                  <li className="ftco0-animate">
                    <Link
                      to="/"
                      className="mr-2 d-flex justify-content-center align-items-center"
                    >
                      <span className="icon-facebook"></span>
                    </Link>
                  </li>
                  <li className="ftco0-animate">
                    <Link
                      to="/"
                      className="mr-2 d-flex justify-content-center align-items-center"
                    >
                      <span className="icon-instagram"></span>
                    </Link>
                  </li>
                </ul>
                <p></p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex">
            <div className="coach align-items-stretch">
              <div
                className="img"
                style={{ backgroundImage: "url(images/trainer-3.jpg)" }}
              ></div>
              <div className="text bg-white p-4 ftco0-animate">
                <span className="subheading">Owner / Head Coach</span>
                <h3>
                  <Link to="/">Victoria Wright</Link>
                </h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <ul className="ftco-social-media d-flex mt-4">
                  <li className="ftco0-animate">
                    <Link
                      to="/"
                      className="mr-2 d-flex justify-content-center align-items-center"
                    >
                      <span className="icon-twitter"></span>
                    </Link>
                  </li>
                  <li className="ftco0-animate">
                    <Link
                      to="/"
                      className="mr-2 d-flex justify-content-center align-items-center"
                    >
                      <span className="icon-facebook"></span>
                    </Link>
                  </li>
                  <li className="ftco0-animate">
                    <Link
                      to="/"
                      className="mr-2 d-flex justify-content-center align-items-center"
                    >
                      <span className="icon-instagram"></span>
                    </Link>
                  </li>
                </ul>
                <p></p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex">
            <div className="coach align-items-stretch">
              <div
                className="img"
                style={{ backgroundImage: "url(images/trainer-4.jpg)" }}
              ></div>
              <div className="text bg-white p-4 ftco0-animate">
                <span className="subheading">Owner / Head Coach</span>
                <h3>
                  <Link to="/">Stella Perry</Link>
                </h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <ul className="ftco-social-media d-flex mt-4">
                  <li className="ftco0-animate">
                    <Link
                      to="/"
                      className="mr-2 d-flex justify-content-center align-items-center"
                    >
                      <span className="icon-twitter"></span>
                    </Link>
                  </li>
                  <li className="ftco0-animate">
                    <Link
                      to="/"
                      className="mr-2 d-flex justify-content-center align-items-center"
                    >
                      <span className="icon-facebook"></span>
                    </Link>
                  </li>
                  <li className="ftco0-animate">
                    <Link
                      to="/"
                      className="mr-2 d-flex justify-content-center align-items-center"
                    >
                      <span className="icon-instagram"></span>
                    </Link>
                  </li>
                </ul>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
