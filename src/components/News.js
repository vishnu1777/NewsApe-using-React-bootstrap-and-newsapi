import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=715551b96cf144b2b8708c553eaeca9a";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container">
        <h2>News Ape Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((ele) => {
            return (
              <div className="col-md-4" key={ele.url}>
                <NewsItem
                  title={ele.title ? ele.title.slice(0, 40) : "..."}
                  description={
                    ele.description ? ele.description.slice(0, 40) : "..."
                  }
                  imageUrl={ele.urlToImage ? ele.urlToImage : ""}
                  newsUrl={ele.url ? ele.url : ""}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
