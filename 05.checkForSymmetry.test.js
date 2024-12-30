import { expect } from "chai";
import { isSymmetric } from "./05.checkForSymmetry.js";

describe('happy path', function() {
    
    it('should return true for symmetric array', () => {
        expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
    });
});
describe ('edge cases', function () {
    it('should return true for an empty array', () => {
        expect(isSymmetric([])).to.be.true; 
    });
    
    it('should return true for an array with one element', () => {
        expect(isSymmetric([1])).to.be.true;
    });
})
describe ('validations', function () {
    it('should return false for non-array inputs', () => {
        expect(isSymmetric(123)).to.be.false;
        expect(isSymmetric('string')).to.be.false;
        expect(isSymmetric(null)).to.be.false;
    });
})
describe ('test overloading', function () {
    it('should return true for symmetric arrays of mixed types', () => {
        expect(isSymmetric([1, 'a', 1])).to.be.true;
    });
    
    it('should return false for non-symmetric arrays with mixed types', () => {
        expect(isSymmetric([1, 'a', 'b'])).to.be.false;
    });
    it ('should return false for symmetric arrays with mixed types', () => {
        expect(isSymmetric(['1', 2, 1])).to.be.false;
    })
})