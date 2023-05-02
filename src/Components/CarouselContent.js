import React, { Component } from "react";

export class carouselContent extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, active } = this.props;
    return (
      <>
        <div className="carousel-inner">
          <div className={`carousel-item ${active}`}>
            <a href={newsUrl} target="_blank" rel="noreferrer">
              <img
                src={imageUrl}
                className="d-block w-100"
                alt="Not Available"
              />
            </a>
            <div className="carousel-caption d-none d-md-block">
              <h5>{title} </h5>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default carouselContent;
