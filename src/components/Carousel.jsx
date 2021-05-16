import React from "react";
import '../assets/components/Carousel.scss';

export default function Carousel({ children }) {
  return (
    <React.Fragment>
      <section className="carousel">
        <div className="carousel__container">{children}</div>
      </section>
    </React.Fragment>
  );
}
