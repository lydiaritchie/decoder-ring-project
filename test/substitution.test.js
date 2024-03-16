const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("should properly decode and encode with the substitution cipher", () => {
    it("should properly handle spaces", () => {
        //the substitution alphabet and message is borrowed from the thinkful tests
        //this tests for spacing
      const message = "mess age";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet);
      const expected = "ykrr pik";

      expect(actual).to.equal(expected);
    });

    it("should decode the message", () => {
      const message = "ykrrpik";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });


});