import React, { Component } from 'react'
import NewzItem from './NewzItem'
import { Spinner } from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
// import PropTypes from 'prop-types'

export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            totalResults: 0,
            page: 1
        }
        document.title = `${this.props.category}-NewzHunt`
    }
    async update() {
        this.props.setProgress(40);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6e1a5837f7c846efb26d0577f7a0544e&page=${this.state.page}&pageSize= ${this.props.pagesize}`;
        this.setState({ loading: true })
        let fetchedData = await fetch(url);
        this.props.setProgress(70);
        let parsedData = await fetchedData.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.update();
    }
    // prev = async () => {
    //     this.setState({ page: this.state.page - 1 })
    //     this.update();

    // }
    // next = async () => {
    //     this.setState({ page: this.state.page + 1 })
    //     this.update();

    // }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6e1a5837f7c846efb26d0577f7a0544e&page=${this.state.page}&pageSize= ${this.props.pagesize}`;
        let fetchedData = await fetch(url);
        let parsedData = await fetchedData.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
    }

    render() {
        return (
            <>
                <h2 className='text-center' >Top {this.props.category === 'General' ? '' : `${this.props.category}`} Headlines </h2>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}>
                    <div className="container">
                        <div className="container row mx-auto" >
                            {this.state.articles?.map((element) => {
                                return <div className="col-md-6 col-sm-12 my-2 col-lg-4" key={element.url}>
                                    <NewzItem title={(element.title !== null ? element.title.slice(0, 80) : '') + '...'} desc={(element.description !== null ? element.description.slice(0, 65) : '') + '...'} imgUrl={element.urlToImage !== null ? element.urlToImage : 'https://m.media-amazon.com/images/I/4111lKBeEUL.png'} newsUrl={element.url} date={(element.publishedAt !== null ? new Date(element.publishedAt).toGMTString() : '')} author={(element.author !== null ? element.author : 'Unknown')} />
                                </div>
                            })}

                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container bg-body-tertiary d-flex justify-content-between align-items-center " style={{ position: 'fixed', bottom: 0, zIndex: 100, width: '100vw' }}>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-light" onClick={this.prev}>&larr; Previous</button>

                    <div className="pageNo">
                        Page <span className="font-weight-bold">{this.state.page}</span> of <u> {Math.ceil(this.state.totalResults / this.props.pagesize)} </u>

                    </div>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-light" onClick={this.next}> Next &rarr;</button>
                </div> */}
            </>
        )
    }
}

export default News
