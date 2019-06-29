export default(state = {api : [1,2,3], headlines : []}, action) => {
  switch(action.type){

    case 'UPDATE_API' : //call this action when API is called
      console.log(action.json)
      return{
        ...state,
        api : action.json.articles
      }

    case 'LOAD_HEADLINES' : //call this action when API is called
      return{
        ...state,
        headlines: action.json.articles
      }

      // case 'LOAD_FOLLOWED' : //pushes user followed topics results to state
      //   console.log(action.json)
      //   return{
      //     ...state,
      //     followedApis : followedApi.concat(action.json.articles)
      //   }

    default:
      return state
  }
}


// return{
//   ...state,
//   api : [3,4,5]
// }
