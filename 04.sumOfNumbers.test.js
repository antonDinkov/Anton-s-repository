import { expect } from "chai";
import { sum } from "./04.sumNumbers.js";

describe('Functionality of the code', function () {
    it('Corect calculations', () => {
        expect(sum([1,1])).to.equal(2);
    })

    it('Should casts strings', () => {
        expect(sum(['1',1])).to.equal(2);
    })

    it('doesnt works with strings', () => {
        expect(sum(['a', 'b'])).to.be.NaN;
    })
})