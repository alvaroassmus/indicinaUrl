// @ts-ignore
let express = require("express");
let router = express.Router();
let indicinaUrlController = require('./indicinaUrlController');

router.get('/encode/*', indicinaUrlController.encodeUrl);
router.get('/decode/*', indicinaUrlController.decodeUrl);
router.get('/statistic/*', indicinaUrlController.getUrlUses);

module.exports = router;
