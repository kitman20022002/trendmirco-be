const {query} = require('express-validator');

const getCitiesValidation = () => {
    return [
        query('city', 'City Required').notEmpty(),
    ]
};

const getCurrentCityValidation = () => {
    return [
        query('latt', 'Latt Required').notEmpty(),
        query('long', 'Long Required').notEmpty(),
    ]
};

module.exports = {
    getCitiesValidation,
    getCurrentCityValidation
};
