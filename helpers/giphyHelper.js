var request = require('request-promise')
var axios = require('axios');
var config = require('../config.js')

let getGifsByQuery = (query) => {
  var plusQuery = query.split(' ').join('+')

  let params = {
    'q': `${plusQuery}`,
    'api_key': `${config.TOKEN}`,
    'limit': 10
  }

  axios.get('http://api.giphy.com/v1/gifs/search', {params})
  .then(response => {
    console.log('response data: ', response.data);
    return response.data;
  })
  .catch(err => console.log('error from giffyHelper!'))
}

module.exports.getGifsByQuery = getGifsByQuery;

// janky url: `http://api.giphy.com/v1/gifs/search?q=${plus}&api_key=${config.TOKEN}`
