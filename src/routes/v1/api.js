const express = require('express');
const router = new express.Router();

const citiesControllers = require('../../controllers/api/v1/clients/cities');
const weathersControllers = require('../../controllers/api/v1/clients/weathers');
const citiesValidation = require("../../validations/citiesValidations");
const weatherValidation = require("../../validations/weatherValidations");

router.get('/cities', citiesValidation.getCitiesValidation(), citiesControllers.index);
router.get('/weathers', weatherValidation.getWeathersValidation(), weathersControllers.index);

module.exports = router;
