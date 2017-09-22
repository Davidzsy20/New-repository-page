var db = require('./dbconfig');
var List = require('./link');
var Links = new db.Collection();

Links.model = Link; 

module.exports = Links;