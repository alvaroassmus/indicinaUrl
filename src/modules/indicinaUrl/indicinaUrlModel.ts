import {IndicinaUrlDTO} from "./IndicinaUrlDTO";
import {Utils} from "../../utils/utils";

const serverUrl = "http://localhost:3000/";

exports.encodeUrl = (indicinaUrls: Map<string, IndicinaUrlDTO>, originalUrl: string) => {
    let indicinaUrlDTO: IndicinaUrlDTO = new IndicinaUrlDTO();
    let shortUrl = Utils.generateShortUrl(indicinaUrls.size + 1);
    indicinaUrlDTO.originalUrl = originalUrl;
    indicinaUrls.set(shortUrl, indicinaUrlDTO);
    return serverUrl.concat(shortUrl);
};

exports.findShortUrl = (shortUrl: string, indicinaUrls: Map<string, IndicinaUrlDTO>) => {
    return <IndicinaUrlDTO>indicinaUrls.get(shortUrl);
};