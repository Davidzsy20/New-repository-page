var express = require('express');
// var list = require('./list');

app = express();
app.listen(3000, function() {
    console.log('database is listening on 3000')
})
app.get('/', function(req, res) {
    res.send('ads')
}) 
// list.fetchAll()
// .then(function(lists) {
// res.send('hello world')
// })