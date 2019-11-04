import React from 'react';
import { connect } from 'react-redux';
import NewsArticle from './NewsArticle';

const NewsHighlights = (props) => (
  <div>
    <div className = "followedHeadlines">
     <div className = "row">
        {(props.newsLoaded) ? // if news api was correctly loaded, render to screen
          props.news.map((article) => {
            for(let i = 0; i<props.followedNews.length; i++){
              if(article.title.toLowerCase().includes(props.followedNews[i].toLowerCase())){
                return <div className ="col-sm-6"><NewsArticle key={article.url} {...article}/></div>
              }
            }
          })
          : null // else render nothing
        }
      </div>
        <h2>No Headlines Found Based On Interests</h2>
        {props.followedNews.length < 1 ?
          <div><p>It looks like you aren't following any topics at the moment. Consider adding some and we'll show you headlines based on what you're following</p></div>
        : null}
    </div>
  </div>
)

export default connect((state) => {//use connect to pass state down to react component
  return {//function returns which part of state we want to pass down (and what to call it)
    news: state.news.headlines,
    newsLoaded: state.apis.newsApi,
    followedNews: state.user.following
  }
})(NewsHighlights);
