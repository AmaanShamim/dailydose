import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl,} = this.props;
    return (
      <div className="my-3">
        <div className="container card" style={{ width:"20rem", border:"solid", borderWidth:1, height:440, overflow:"auto",
        backgroundColor:this.props.mode==='dark'?'#212529':'white',
        color:this.props.mode==='dark'?'white':'black'
        }}>
          <img src={!imageUrl?"notAvailable.png":imageUrl} className="card-img-top mt-3" alt="not available" style={{height: 180}} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className={`btn btn-sm btn-${this.props.mode==='light'?'dark':'light'}`}
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
