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
});