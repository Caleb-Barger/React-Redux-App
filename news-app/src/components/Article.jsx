import React from 'react'

const Article = props => {
    const { article } = props

    return (
        <div>
            <h1>{article.title}</h1>
            <h2>Author: {article.author}</h2>
            <p>{article.content}</p>
            <h3>{article.description}</h3>
        </div>
    )
}

export default Article