var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    rating: Number,
    recommendProduct: Boolean,
    sizeRating: Number,
    widthRating: Number,
    comfortRating: Number,
    qualityRating: Number,
    opinion: String,
    review: String,
    fotoUrl: String,
    nickname: String,
    verified: Boolean,
    email: String,
    CreatedAt: Date,
    helpful: { yes: Number, no: Number },
    product_id: String
}, {
    timestamps: { createdAt: 'created_at' } 
});

var Review = mongoose.model('Review', reviewSchema );

module.exports = Review;