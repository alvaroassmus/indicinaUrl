// @ts-ignore
let express = require("express");
let router = express.Router();
let indicinaUrlController = require('./indicinaUrlController');

router.get('/encode/*', indicinaUrlController.encodeUrl);

module.exports = router;
