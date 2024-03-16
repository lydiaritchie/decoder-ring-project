const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("should decode and encode with the caesar cipher", () => {
    it("should wrap around the shifted index if > 25", () => {
        const message = "xyz";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "abc";

        expect(actual).to.equal(expected);
    });

    it("should decode the message hello world", () => {
        const message = "rovvy gybvn";
        const shift = 10;
        const actual = caesar(message, shift, false);
        const expected = "hello world";

        expect(actual).to.equal(expected);
    });

});
