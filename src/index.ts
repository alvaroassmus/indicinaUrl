let express = require("express");
let app = express();

app.get("/encode/*", function (req, res) {
    if(isValidURL(req.params[0])) {
        const url = {urlEncoded: "urlEncoded", msg: "Url has been encoded"};
        res.json(url);
    } else {
        const err = {'ERR-MSG': "The url must have the correct structure"};
        res.status(400);
        res.json(err);
    }
});

function isValidURL(url: string) {
    let res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null);
}

app.listen(3000);