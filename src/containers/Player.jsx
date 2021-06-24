import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import "../assets/containers/Player.scss";
import { getVideoSource } from "../actions";
import NotFound from "./NotFound";

function Player(props) {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;

  //This hook function has the same behavior as useEffect but it is executed syncronous
  useLayoutEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <NotFound />
  );
}

const mapDispatchToProps = {
  getVideoSource,
};

const mapStateToProps = (state) => {
    console.log(state)
  return {
    playing: state.playing,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
