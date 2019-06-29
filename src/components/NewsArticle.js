import React from 'react'

//takes news article information from store and renders it as a react component
const NewsArticle = ({title, content, url, urlToImage}) => (//destructuring is used to pull values directly from object
  <div className = "newsArticle">
    <a href = {url}>
    <img src = {urlToImage} className = "headlineImage"/>
      <h3 className = "articleTitle">{title}</h3>
      <p className = "articleContents">{content}</p>
    </a>
  </div>
)

export default NewsArticle
