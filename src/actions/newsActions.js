export const updateApi = (topic) => {

  var url  = 'https://newsapi.org/v2/everything?'+
        'q=' + topic + '&' +
        // 'from=' + new Date().toISOString().slice(0, 10) + '&' + //news from today
        'language=en&' +
        'sortBy=popularity&' +
        'apiKey='; //api key goes here

return dispatch =>
  fetch(url)
    .then(response => response.json())
    .then(json =>
       dispatch({
        type: 'UPDATE_API',
        json
      })
    )

}

export const loadHeadlines = () => {

  var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' + //edit later to detect ip and set country accordingly
          'language=en&' +
          'apiKey='; //api key goes here
  var req = new Request(url);

return dispatch =>
    fetch(req)
      .then(response => response.json())
      .then(json =>
        dispatch({
          type: 'LOAD_HEADLINES',
          json
        })
      )
}
