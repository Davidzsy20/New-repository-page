var db = require('./dbconfig');
var crypto = require('crypto');

var List = db.Model.extend({
    tableName:'lists',
    hasTimestamps: true,
})