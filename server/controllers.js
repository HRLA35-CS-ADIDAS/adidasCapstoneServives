
const { findAll } = require('../db/dbHelpers');

exports.getReviews = (req, res, next) => {

    findAll()
    .then((data) => {
        res.status(200).json({
            sucess: true,
            data: data
        })
    })
    .catch((err) => {
        res.status(500)
        .json({
            sucess: false,
            error: err
        })
    })
}