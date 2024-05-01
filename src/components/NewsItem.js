import React, { Component } from "react";
import '../App.css';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card" style={{minHeight:490}}>
          <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
          <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://s.yimg.com/ny/api/res/1.2/vI4b6mvdKLNZuUdsDC.p5g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02ODg-/https://s.yimg.com/os/creatr-uploaded-images/2024-03/ad723da0-df5a-11ee-b65e-76fd0f0b2753"
            }
            style={{height:256, width:414}}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"> 
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-large btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
