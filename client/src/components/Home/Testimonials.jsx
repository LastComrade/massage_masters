import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true, 
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="py-5 ftcoo-section testimony-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-10 heading-section ftcoo-animate text-center">
            <h3 className="subheading">Testimony</h3>
            <h2 className="mb-1">Successful Stories</h2>
          </div>
        </div>
        <div className="row ftcoo-animate">
          <div className="col-md-12">
            <Slider {...sliderSettings}>
              <div className="item">
                <div className="testimony-wrap p-4 pb-5">
                  <div className="text">
                    <div className="line pl-5">
                      <p className="mb-4 pb-1">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="d-flex align-items-center">
                      <div
                        className="user-img"
                        style={{
                          backgroundImage: "url(images/person_1.jpg)",
                        }}
                      ></div>
                      <div className="ml-4">
                        <p className="name">Gabby Smith</p>
                        <span className="position">Customer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap p-4 pb-5">
                  <div className="text">
                    <div className="line pl-5">
                      <p className="mb-4 pb-1">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>

                    <div className="d-flex align-items-center">
                      <div
                        className="user-img"
                        style={{
                          backgroundImage: "url(images/person_2.jpg)",
                        }}
                      ></div>
                      <div className="ml-4">
                        <p className="name">Floyd Weather</p>
                        <span className="position">Customer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap p-4 pb-5">
                  <div className="text">
                    <div className="line pl-5">
                      <p className="mb-4 pb-1">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>

                    <div className="d-flex align-items-center">
                      <div
                        className="user-img"
                        style={{
                          backgroundImage: "url(images/person_3.jpg)",
                        }}
                      ></div>
                      <div className="ml-4">
                        <p className="name">James Dee</p>
                        <span className="position">Customer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap p-4 pb-5">
                  <div className="text">
                    <div className="line pl-5">
                      <p className="mb-4 pb-1">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>

                    <div className="d-flex align-items-center">
                      <div
                        className="user-img"
                        style={{
                          backgroundImage: "url(images/person_4.jpg)",
                        }}
                      ></div>
                      <div className="ml-4">
                        <p className="name">Lance Roger</p>
                        <span className="position">Customer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap p-4 pb-5">
                  <div className="text">
                    <div className="line pl-5">
                      <p className="mb-4 pb-1">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>

                    <div className="d-flex align-items-center">
                      <div
                        className="user-img"
                        style={{
                          backgroundImage: "url(images/person_2.jpg)",
                        }}
                      ></div>
                      <div className="ml-4">
                        <p className="name">Kenny Bufer</p>
                        <span className="position">Customer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
