var request = require('request-promise')
var axios = require('axios');
var config = require('../config.js')

let getGifsByQuery = (query) => {
  var plusQuery = query.split(' ').join('+')

  let params = {
    'q': `${plusQuery}`,
    'api_key': `${config.TOKEN}`,
    'limit': 5
  }

  return axios.get('http://api.giphy.com/v1/gifs/search', {params});
}

module.exports.getGifsByQuery = getGifsByQuery;

// janky url: `http://api.giphy.com/v1/gifs/search?q=${plus}&api_key=${config.TOKEN}`
