import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-4 d-flex ftco-animate-0">
            <div className="blog-entry justify-content-end">
              <Link
                to="/"
                className="block-20"
                style={{ backgroundImage: "url(images/image_1.jpg)" }}
              ></Link>
              <div className="text p-4 float-right d-block">
                <div className="d-flex align-items-center pt-2 mb-4">
                  <div className="one">
                    <span className="day">25</span>
                  </div>
                  <div className="two">
                    <span className="yr">2019</span>
                    <span className="mos">September</span>
                  </div>
                </div>
                <h3 className="heading mt-2">
                  <Link to="/">Is wellness the new luxury</Link>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate-0">
            <div className="blog-entry justify-content-end">
              <Link
                to="/"
                className="block-20"
                style={{ backgroundImage: "url('images/image_2.jpg')" }}
              ></Link>
              <div className="text p-4 float-right d-block">
                <div className="d-flex align-items-center pt-2 mb-4">
                  <div className="one">
                    <span className="day">25</span>
                  </div>
                  <div className="two">
                    <span className="yr">2019</span>
                    <span className="mos">September</span>
                  </div>
                </div>
                <h3 className="heading mt-2">
                  <Link to="/">Is wellness the new luxury</Link>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate-0">
            <div className="blog-entry">
              <Link
                to="/"
                className="block-20"
                style={{ backgroundImage: "url('images/image_3.jpg')" }}
              ></Link>
              <div className="text p-4 float-right d-block">
                <div className="d-flex align-items-center pt-2 mb-4">
                  <div className="one">
                    <span className="day">25</span>
                  </div>
                  <div className="two">
                    <span className="yr">2019</span>
                    <span className="mos">September</span>
                  </div>
                </div>
                <h3 className="heading mt-2">
                  <Link to="/">Is wellness the new luxury</Link>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate-0">
            <div className="blog-entry justify-content-end">
              <Link
                to="/"
                className="block-20"
                style={{ backgroundImage: "url('images/image_4.jpg')" }}
              ></Link>
              <div className="text p-4 float-right d-block">
                <div className="d-flex align-items-center pt-2 mb-4">
                  <div className="one">
                    <span className="day">25</span>
                  </div>
                  <div className="two">
                    <span className="yr">2019</span>
                    <span className="mos">September</span>
                  </div>
                </div>
                <h3 className="heading mt-2">
                  <Link to="/">Is wellness the new luxury</Link>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate-0">
            <div className="blog-entry justify-content-end">
              <Link
                to="/"
                className="block-20"
                style={{ backgroundImage: "url('images/image_5.jpg')" }}
              ></Link>
              <div className="text p-4 float-right d-block">
                <div className="d-flex align-items-center pt-2 mb-4">
                  <div className="one">
                    <span className="day">25</span>
                  </div>
                  <div className="two">
                    <span className="yr">2019</span>
                    <span className="mos">September</span>
                  </div>
                </div>
                <h3 className="heading mt-2">
                  <Link to="/">Is wellness the new luxury</Link>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate-0">
            <div className="blog-entry">
              <Link
                to="/"
                className="block-20"
                style={{ backgroundImage: "url('images/image_6.jpg')" }}
              ></Link>
              <div className="text p-4 float-right d-block">
                <div className="d-flex align-items-center pt-2 mb-4">
                  <div className="one">
                    <span className="day">25</span>
                  </div>
                  <div className="two">
                    <span className="yr">2019</span>
                    <span className="mos">September</span>
                  </div>
                </div>
                <h3 className="heading mt-2">
                  <Link to="/">Is wellness the new luxury</Link>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col d-flex justify-content-center text-center">
            <div className="block-27">
              <ul className="w-25d-flex justify-content-around">
                <li className="px-1">
                  <Link to="/">&lt;</Link>
                </li>
                <li className="active px-1">
                  <span>1</span>
                </li>
                <li className="px-1">
                  <Link to="#">2</Link>
                </li>
                <li className="px-1">
                  <Link to="#">3</Link>
                </li>
                <li className="px-1">
                  <Link to="#">4</Link>
                </li>
                <li className="px-1">
                  <Link to="#">5</Link>
                </li>
                <li className="px-1">
                  <Link to="#">&gt;</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
