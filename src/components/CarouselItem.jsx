import React from "react";
import propTypes from "prop-types";

import PlayIcon from "../assets/images/play-icon.png";
import PlusIcon from "../assets/images/plus-icon.png";
import "../assets/components/CarouselItem.scss";

export default function CarouselItem({
  cover,
  title,
  contentRating,
  year,
  duration,
}) {
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            src={PlayIcon}
            alt="Play Icon"
          />
          <img
            className="carousel-item__details--img"
            src={PlusIcon}
            alt="Plus Icon"
          />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  );
}

CarouselItem.propTypes = {
  cover: propTypes.string,
  title: propTypes.string,
  contentRating: propTypes.string,
  year: propTypes.number,
  duration: propTypes.number,
};
