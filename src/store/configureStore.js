import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import newsReducer from '../reducers/newsReducers';
import apiReducer from '../reducers/apiReducers';
import userReducer from '../reducers/userReducer';
import authReducer from '../reducers/authReducers';
import {loadUser} from '../actions/userActions';
import { updateApi, loadHeadlines } from '../actions/newsActions';
import { wikipediaLoad, newsLoad, updateSearchTopic } from '../actions/apiActions'

export default() => {

  const middlewares = [thunk]

  const store = createStore (
    combineReducers({
      news : newsReducer,
      apis : apiReducer,
      user: userReducer,
      auth: authReducer
    }),
    applyMiddleware(...middlewares)//thunk middleware is applied for use in newsActions API call
  )

    store.subscribe(() => {
      console.log(store.getState())
    })

    store.dispatch(wikipediaLoad())
    store.dispatch(loadHeadlines())
    store.dispatch(newsLoad())
    store.dispatch(updateApi('africa')) //default search topic

  return store
}
