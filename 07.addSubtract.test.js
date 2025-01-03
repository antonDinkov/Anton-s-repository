import { expect } from "chai";
import { createCalculator } from "./07.addSubtract.js";

describe ('happy path', function () {
    let calc;

    this.beforeEach(() => {
        calc = createCalculator();
    });

    it ('has correct initial value', () => {
        expect(calc.get()).to.equal(0);
    });
    it ('can add', () => {
        calc.add(1);
        expect(calc.get()).to.equal(1);
    });
    it ('can subtract', () => {
        calc.subtract(1);
        expect(calc.get()).to.equal(-1);
    });
})

describe ('edge cases', function () {
    let calc;

    this.beforeEach(() => {
        calc = createCalculator();
    });

    it ('can parse string numbers', () => {
        calc.add('1');
        expect(calc.get()).to.equal(1);
    });
    it ('can not parse string', () => {
        calc.add('a');
        expect(calc.get()).to.be.NaN;
    });
    it ('can take numbers', () => {
        calc.subtract(1);
        expect(calc.get()).to.equal(-1);
    });
})