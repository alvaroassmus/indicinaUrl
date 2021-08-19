import {IndicinaUrlModel} from "./indicinaUrlModel";
import {Utils} from "../../utils/utils";

export class IndicinaUrlHelper {

    constructor() {
    }

    public static encodeUrlHelper(indicinaUrls: Map<string, IndicinaUrlModel>, originalUrl: string): string {
        let indicinaUrlModel: IndicinaUrlModel = new IndicinaUrlModel();
        let shortUrl = Utils.generateShortUrl(indicinaUrls.size + 1);
        indicinaUrlModel.originalUrl = originalUrl;
        indicinaUrls.set(shortUrl, indicinaUrlModel);
        return shortUrl;
    }
}