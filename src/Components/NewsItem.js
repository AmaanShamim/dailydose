import React, { Component } from "react";

export class NewsItem extends Component {
  
  consoly = () => {
    console.log(this.state.mode);
  }

  render() {
    let { title, description, imageUrl, newsUrl, mode } = this.props;
    return (
      <div className="my-3">
        <div className="container card" style={{ width: "20rem", border: "solid", height: 440, overflow: "auto" }}>
          <img src={!imageUrl?"notAvailable.png":imageUrl} className="card-img-top mt-3" alt="not available" style={{height: 180}} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className={`btn btn-sm btn-${mode==='dark'?'dark':'light'}`}
            >
              Read-more
            </a>
            <button onClick={this.consoly}>consoly</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
