var Review = require('./schemas/reviewSchema');


exports.findAll = () => Review.find({});