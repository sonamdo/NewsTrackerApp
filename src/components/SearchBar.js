import React from 'react';
import { connect } from 'react-redux';
import { updateSearchTopic, setCurrentTopic } from '../actions/apiActions'
import { updateApi } from '../actions/newsActions';
import { startFollowingTopic } from '../actions/userActions';
import { Link } from 'react-router-dom';
import { history } from '../routers/AppRouter';

const SearchBar = (props) => (

<div className = "SearchBar">
  <input
    type = "text"
    onChange={(e) => {props.dispatch(setCurrentTopic(e.target.value))}}
    onKeyDown={(e) => {
        if (e.key === 'Enter'){ //if enter is pressed, dispatch action
          props.dispatch(updateApi(e.target.value))
          history.push('/SearchResults')
        }
    }}
    placeholder = "Search the news"
  />
  <Link to="/SearchResults">
    <button
      onClick = {(e) => {
        props.dispatch(updateApi(props.searchTopic))
      }}
    >
      Search
    </button>
  </Link>
</div>

)

export default connect((state) => {//use connect to pass state down to react component
  return {//function returns which part of state we want to pass down (and what to call it)
    news: state.news.api,
    newsLoaded: state.apis.newsApi,
    searchTopic: state.apis.searchTopic
  }
})(SearchBar);
