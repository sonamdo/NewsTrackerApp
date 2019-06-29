import React from 'react';
import { connect } from 'react-redux';
import { startCreateUser } from '../actions/userActions'

const NewUser = (props) => {

    return (
      <div>
        <form>
          <input
            id="nameInput"
            type="text"
            placeholder="Name"
          />
          <input
            id="emailInput"
            type="text"
            placeholder="Email"
          />
          <input
            id="passwordInput"
            type="text"
            placeholder="Password"
          />
          <input
            type="submit"
            onClick ={ (e) => {
              e.preventDefault()
              props.dispatch(startCreateUser(
              {
                name: document.getElementById('nameInput').value,
                email: document.getElementById('emailInput').value,
                password: document.getElementById('passwordInput').value
              }
          ))} }
          />
        </form>
      </div>
    );
}

export default connect((state) => {//use connect to pass state down to react component
  return {//function returns which part of state we want to pass down (and what to call it)
    user: state.user
  }
})(NewUser);
