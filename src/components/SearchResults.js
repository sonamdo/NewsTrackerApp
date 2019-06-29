import React from 'react';
import { connect } from 'react-redux';
import SearchResultsArticle from './SearchResultsArticle';
import Header from './Header'

const SearchResults = (props) => (
  <div>
    <Header />
    <div className = "content-container">
    <h3>News Reports on {props.searchTopic}</h3>
      <div className = "row">
          {(props.newsLoaded) ? // if news api was correctly loaded, render to screen
            props.news.map((article) => {
              return <div>
                        <SearchResultsArticle {...article}/>
                    </div>
            })
            : null // else render nothing
          }
      </div>
    </div>
  </div>
)

export default connect((state) => {//use connect to pass state down to react component
  return {//function returns which part of state we want to pass down (and what to call it)
    news: state.news.api,
    newsLoaded: state.apis.newsApi,
    searchTopic: state.apis.searchTopic
  }
})(SearchResults);
