import React from "react";
import "./hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <p className="hero__price">Save $800</p>
          <h1 className="hero__title">New Bespoke AI Laundry Cambo</h1>
          <p className="hero__text">
            get $800 off. Plus, enjoy free instalation, haoul away and more.
          </p>
          <button className="hero__btn">Shop Now</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
