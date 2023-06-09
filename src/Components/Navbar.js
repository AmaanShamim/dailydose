import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-${this.props.mode==="light"?"success":"dark"} bg-${this.props.mode==="light"?"success":"dark"}`}
        >
          <div className="container-fluid">
            <img
              src="android-chrome-512x512.png"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top mx-2"
              style={{
                borderRadius: 5,
              }}
            />
            <a className="navbar-brand" href="/home">
              DailyDose
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link text-center"
                    aria-current="page"
                    href="/home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-center" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <div className="nav-link text-center active">
                    <i
                      onClick={this.props.handlemode}
                      class="fa-solid fa-sun"
                    ></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
