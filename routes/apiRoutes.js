const express = require('express');

const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    res.status(200).send({ 
        projectId: process.env.LOCIZE_PROJECT_ID, 
        apiKey: process.env.LOCIZE_API_KEY,
        referenceLng: process.env.LOCIZE_REF_LAN,
        version: process.env.LOCIZE_APP_VERSION
    });
});

module.exports = apiRouter;