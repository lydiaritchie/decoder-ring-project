// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() tests", () => {
   /* it("should convert input to all lowercase", () => {
        const message = "Message";
        const actual = polybius(message);
        const expected = "message";

        expect(actual).to.equal(expected);
    });  */

    it("should return 42 if the char is i or j", () => {
        const input = "ij";
        const actual = polybius(input);
        const expected = "4242";

        expect(actual).to.equal(expected);
    });

    it("should encode the word hello", () => {
        const input = "hello";
        const actual = polybius(input);
        const expected = "3251131343";

        expect(actual).to.equal(expected);
    });

    it("should decode the number string of hello", () => {
        const input = "3251131343";
        const actual = polybius(input, false);
        const expected = "hello";

        expect(actual).to.equal(expected);
    });

    it("should decode with spaces the message h e l l o", () => {
        const input = "32 51 13 13 43";
        const actual = polybius(input, false);
        const expected = "h e l l o";

        expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
        const input = "325113134"
        const actual = polybius(input, false);
        const expected = false;

        expect(actual).to.equal(expected);
    });
});