// @ts-ignore
let express = require("express");
let router = express.Router();
let indicinaUrlController = require('./indicinaUrlController');

router.get('/encode/*', indicinaUrlController.encodeUrl);
router.get('/decode/*', indicinaUrlController.decodeUrl);

module.exports = router;
