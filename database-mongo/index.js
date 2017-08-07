var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mvp');

var db = mongoose.connection;
mongoose.Promise = global.Promise;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

let giphySchema = mongoose.Schema({
  query: String,
  gif: {
    id: String,
    slug: String,
    embed_url: String
  }
});

let Gif = mongoose.model('Gif', giphySchema);

let selectAll = function(callback) {
  Gif.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

let save = function(gifs, query) {
  // returns a promise once all documents are created
  return Promise.all(gifs.map(gif => Gif.create({query, gif})));
}

module.exports.selectAll = selectAll;
module.exports.save = save;