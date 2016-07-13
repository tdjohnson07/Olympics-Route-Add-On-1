var express = require('express');
var path = require('path');

var olympics = require('./routes/olympics.js');

var app = express();

app.get('/', function(request, response){
 response.sendFile(path.join(__dirname, './public/views/index.html'));
})

//Static files
app.use(express.static('public'));

//Routers
app.use('/olympics', olympics);

var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});
