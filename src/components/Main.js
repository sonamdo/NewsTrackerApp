import React from 'react';
import Login from './Login';
import SearchResults from './SearchResults';
import NewsHighlights from './NewsHighlights';
import AddTopic from './AddTopic';
import FollowedTopics from './FollowedTopics'
import Header from './Header';
import AllHeadlines from './AllHeadlines';
import NewUser from './NewUser'

class Main extends React.Component {

render(){
  return(
    <div>
    <Header />
      <div className = "content-container">
      <h1 className = "bannerText">Headlines on followed topics</h1>
        <div className = "row">
          <div className = "col-sm-9">
            <NewsHighlights />
          </div>
          <div className = "col-sm-3">
            <AddTopic />
            <FollowedTopics />
          </div>
        </div>
      <h1 className = "bannerText">Also In The News</h1>
          <AllHeadlines />
    </div>
    </div>
  )
}

}

export default Main;
