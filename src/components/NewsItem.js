import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsDetailUrl, author, date, source}  = this.props
        return (
            <div>
                <div className="card my-3" >
                    <img src= {imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title d-inline" >{title}</h5>
                            <h6><span className="badge text-bg-danger ">{source}</span></h6>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-body-secondary">By {author} On {date}</small></p>
                            <a href={newsDetailUrl} rel='noreferrer' target='_blank' className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}
