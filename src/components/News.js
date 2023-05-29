import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'technology',

    };

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string

    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }


    async updateNews() {
        this.setState({ loading: true })
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=da935de9ca644afbad4455480377951f&pageSize=6&page=${this.state.page}`)
        let parsedData = await data.json()
        this.setState({ loading: false })
        this.setState({ articles: parsedData.articles })
    }

    async componentDidMount() {
        this.updateNews()
    }

    render() {

        const handleNextClick = async () => {
            await this.setState({
                page: this.state.page + 1,
            })
            this.updateNews()
        }

        const handlePrevClick = async () => {
            if (this.state.page > 1) {
                await this.setState({
                    page: this.state.page - 1,
                })
                this.updateNews()
            } else {
            }
        }

        return (
            <div>
                <div className="container my-3">
                    <h1 style={{ margin: '40px' }}>NewsBeat- Top Headlines</h1>
                    <div className="row">
                        {this.state.loading ? <Spinner></Spinner> : this.state.articles.map((element) =>
                            <div key={element.url} className="col-md-4">
                                <NewsItem source={element.source.name} title={element.title ? element.title.slice(0, 20) + '...' : ''} description={element.description ? element.description.slice(0, 88) + '...' : ''} imageUrl={element.urlToImage} newsDetailUrl={element.url} author={element.author ? element.author : 'unknown'} date={new Date(element.publishedAt).toUTCString()}></NewsItem>
                            </div>
                        )}
                    </div>
                    <div className="container my-3 d-flex justify-content-between">
                        <button type="button" disabled={this.state.page === 1 ? true : false} onClick={handlePrevClick} className="btn btn-dark">&larr; Previous</button>
                        <button type="button" disabled={this.state.page === 8 ? true : false} onClick={handleNextClick} className="btn btn-dark">Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}
