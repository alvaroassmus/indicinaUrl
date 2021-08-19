import {IndicinaUrlDTO} from "./IndicinaUrlDTO";
import {Utils} from "../../utils/utils";
const config = require("../../utils/config");

exports.encodeUrl = (indicinaUrls: Map<string, IndicinaUrlDTO>, originalUrl: string) => {
    let indicinaUrlDTO: IndicinaUrlDTO = new IndicinaUrlDTO();
    let shortUrl = Utils.generateShortUrl(indicinaUrls.size + 1);
    indicinaUrlDTO.originalUrl = originalUrl;
    indicinaUrls.set(shortUrl, indicinaUrlDTO);
    return config.getServerUrl().concat(shortUrl);
};

exports.findShortUrl = (shortUrl: string, indicinaUrls: Map<string, IndicinaUrlDTO>) => {
    return <IndicinaUrlDTO>indicinaUrls.get(shortUrl);
};

exports.updateShortUrlUse = (shortUrl: string, indicinaUrls: Map<string, IndicinaUrlDTO>) => {
    let indicinaUrlDTO: IndicinaUrlDTO =  <IndicinaUrlDTO>indicinaUrls.get(shortUrl);
    if (indicinaUrlDTO) {
        indicinaUrlDTO.timesUsed += 1;
        indicinaUrlDTO.lastTimeUsed = new Date().toString();
    }
    return indicinaUrlDTO;
};