const {validationResult} = require("express-validator");
const {getWeatherByCityID} = require("../../../../services/metaweatherapi");

exports.index = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }
    const city_id = req.query.id;
    try {
        const result = await getWeatherByCityID(city_id);
        res.status(200).send({"data": result.data});
    } catch (e) {
        return res.status(e.response.status).send({"error": e.message});
    }
};

