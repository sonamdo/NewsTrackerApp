import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //use to make provide store to all app components
import {login, logout} from './actions/authActions';
import {startLoadUser, startCreateUser} from './actions/userActions'
import { updateApi, loadFollowedTopics } from './actions/newsActions';
import AppRouter, { history } from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'bootstrap';
import {firebase} from './firebase/firebase'
import configureStore from './store/configureStore'

const store = configureStore()

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

library.add(faTwitter, faFacebookF, faLinkedinIn)

import $ from 'jquery';
import Main from "./components/Main.js"

firebase.auth().onAuthStateChanged((user) => {
  if (user){ //detects if user is logged in
    store.dispatch(login(user.uid))
    store.dispatch(startLoadUser())
    store.dispatch(startCreateUser())
    console.log('user logged in')
  } else {
    store.dispatch(logout())
    history.push('/login')
    console.log('user logged out')
  }
})

ReactDOM.render(
  <Provider store = {store}>
    <AppRouter />
  </Provider>,
document.getElementById('app'));
