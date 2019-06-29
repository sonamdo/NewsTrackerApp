import React from 'react'

//takes news article information from store and renders it as a react component
const SearchResultsArticle = ({title, content, url, urlToImage}) => (//destructuring is used to pull values directly from object
  <div className = "newsArticle searchResultsArticle">
    <a href = {url}>
      <div className = "row">
        <div className = "col-sm-4">
          <img src = {urlToImage} className = "searchImage"/>
        </div>
        <div className = "col-sm-8 searchText">
          <h3 className = "articleTitle">{title}</h3>
          <p className = "articleContents">{content}</p>
        </div>
      </div>
    </a>
  </div>
)

export default SearchResultsArticle
