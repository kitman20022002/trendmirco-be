const {query} = require('express-validator');

const getCitiesValidation = () => {
    return [
        query('city', 'City Required').notEmpty(),
    ]

};

module.exports = {
    getCitiesValidation,
};
