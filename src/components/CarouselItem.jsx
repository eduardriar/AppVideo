import React from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { setFavorite, deleteFavorite } from "../actions/index";
import { Link } from "react-router-dom";

import PlayIcon from "../assets/images/play-icon.png";
import PlusIcon from "../assets/images/plus-icon.png";
import RemoveIcon from "../assets/images/remove_icon.png";
import "../assets/components/CarouselItem.scss";

function CarouselItem(props) {
  const { cover, title, contentRating, year, duration, id, type } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      cover,
      title,
      contentRating,
      year,
      duration,
      id,
    });
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img
              className="carousel-item__details--img"
              src={PlayIcon}
              alt="Play Icon"
            />
          </Link>

          {type !== "mylist" && (
            <img
              className="carousel-item__details--img"
              src={PlusIcon}
              alt="Plus Icon"
              onClick={handleSetFavorite}
            />
          )}
          {type === "mylist" && (
            <img
              className="carousel-item__details--img"
              src={RemoveIcon}
              alt="Remove Icon"
              onClick={() => handleDeleteFavorite(id)}
            />
          )}
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

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
