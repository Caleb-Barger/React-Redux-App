import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getNews } from '../store/actions'

import Article from './Article'

const DisplayNewsFeed = props => {

    useEffect(() => {
        props.getNews()
    }, [])

    return (
        <div>
            Articles App...
            {props.articles.map((article, index) => {
                return (
                    <Article article={article} key={index} />
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.newsReducer.isFetching,
        articles: state.newsReducer.articles,
        error: state.newsReducer.error
    }
}

export default connect(mapStateToProps, { getNews })(DisplayNewsFeed) 