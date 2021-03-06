const {validationResult} = require("express-validator");
const {getCities,getCityByLattLong} = require("../../../../services/metaweatherapi");

exports.index = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }
    const city = req.query.city;

    try {
        const result = await getCities(city);
        res.status(200).send({"data": result.data});
    } catch (e) {
        return res.status(e.response.status).send({"error": e.message});
    }
};

exports.getCurrentCity = async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }

    try {
        const result = await getCityByLattLong(req.query.latt ,  req.query.long);
        res.status(200).send({"data": result.data});
    } catch (e) {
        return res.status(e.response.status).send({"error": e.message});
    }
}
