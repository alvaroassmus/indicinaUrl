// @ts-ignore
let expect = require("chai").expect;
let request = require("request");

describe("IndicinaURL API", () => {
    describe("Encode Success Response", () => {
        let url = "http://localhost:3000/encode/https://www.google.com";
        returnCodeTest(url, 200);
        it("Content: { urlEncoded : \"urlEncoded\", msg : \"Url has been encoded\" }", (done) => {
            request(url, (error, response, body) => {
                expect(JSON.parse(body).urlEncoded).to.be.a('string');
                expect(JSON.parse(body).msg).to.equal("Url has been encoded");
                done();
            });
        });
    });
    describe("Encode Error Response", () => {
        let url = "http://localhost:3000/encode/";
        const errMsg = "The url must have the correct structure";
        returnCodeTest(url, 400);
        errorMessageTest(url, errMsg);
    });
    describe("Decode Success Response", () => {
        let url = "http://localhost:3000/decode/1TodoGud";
        returnCodeTest(url, 200);
        it("Content: { urlDecoded : \"urlDecoded\", msg : \"Url has been decoded\" }", (done) => {
            request(url, (error, response, body) => {
                expect(JSON.parse(body).urlDecoded).to.be.a('string');
                expect(JSON.parse(body).msg).to.equal("Url has been decoded");
                done();
            });
        });
    });
    describe("Decode Error Response", () => {
        let url = "http://localhost:3000/decode/";
        const errMsg = "The shortUrl does not exist in the system";
        returnCodeTest(url, 400);
        errorMessageTest(url, errMsg);
    });
    describe("Statistic Success Response", () => {
        let url = "http://localhost:3000/statistic/1TodoGud";
        returnCodeTest(url, 200);
        it("Content: { statistic : { originalUrl: string, timesUsed: #, date: dateTime }, msg : \"The statistics for the URL\" }", (done) => {
            request(url, (error, response, body) => {
                expect(JSON.parse(body).statistic).to.be.a('object');
                expect(JSON.parse(body).msg).to.equal("The statistics for the URL");
                done();
            });
        });
    });
    describe("Statistic Error Response", () => {
        const url = "http://localhost:3000/statistic/";
        const errMsg = "The shortUrl does not exist in the system";
        returnCodeTest(url, 400);
        errorMessageTest(url, errMsg);
    });
});

function returnCodeTest(url: string, returnCode: number): void {
    it("returns status " + returnCode, (done) => {
        request(url, (error, response) => {
            expect(response.statusCode).to.equal(returnCode);
            done();
        });
    });
}

function errorMessageTest(url: string, errMsg: string): void {
    it("{ ERR-MSG : \"" + errMsg + "\" }", (done) => {
        request(url, (error, response, body) => {
            expect(JSON.parse(body)['ERR-MSG']).to.equal(errMsg);
            done();
        });
    });
}