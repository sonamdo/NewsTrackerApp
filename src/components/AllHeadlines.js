import React from 'react';
import { connect } from 'react-redux';
import NewsArticle from './NewsArticle';

const AllHeadlines = (props) => (
  <div>
    <div className = "row">
      {(props.followedNews) ? // if news api was correctly loaded, render to screen
        props.news.map((article) => {
              var titleWords = article.title.split(" ")
              var count = 0

              for (var i = 0; i < titleWords.length; i++){
                for(var e = 0; e < props.followedNews.length; e++){
                  if(titleWords[i].toLowerCase() == props.followedNews[e].toLowerCase()){
                    count += 1
                  }
                }
              }
              if (count<1){
                return <div className ="col-sm-4" key = {article.url + "div"}>
                        <NewsArticle key={article.url} {...article}/>
                       </div>
                   }
        })
          : null
      }

    </div>
  </div>
)

export default connect((state) => {//use connect to pass state down to react component
  return {//function returns which part of state we want to pass down (and what to call it)
    news: state.news.headlines,
    newsLoaded: state.apis.newsApi,
    followedNews: state.user.following
  }
})(AllHeadlines);
