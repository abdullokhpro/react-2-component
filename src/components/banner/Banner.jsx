import React from "react";
import "./banner.scss";

function Banner({ id, title, items, img, price, text, btns, bg }) {
  return (
    <section style={{ background: bg }} className="banner">
      <div className="container banner__container">
        <div className="banner__general">
          <h2 className="banner__title">{title}</h2>
          <ul className="banner__list">
            <li className="banner__item">
              <a href="#">{items}</a>
            </li>
          </ul>
          <div className="banner__img__parent">
            <img
              className="banner__img"
              src={img}
              alt="here is ther image of banner first part"
            />
          </div>

          <div className="banner__bottom">
            <h2 className="banner__price">{price}</h2>
            <p className="banner__text">{text}</p>
          </div>

          <div className="banner__btns">
            <a href="#" className="banner__btns__link">
              Learn more
            </a>
            <button className="banner__btns__btn">Shop now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
