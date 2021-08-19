// @ts-ignore
import {Utils} from "../utils/utils";
import {IndicinaUrlModel} from "../modules/indicinaUrl/indicinaUrlModel";

let expect = require("chai").expect;

describe("IndicinaURL UTILS", () => {
    describe("Utils.isValidURL", () => {
        it("returns true on valid url", () => {
            let url = "http://localhost:3000/encode/https://www.google.com";
            let result = Utils.isValidURL(url);
            expect(result).to.be.true;
        });
    });
    describe("Utils.isValidURL", () => {
        it("returns false on invalid url", () => {
            let url = "http://localhost:3000/encode/";
            let result = Utils.isValidURL(url);
            expect(result).to.be.false;
        });
    });
    describe("Utils.generateShortUrl", () => {
        it("returns short url", () => {
            let shortUrl: string = Utils.generateShortUrl(1);
            expect(shortUrl).to.be.a('string');
        });
    });
    describe("Utils.findShortUrl", () => {
        it("returns IndicinaUrlModel for shortUrl", () => {
            let url = "https://www.google.com";
            let indicinaUrls: Map<string, IndicinaUrlModel> = new Map<string, IndicinaUrlModel>();
            let indicinaUrlModel: IndicinaUrlModel = new IndicinaUrlModel();
            let shortUrl = Utils.generateShortUrl(1);
            indicinaUrlModel.originalUrl = url;
            indicinaUrls.set(shortUrl, indicinaUrlModel);
            let resultIndicinaUrlModel: IndicinaUrlModel = Utils.findShortUrl(shortUrl, indicinaUrls);
            expect(resultIndicinaUrlModel).to.be.a('object');
        });
    });
});