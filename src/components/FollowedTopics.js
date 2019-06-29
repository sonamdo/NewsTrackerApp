import React from 'react';
import { connect } from 'react-redux';
import { stopFollowingTopic } from '../actions/userActions'

const FollowedTopics = (props) => (
  <div>
  <h3>Followed Topics</h3>
    <ul className = "topicList">
      {props.followedNews.map((topic) => {
        return <li
        className = "topic"
        key = {topic}
        onClick = {() => {
          props.dispatch(stopFollowingTopic(topic))
          }}>
        {topic}
        </li>
        }
      )}
    </ul>
  </div>
)

export default connect((state) => {//use connect to pass state down to react component
  return {//function returns which part of state we want to pass down (and what to call it)
    news: state.news.headlines,
    newsLoaded: state.apis.newsApi,
    followedNews: state.user.following
  }
})(FollowedTopics);
