import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    console.log(this.state.page);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=715551b96cf144b2b8708c553eaeca9a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    console.log("prev");
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  handleNextClick = async () => {
    console.log("next");
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          News Ape Top Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((ele) => {
              return (
                <div className="col-md-4" key={ele.url}>
                  <NewsItem
                    title={ele.title ? ele.title : "..."}
                    description={
                      ele.description ? ele.description.slice(0, 80) : "..."
                    }
                    imageUrl={
                      ele.urlToImage
                        ? ele.urlToImage
                        : "data:image/jpeg;base64,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"
                    }
                    newsUrl={ele.url ? ele.url : "https://www.google.com/"}
                    author={ele.author ? ele.author : "unknown"}
                    date={ele.publishedAt ? ele.publishedAt : "00:00:00"}
                    source={ele.source ? ele.source.name : "ABC"}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
