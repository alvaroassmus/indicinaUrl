// @ts-ignore
let express = require("express");
let router = express.Router();
let indicinaUrlController = require('./indicinaUrlController');

router.get('/encode/*', indicinaUrlController.encodeUrl);
router.get('/decode/*', indicinaUrlController.decodeUrl);
router.get('/statistic/*', indicinaUrlController.getUrlUses);
router.get('/*', indicinaUrlController.redirectToOriginalUrl);

module.exports = router;
