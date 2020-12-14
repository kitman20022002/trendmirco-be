const axios = require('axios');
const config = require("../config/app");

exports.getWeatherByCityID = (city_id) => {
    return axios.get(config.metaweatherapi + '/api/location/' + city_id);
};

exports.getCities = (city) => {
    return axios.get(config.metaweatherapi + '/api/location/search/?query=' + city);
}
