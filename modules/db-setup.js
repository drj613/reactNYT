const db = require('./models');

const mongoose = require('mongoose');
// mongoose.connect();


db.mongoose = mongoose;

module.exports = db;