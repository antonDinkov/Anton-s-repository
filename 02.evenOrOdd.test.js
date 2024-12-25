import { expect } from "chai";
import { isOddOrEven } from "./02.venOrOdd.js";

describe ('happy path', function () {
    it ('works with even strings', () => {
        expect(isOddOrEven('happy')).to.equal('odd');
    })
})

describe ('edge cases', function () {

})

describe ('validation', function () {

})

describe ('test overloading', function () {

})