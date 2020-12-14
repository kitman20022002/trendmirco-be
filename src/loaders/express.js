const express = require('express');
const cors = require('cors');
const apiRouter = require('../../src/routes/v1/api');
const config = require('../../src/config/app');
const rateLimit = require("express-rate-limit");
const helmet = require('helmet');
const createGracefulShutdownMiddleware = require('express-graceful-shutdown');
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});


const corsOptions = {
    origin: process.env.CROS,
    optionsSuccessStatus: 200
}

module.exports = async (app) => {
    app.use(cors(corsOptions));
    app.use(helmet());
    app.use(express.json());
    app.use(limiter);
    app.use(config.api.prefix, apiRouter);
    app.use(createGracefulShutdownMiddleware(app, {forceTimeout: 30000}));
    return app;
};
