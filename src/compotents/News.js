import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


export default class News extends Component {

  static defaultProps = {
    psize: 10,
    country: 'in',
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    psize: PropTypes.number,
    category: PropTypes.string
  }
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles: 0,
      load: true
    }
    document.title = `${this.props.category}-NewsApp`
  }

  updateFun = async () => {
    this.props.setProgress(10)
    let urll = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.psize}`;
    this.setState({ loading: true })
    let res = await fetch(urll);
    this.props.setProgress(45)
    let data = await res.json();
    this.props.setProgress(75)
    this.setState({
      loading: false,
      articles: data.articles,
      totalArticles: data.totalResults,
      page: this.state.page,
      load : false
    })
    this.props.setProgress(100)
  }
  fetchMoreData = async () => {
    this.setState({ loading: true })
    let urll = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.psize}`;
    this.setState({ page: this.state.page + 1 })
    let res = await fetch(urll);
    let data = await res.json();
    this.setState({
      loading: false,
      articles: this.state.articles.concat(data.articles),
      totalArticles: data.totalResults,
      page: this.state.page,
    })
  }
  async componentDidMount() {
    this.updateFun();
  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className='text-center my-5'>All news is here</h1>
        {this.state.load && <Spiner/>}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalArticles}
            loader={this.state.loading && <Spiner />}
          >
            <div className="container">
              <div className="row my-5">
                {Array.from(this.state.articles).map((val,ind) => {
                  return (<div className="col-md-4 mb-5" key={val.url+ind}>
                    <NewsItem dateI={new Date(val.publishedAt).toGMTString()} title={val.title ? val.title.slice(0, 40) + '...' : ''} discription={val.description ? val.description.slice(0, 90) + '...' : 'This is a news app you will be read full news using below button click and read'} src={val.urlToImage ? val.urlToImage : 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'} newURL={val.url} />
                  </div>)
                })}
              </div>
            </div>
          </InfiniteScroll>

        </div>

      </>
    )
  }
}
