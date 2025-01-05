import { expect } from "chai";
import { lookupChar } from "./03.charLookup.js";

describe ('lookupChar happy path', function () {
    it ('returns the correct char', () => {
        expect(lookupChar('abcd', 2)).to.equal('c');
    })
})
describe ('edge cases', function () {
    it('returns the answer Incorrect index', () => {
        expect(lookupChar('',0)).to.equal('Incorrect index');
    })
    it('returns the answer Incorrect index', () => {
        expect(lookupChar('a',1)).to.equal('Incorrect index');
    })
    it('returns the answer Incorrect index', () => {
        expect(lookupChar('a',-1)).to.equal('Incorrect index');
    })
})
describe ('validation', function () {
    it('returns undefined when is not a string', () => {
        expect(lookupChar(['a', 'b', 'c'],1)).to.be.undefined;
    })
    it('returns undefined when is not a number', () => {
        expect(lookupChar('abc','1')).to.be.undefined;
    })
    it('returns undefined when is not a number and not a string', () => {
        expect(lookupChar(1,'1')).to.be.undefined;
    })
    it('returns undefined when is floating numb', () => {
        expect(lookupChar('abc',1.1)).to.be.undefined;
    })
})
describe ('test overloading', () => {
    let testStr = '[abcdefg],[abcdedg]';
    it ('returns the correct char', () => {
        expect(lookupChar(testStr, 2)).to.equal('b');
    })
})