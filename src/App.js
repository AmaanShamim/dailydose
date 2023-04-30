import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import TopCarousel from "./Components/TopCarousel";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <TopCarousel/>
        <div className="spinner-grow" role="status" style={{width: "3rem", height: "3rem"}}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <News />
      </>
    );
  }
}
