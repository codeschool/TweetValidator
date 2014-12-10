var express = require('express');
var app = express();

var allowAllTheThings = require('permissive-cors');
app.use(allowAllTheThings());

var bodyParser = require('body-parser');

app.post('/tweet', bodyParser.json(),  function(request, response) {
  var description = request.body.description;
  var maxLength = request.body.maxLength || 140;

  if(!description || description.length > maxLength){
    response.status(400).json("This Tweet cannot be Tweeted.");
  }else{
    response.status(200).json("This Tweet can be Tweeted.")
  }
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Listening on ' + port);
});
