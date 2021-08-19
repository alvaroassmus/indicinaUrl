import {Utils} from "../../utils/utils";
import {IndicinaUrlDTO} from "./IndicinaUrlDTO";

let indicinaUrls: Map<string, IndicinaUrlDTO> = new Map<string, IndicinaUrlDTO>();
let indicinaUrlModel = require("./indicinaUrlModel");

exports.encodeUrl = (req, res) => {
    let response = {'ERR-MSG': "The url must have the correct structure"};
    res.status(400);
    if (Utils.isValidURL(req.params[0])) {
        response = {
            // @ts-ignore
            urlEncoded: indicinaUrlModel.encodeUrl(indicinaUrls, req.params[0]),
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
        const indicinaUrlDTO: IndicinaUrlDTO = indicinaUrlModel.findShortUrl(req.params[0], indicinaUrls);
        if (indicinaUrlDTO) {
            response = {
                // @ts-ignore
                urlDecoded: indicinaUrlDTO.originalUrl,
                msg: "Url has been decoded"
            };
            res.status(200);
        }
    }
    res.json(response);
};

exports.getUrlUses = (req, res) => {
    let response = {'ERR-MSG': "The shortUrl does not exist in the system"};
    res.status(400);
    if (indicinaUrls.size > 0) {
        const indicinaUrlDTO: IndicinaUrlDTO = indicinaUrlModel.findShortUrl(req.params[0], indicinaUrls);
        if (indicinaUrlDTO) {
            response = {
                // @ts-ignore
                statistic: {
                    originalUrl: indicinaUrlDTO.originalUrl,
                    timesUsed: indicinaUrlDTO.timesUsed,
                    lastDateUsed: new Date(indicinaUrlDTO.lastTimeUsed)
                },
                msg: "The statistics for the URL"
            };
            res.status(200);
        }
    }
    res.json(response);
};

exports.redirectToOriginalUrl = (req, res) => {
    let response = {'ERR-MSG': "The shortUrl does not exist in the system"};
    res.status(400);
    if (indicinaUrls.size > 0) {
        const indicinaUrlDTO: IndicinaUrlDTO = indicinaUrlModel.updateShortUrlUse(req.params[0], indicinaUrls);
        if (indicinaUrlDTO) {
            res.status(200);
            res.redirect(indicinaUrlDTO.originalUrl);
        } else {
            res.json(response);
        }
    } else {
        res.json(response);
    }
};