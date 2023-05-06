const express = require('express');

const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    console.log('what is going on');
    res.status(200).send({ 
        projectId: process.env.LOCIZE_PROJECT_ID, 
        apiKey: process.env.LOCIZE_API_KEY,
        referenceLng: process.env.LOCIZE_REF_LAN,
        version: process.env.LOCIZE_APP_VERSION });
});

// export { apiRouter };
module.exports = apiRouter;
// export default apiRouter;