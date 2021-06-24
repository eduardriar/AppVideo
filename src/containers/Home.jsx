import React from "react";
import { connect } from "react-redux";

import "../assets/containers/Home.scss";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
// import useInitialState from "../hooks/useInitialState";

// const API = "http://localhost:3000/initalState";

function Home({ mylist, trends, originals, searchResults }) {
  // const initialState = useInitialState(API);
  const type = {
    mylist: "mylist",
    trends: "trends",
    originals: "originals",
    searchResults: "searchResults"
  };
  return (
    <div className="app">
      <Search />
      {searchResults.length > 0 && (
        <Categories title="Busqueda">
          <Carousel>
            {searchResults.map((list) => {
              return (
                <CarouselItem key={list.id} {...list} type={type.searchResults} />
              );
            })}
          </Carousel>
        </Categories>
      )}
      {mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {mylist.map((list) => {
              return (
                <CarouselItem key={list.id} {...list} type={type.mylist} />
              );
            })}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {trends.map((trend) => {
            return <CarouselItem key={trend.id} {...trend} />;
          })}
        </Carousel>
      </Categories>
      <Categories title="Originales de PlatziVideo">
        <Carousel>
          {/* Remember that when an arrow function has brakets it doesnt mean that the return is explicit */}
          {originals.map((original) => {
            return <CarouselItem key={original.id} {...original} />;
          })}
        </Carousel>
      </Categories>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
    searchResults: state.searchResults,
  };
};

export default connect(mapStateToProps, null)(Home);
