var async = require('async');
var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  async.series([
    db.addColumn.bind(db, 'guests', 'allergies', {
        type        : 'string',
        length      : 300
    }),
    db.changeColumn.bind(db, 'guests', 'is_attending_brunch', {defaultValue: false, notNull: true})
  ], callback)
};

exports.down = function(db, callback) {
  async.series([
    db.changeColumn.bind(db, 'guests', 'is_attending_brunch', {defaultValue: true, notNull: true}),
    db.removeColumn.bind(db, 'guests', 'allergies')
  ], callback)
};
