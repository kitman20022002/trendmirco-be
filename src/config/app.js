const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    node_env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8000,
    api: {
        prefix: process.env.API_PREFIX || '/api/v1',
    },
    metaweatherapi: process.env.METAWEATHERAPI || 'https://www.metaweather.com'
};
