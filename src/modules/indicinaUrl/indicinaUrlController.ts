import {Utils} from "../../utils/utils";
import {IndicinaUrlModel} from "./indicinaUrlModel";
import {IndicinaUrlHelper} from "./indicinaUrlHelper";

const serverUrl = "http://localhost:3000/";
let indicinaUrls: Map<string, IndicinaUrlModel> = new Map<string, IndicinaUrlModel>();

exports.encodeUrl = (req, res) => {
    let response = {'ERR-MSG': "The url must have the correct structure"};
    res.status(400);
    if (Utils.isValidURL(req.params[0])) {
        response = {
            // @ts-ignore
            urlEncoded: serverUrl.concat(IndicinaUrlHelper.encodeUrlHelper(indicinaUrls, req.params[0])),
            msg: "Url has been encoded"
        };
        res.status(200);
    }
    res.json(response);
};

exports.decodeUrl = (req, res) => {
    let response = {'ERR-MSG': "The shortUrl does not exist in the system"};
    res.status(400);
    if (indicinaUrls.size > 0) {
        const indicinaUrlModel: IndicinaUrlModel = Utils.findShortUrl(req.params[0], indicinaUrls);
        if (indicinaUrlModel) {
            response = {
                // @ts-ignore
                urlDecoded: indicinaUrlModel.originalUrl,
                msg: "Url has been decoded"
            };
            res.status(200);
        }
    }
    res.json(response);
};