import React from "react";

const HeroSecond = () => {
  return (
    <section
      className="ftcoo-section ftcoo-intro img"
      style={{ backgroundImage: "url(images/intro.jpg)" }}
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-md-6">
            <div className="py-5">
              <h2 className="mb-4">Benefits of Doing Spa &amp; Massage</h2>
            </div>
            <p className="ftcoo-">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <ul className="mt-5 do-list">
              <li className="">
                <a href="/">
                  <span className="ion-ios-checkmark-circle mr-3"></span>Spa &amp;
                  Massage boosts brain power
                </a>
              </li>
              <li className="-animate">
                <a href="/">
                  <span className="ion-ios-checkmark-circle mr-3"></span>Spa &amp;
                  Massage helps you to breathe better
                </a>
              </li>
              <li className="-animate">
                <a href="/">
                  <span className="ion-ios-checkmark-circle mr-3"></span>Spa &amp;
                  Massage improves your strength
                </a>
              </li>
              <li className="-animate">
                <a href="/">
                  <span className="ion-ios-checkmark-circle mr-3"></span>Spa &amp;
                  Massage helps you to focus
                </a>
              </li>
              <li className="-animate">
                <a href="/">
                  <span className="ion-ios-checkmark-circle mr-3"></span>Spa &amp;
                  Massage helps give meaning to your day
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSecond;
