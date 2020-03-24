const router = require('express').Router();
const { getReviews } = require('./controllers')

router
    .route('/')
    .get(getReviews)

module.exports = router;