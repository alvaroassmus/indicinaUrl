let express = require("express");
let app = express();

app.get("/encode/*", function (req, res) {
    const url = { urlEncoded : "urlEncoded", msg : "Url has been encoded" };
    res.json(url);
});

app.listen(3000);