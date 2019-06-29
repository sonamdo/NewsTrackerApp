import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/authActions'

const Login = ({startLogin}) => (
  <div className = "loginPage">
    <div className = "loginBox">
      <h1>Login to see the news</h1>
      <button className = "loginPageButton" onClick ={startLogin}> Login with Gmail </button>
    </div>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(Login)
