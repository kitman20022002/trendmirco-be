const {query} = require('express-validator');

const getWeathersValidation = () => {
    return [
        query('id', 'missing ID').notEmpty(),
    ]
};

module.exports = {
    getWeathersValidation,
};
