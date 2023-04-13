import React from "react";

const BlogPosts = () => {
  return (
    <section className="py-5 ftcoo-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section ftcoo-animate text-center">
            <h3 className="subheading">Blog</h3>
            <h2 className="mb-1">Recent Posts</h2>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-4 d-flex ftcoo-animate">
            <div className="blog-entry justify-content-end">
              <a
                href="https://www.google.com/"
                className="block-20"
                style={{ backgroundImage: "url('images/image_1.jpg')" }}
              >
                0
              </a>
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
                  <a href="https://www.google.com/">
                    Is wellness the new luxury
                  </a>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftcoo-animate">
            <div className="blog-entry justify-content-end">
              <a
                href="https://www.google.com/"
                className="block-20"
                style={{ backgroundImage: "url('images/image_2.jpg')" }}
              >
                0
              </a>
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
                  <a href="https://www.google.com/">
                    Is wellness the new luxury
                  </a>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftcoo-animate">
            <div className="blog-entry">
              <a
                href="blog-single.html"
                className="block-20"
                style={{ backgroundImage: "url('images/image_3.jpg')" }}
              >
                0
              </a>
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
                  <a href="https://www.google.com/">
                    Is wellness the new luxury
                  </a>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
