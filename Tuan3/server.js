var express = require('express');
var server = express();

server.set('view engine', 'ejs');

// index page 
server.get('/', function(req, res) {
    res.render('pages/index');
});
// time page
server.get('/time', function(req, res) {
    res.render('pages/time', {});
});
// day page
server.get('/day', function(req, res) {
    res.render('pages/day', {});
});

server.listen(8080, function() {
  console.log("Listening on 8080");
});