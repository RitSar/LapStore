import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// import img1 from "/img/img1.jpg";

export default function Carousel() {

  return (
    <OwlCarousel className="owl-theme"
      items="1"
      loop
      autoplay
      autoplayHoverPause
      responsiveClass
      dots={false}
    >
      <div className="item img-fluid">
        <img src="/img/img1.jpg" alt="" />
      </div>
      <div className="item img-fluid">
        <img src="/img/img2.jpg" alt="" />
      </div>
      <div className="item img-fluid">
        <img src="/img/img3.png" alt="" />
      </div>
      <div className="item img-fluid">
        <img src="/img/img4.jpg" alt="" />
      </div>
    </OwlCarousel>
  );
}
