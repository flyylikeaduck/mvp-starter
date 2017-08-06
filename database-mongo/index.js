var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var giphySchema = mongoose.Schema({
  id: String,
  slug: String,
  embed_url: String
});

var Gif = mongoose.model('Gif', giphySchema);

var selectAll = function(callback) {
  Gif.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var save = function(gifs) {
  return Promise.all(gifs.map(gif => Gif.create(gif)));
}

module.exports.selectAll = selectAll;
module.exports.save = save;