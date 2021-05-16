import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import "../assets/App.scss";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import useInitialState from "../hooks/useInitialState";

const API = "http://localhost:3000/initalState";

export default function App() {
  const initialState = useInitialState(API);

  return (
    <div className="app">
      <Header />
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
          {initialState.mylist.map((list) => {
            return <CarouselItem key={list.id} {...list} />;
          })}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends.map((trend) => {
            return <CarouselItem key={trend.id} {...trend} />;
          })}
        </Carousel>
      </Categories>
      <Categories title="Originales de PlatziVideo">
        <Carousel>
          {/* Remember that when an arrow function has brakets it doesnt mean that the return is explicit */}
          {initialState.originals.map((original) => {
            return <CarouselItem key={original.id} {...original} />;
          })}
        </Carousel>
      </Categories>
      <Footer></Footer>
    </div>
  );
}
