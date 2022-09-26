import React, { Component } from "react";

export default class NewsItem extends Component {
    
    render() {
        const {title,discription,src,newURL,dateI} = this.props;
        return (
            <>
                <div className="card">
                    <img src={src} className="card-img-top" alt="About News" style={{height:'150px'}}/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{discription}</p>
                            <h6 className="card-title text-danger">Date : {dateI}</h6>
                            <a href={newURL} className="btn btn-sm btn-primary" target='t-blank'>Read More</a>
                        </div>
                </div>
            </>
        )
    }
}