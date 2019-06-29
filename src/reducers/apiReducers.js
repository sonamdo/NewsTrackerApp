const initialState = {
  newsApi: false,
  wikipediaApi: false,
  searchTopic: '',
  followTopic: ''
}

export default (state = initialState, action) => {
  switch(action.type) {

    case 'WIKIPEDIA_LOAD' :
      return {
        ...state,
        wikipediaApi: true
      }

    case 'NEWS_LOAD':
      return {
        ...state,
        newsApi: true
      }

    case 'UPDATE_SEARCH' :
      return {
        ...state,
        searchTopic: action.topic
      }

    case 'SET_TOPIC' : //call this action when API is called
      return{
        ...state,
        searchTopic: action.inputData
      }

    case 'SET_FOLLOW' : //call this action when API is called
      return{
        ...state,
        followTopic: action.inputData
      }

      default:
        return state


  }
}
