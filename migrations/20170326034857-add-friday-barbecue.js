var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function (db, callback) {
    db.addColumn('guests', 'is_attending_barbecue', {
        type        : 'boolean',
        defaultValue: false,
        notNull     : true
    }, callback);
};

exports.down = function (db, callback) {
    db.removeColumn('guests', 'is_attending_barbecue', callback);
};
