export const wikipediaLoad = () => ({
  type: 'WIKIPEDIA_LOAD'
})

export const newsLoad = () => ({
  type: 'NEWS_LOAD'
})

export const updateSearchTopic = ({topic} = {}) => ({
  type: 'UPDATE_SEARCH',
  topic//destructured
})

export const setCurrentTopic = (inputData) => ({
  type: 'SET_TOPIC',
  inputData
})

export const setFollowTopic = (inputData) => ({
  type: 'SET_FOLLOW',
  inputData
})
