// react
import React, { useState } from "react";
import "./modal.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p1 from "./img/p1.jpg";
import p2 from "./img/p2.jpg";
import p3 from "./img/p3.jpg";
import p4 from "./img/p4.jpg";
import p5 from "./img/p5.jpg";
import p6 from "./img/p6.jpg";
import p7 from "./img/p7.jpg";
import p8 from "./img/p8.jpg";
import p9 from "./img/p9.jpg";
import p10 from "./img/p10.jpg";
import p11 from "./img/p11.jpg";
import p12 from "./img/p12.jpg";
import p13 from "./img/p13.jpg";
import p14 from "./img/p14.jpg";
import p15 from "./img/p15.jpg";
import CLOSE from "./img/close.png";

const Modal = (props) => {
  const closeModal = () => {
    if (props.closeModal) props.closeModal();
  };

  const settings = {
    dots: false,
    infinit: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: props.initialSlide,
    arrows: true
  };
  return (
    props.visible && (
      <div className="modal">
        <div className="modal-inner">
          <div className="modal-inner-close" onClick={closeModal}>
             <img src={CLOSE} className="modal-inner-close-icon"/>
          </div>
          <div className="modal-inner-slide">
            <Slider {...settings}>
              <img src={p1} />
              <img src={p2} />
              <img src={p3} />
              <img src={p4} />
              <img src={p5} />
              <img src={p6} />
              <img src={p7} />
              <img src={p8} />
              <img src={p9} />
              <img src={p10} />
              <img src={p11} />
              <img src={p12} />
              <img src={p13} />
              <img src={p14} />
              <img src={p15} />
            </Slider>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
