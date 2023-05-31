import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default function News (props) {

    News.defaultProps = {
        country: 'in',
        category: 'technology',

    };

    News.propTypes = {
        country: PropTypes.string,
        category: PropTypes.string

    }

    
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
        
    const capitalizeFirstLetter= (str)=>{
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2
    }

    const  updateNews = async ()=> {
        props.setProgress(10)
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=da935de9ca644afbad4455480377951f&pageSize=6&page=${page}`)
        props.setProgress(30)
        let parsedData = await data.json()
        props.setProgress(70)
        setloading(false)
        setarticles(parsedData.articles)
        props.setProgress(100)
    }


   
    useEffect( () => {
       updateNews()
    }, [])
    

    const fetchMoreData = async () => {
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=6&page=${page + 1}`)
        let parsedData = await data.json()
        setpage(page+1)
        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
       
    }
   
        return (
            <div>
                <h1 className='text-center' style={{ margin: '40px', marginTop:'90px' }}>NewsBeat- Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner></Spinner>}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner></Spinner>}
                >

                    <div className="container my-3">
                        <div className="row">
                            {articles.map((element) =>
                                <div key={element.url} className="col-md-4">
                                    <NewsItem source={element.source.name} title={element.title ? element.title.slice(0, 40) + '...' : ''} description={element.description ? element.description.slice(0, 88) + '...' : ''} imageUrl={element.urlToImage} newsDetailUrl={element.url} author={element.author ? element.author : 'unknown'} date={new Date(element.publishedAt).toUTCString()}></NewsItem>
                                </div>
                            )}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }

