import { expect } from "chai";
import { mathEnforcer } from "./04.mathEnforcer.js";

describe('mathenforcer', function () {
    describe ('addFive', function () {
        it('should return correct result with a non-number parameter', function () {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
        })
        it('should accept negative values', function () {
            expect(mathEnforcer.addFive(-5)).to.equal(0);;
        })
        it('should accept floating numb', function () {
            expect(mathEnforcer.addFive(5.1)).to.be.closeTo(10.1, 0.01);
        })
    })

    describe ('substractTen', function () {
        it('should return correct result with a non-number parameter', function () {
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
        })
        it('should accept negative values', function () {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        })
        it('should accept floating numb', function () {
            expect(mathEnforcer.subtractTen(10.1)).to.be.closeTo(0.1, 0.01);
        })
    })

    describe ('sum', function () {
        it('should return correct result with a non-number parameter', function () {
            expect(mathEnforcer.sum('5', '10')).to.be.undefined;
        })
        it('should accept negative values', function () {
            expect(mathEnforcer.sum(-5, -5)).to.equal(-10);
        })
        it('should accept floating numb', function () {
            expect(mathEnforcer.addFive(5, 1.1)).to.be.closeTo(6.1, 0.01);
        })
    })
})