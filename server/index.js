var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('../database-mongo/index');
var axios = require('axios');
var giphyHelper = require('../helpers/giphyHelper');
var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/gifs', function(req, res) {
  var query = req.body.query;
  console.log('from server index: ', query);
  giphyHelper.getGifsByQuery(query)
  .then(response => {
    let gifs = response.data.data;
    mongo.save(gifs, query);
  })
  .then(() => console.log('successful save!'))
  .catch(err => console.log('error from server index!'))

  //res.send();
})

//stock :
// app.get('/gifs', function (req, res) {
//   mongo.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

