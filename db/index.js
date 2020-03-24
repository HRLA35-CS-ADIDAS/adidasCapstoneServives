require('dotenv').config();
var mongoose = require('mongoose');
var Review = require('./schemas/reviewSchema');

mongoose.connect(`mongodb://${process.env.DB_HOST}/adidasreviews`, {useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, `CONNECTION ERROR`.red))
db.once('open', () => {
    console.log(`DB ON`.yellow.bold);
})

module.exports = db;