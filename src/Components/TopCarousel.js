import React, { Component } from "react";
import CarouselContent from "./CarouselContent";

export class TopCarousel extends Component {
  headlines = [
    {
      source: {
        id: null,
        name: "CNET",
      },
      active:"active",
      author: "Scott Stein",
      title: "How You Might Use Snapchat AR Without Even Realizing It - CNET",
      description:
        "Snap's face filters and AR mirrors are moving outside of its app. Is this part of getting the world ready for a future of AR glasses?",
      url: "https://www.cnet.com/tech/computing/how-you-might-use-snapchat-ar-without-even-realizing-it/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/74173be6388f96c6f2032702dc02aa5a6456f223/hub/2023/04/24/9cc3abe7-927f-4c2b-9de1-6017e790fffa/ar-cartoon-mirror-lens.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2023-04-25T12:00:17Z",
      content:
        "You step into a store to look for some new shirts. They don't have the one you want, but there's a mirror hanging on the wall. It shows an image of you with the shirt you want, projected onto your bo… [+4727 chars]",
    },
    {
      source: {
        id: null,
        name: "Yanko Design",
      },
      active:"",
      author: "Sarang Sheth",
      title:
        "Connect your AirPods or Bluetooth headset to any device with a 3.5mm audio jack using this wireless dongle",
      description:
        "Connect your AirPods or Bluetooth headset to any device with a 3.5mm audio jack using this wireless dongleEver wanted to use your AirPods with the old-gen iPod or MP3 player? Or wanted to connect your new TWS earphones to the in-flight entertainment...",
      url: "https://www.yankodesign.com/2023/04/25/connect-your-airpods-or-bluetooth-headset-to-any-device-with-a-3-5mm-audio-jack-using-this-wireless-dongle/",
      urlToImage:
        "https://www.yankodesign.com/images/design_news/2023/04/auto-draft/twelve_south_airfly_bluetooth_dongle_1.jpg",
      publishedAt: "2023-04-25T22:30:45Z",
      content:
        "Ever wanted to use your AirPods with the old-gen iPod or MP3 player? Or wanted to connect your new TWS earphones to the in-flight entertainment system in a plane? Or wanted to use your hi-fi wireless… [+3235 chars]",
    },

    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      active:"",
      author: "Paul Sawers",
      title:
        "Spotify passes 500M users, but its premium-to-free ratio is falling",
      description:
        "Spotify now has 515 million monthly users, representing a 5% increase on the previous quarter and 22% increase on last year.",
      url: "https://techcrunch.com/2023/04/25/spotify-now-has-more-than-500m-users/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/07/Spotify-e1659011282211.jpg?resize=1200,675",
      publishedAt: "2023-04-25T11:48:29Z",
      content:
        "Spotify now has 515 million monthly active users (MAUs), representing a 5% increase on the previous quarter and 22% increase on the corresponding period last year.\r\nThis is the first time Spotify has… [+1604 chars]",
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      data: this.headlines,
    };
  }
  render() {
    return (
      <>
        <div className="container">
          <h1 className="my-3 text-center">DailyDose - Top Headlines</h1>
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            {this.state.data.map((elem,index) => {
              return (
                    <CarouselContent
                      key={index}
                      active={elem.active}
                      title={elem.title}
                      description={elem.description}
                      imageUrl={elem.urlToImage}
                      newsUrl={elem.url}
                    />
              );
            })}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default TopCarousel;
