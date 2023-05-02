import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import TopCarousel from "./Components/TopCarousel";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "light",
    };
  }

  handlemode = () => {
    if (this.state.mode === "light") {
      this.setState({
        mode: "dark",
      });
      document.body.style.backgroundColor = "#2e2948";
      document.body.style.color = "White";
    } else {
      this.setState({
        mode: "light",
      });
      document.body.style.backgroundColor = "White";
      document.body.style.color = "black";
    }
  }

  render() {
    return (
      <>
        <Navbar handlemode={this.handlemode} mode={this.state.mode}/>
        <TopCarousel />
        {/*<div
          className="spinner-grow"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
          <span className="visually-hidden">Loading...</span>
        </div>*/}
        <News mode={this.state.mode}/>
      </>
    );
  }
}
