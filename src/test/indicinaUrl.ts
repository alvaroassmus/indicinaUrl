// @ts-ignore
let expect = require("chai").expect;
let request = require("request");

describe("IndicinaURL API", () => {
    describe("Encode Success Response", () => {
        let url = "http://localhost:3000/encode/https://www.google.com";
        it("returns status 200", (done) => {
            request(url, (error, response) => {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
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
        it("returns status 400", (done) => {
            request(url, (error, response) => {
                expect(response.statusCode).to.equal(400);
                done();
            });
        });
        it("{ ERR-MSG : \"The url must have the correct structure\" }", (done) => {
            request(url, (error, response, body) => {
                expect(JSON.parse(body)['ERR-MSG']).to.equal("The url must have the correct structure");
                done();
            });
        });
    });
    describe("Decode Success Response", () => {
        let url = "http://localhost:3000/decode/1TodoGud";
        it("returns status 200", (done) => {
            request(url, (error, response) => {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it("Content: { urlDecoded : \"urlDecoded\", msg : \"Url has been decoded\" }", (done) => {
            request(url, (error, response, body) => {
                expect(JSON.parse(body).urlDecoded).to.be.a('string');
                expect(JSON.parse(body).msg).to.equal("Url has been decoded");
                done();
            });
        });
    });
});