const initialState = {
  following: []
}

export default(state = initialState, action) => {
  switch(action.type){

    // case 'CREATE_USER' : //call this action when API is called
    //   console.log(action.userData)
    //   return{
    //     ...state,
    //     user: action.userData
    //   }

    case 'LOAD_USER' : //call this action when API is called
      return{
        ...state,
        following: action.userData
      }

    default:
      return state
  }
}
