import React from "react";
import "./authentication.css";

import slider_foto1 from "../assets/images/slider1.webp";
import slider_foto2 from "../assets/images/slider2.webp";

export const Login = () => {
  return (
    <div className="login_box">
      <div className="login_box-slider-tooltip">
        <figure className="login_box-slider-tooltip-item">
          <img src={slider_foto1} alt="slider_foto1" />
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </figcaption>
        </figure>
        <figure className="login_box-slider-tooltip-item">
          <img src={slider_foto2} alt="slider_foto1" />
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </figcaption>
        </figure>
      </div>
      <div className="login_box-form"></div>
    </div>
  );
};
