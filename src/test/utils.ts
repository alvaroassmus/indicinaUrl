// @ts-ignore
import {Utils} from "../utils/utils";
import {IndicinaUrlDTO} from "../modules/indicinaUrl/IndicinaUrlDTO";

let expect = require("chai").expect;
let indicinaUrlModel = require("../modules/indicinaUrl/indicinaUrlModel");

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
            let indicinaUrls: Map<string, IndicinaUrlDTO> = new Map<string, IndicinaUrlDTO>();
            let indicinaUrlDTO: IndicinaUrlDTO = new IndicinaUrlDTO();
            let shortUrl = Utils.generateShortUrl(1);
            indicinaUrlDTO.originalUrl = url;
            indicinaUrls.set(shortUrl, indicinaUrlDTO);
            let resultIndicinaUrlModel: IndicinaUrlDTO = indicinaUrlModel.findShortUrl(shortUrl, indicinaUrls);
            expect(resultIndicinaUrlModel).to.be.a('object');
        });
    });
});