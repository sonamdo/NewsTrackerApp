import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/authActions'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = ({startLogout}) => (
  <header className = "header">
    <div className = 'content-container'>
      <div className = 'header-content'>
        <Link to="/">
          <h1>News Tracker</h1>
        </Link>
        <SearchBar />
        <button onClick = {startLogout}>Logout</ button>
      </div>
    </div>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)
