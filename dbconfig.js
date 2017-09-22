var path = require('path');
var kenx = require('knex')({
    client: 'sqlite3',
    connection: {
        filename:path.join(__dirname, './sqlite')
    },
    useNullAsDefault: true
});
var db = require('bookshelf')(knex);

db.knex.schema.hasTable('lists').then(function(exists) {
    if(!exists) {
        db.kenx.schema.createTable('lists',function(list) {
            list.increments('id').primary();
            list.string('title',20);
            list.string('visits',100)
        }).then(function(table) {
            console.log('Created Table', table)
        })
    }
    })
    module.exports = db;