import React from 'react';
import { connect } from 'react-redux';
import { updateSearchTopic, setFollowTopic } from '../actions/apiActions'
import { updateApi } from '../actions/newsActions';
import { startFollowingTopic } from '../actions/userActions'

const AddTopic = (props) => (

<div className = "SearchBar">
  <input
    onChange={(e) => {props.dispatch(setFollowTopic(e.target.value))}}
    onKeyDown={(e) => {
        if (e.key === 'Enter'){ //if enter is pressed, dispatch action
          props.dispatch(startFollowingTopic(props.followTopic))
        }
    }}
    placeholder = "Topic"
  />
  <button
    onClick = {(e) => {
      props.dispatch(startFollowingTopic(props.followTopic))
    }}
  >
    Follow
  </button>
</div>

)

export default connect((state) => {//use connect to pass state down to react component
  return {//function returns which part of state we want to pass down (and what to call it)
    news: state.news.api,
    newsLoaded: state.apis.newsApi,
    followTopic: state.apis.followTopic
  }
})(AddTopic);
