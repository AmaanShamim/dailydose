import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="container card" style={{ width: "20rem", border: "solid", height: 440, overflow: "auto" }}>
          <img src={!imageUrl?"notAvailable.png":imageUrl} className="card-img-top mt-3" alt="..." style={{height: 180}} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read-more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
