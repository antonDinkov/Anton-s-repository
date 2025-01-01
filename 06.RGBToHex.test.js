import { expect } from "chai";
import { rgbToHexColor } from "./06.RGBToHex.js";

describe ('rgb happy path', function () {
    it ('returns rgb as string', () => {
        expect(rgbToHexColor(4,5,6)).to.equal('#040506')
    })
    it ('returns rgb as 000', () => {
        expect(rgbToHexColor(0,0,0)).to.equal('#000000')
    })
    it ('returns rgb as 255255255', () => {
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF')
    })
    it ('does not returns Rgb as 255+', () => {
        expect(rgbToHexColor(256,255,255)).to.be.undefined
    })
    it ('does not returns Rgb as -', () => {
        expect(rgbToHexColor(-1,255,255)).to.be.undefined
    })
    it ('does not returns rGb as 255+', () => {
        expect(rgbToHexColor(255,256,255)).to.be.undefined
    })
    it ('does not returns rGb as -', () => {
        expect(rgbToHexColor(255,-1,255)).to.be.undefined
    })
    it ('does not returns rgB as 255+', () => {
        expect(rgbToHexColor(255,256,256)).to.be.undefined
    })
    it ('does not returns rgB as -', () => {
        expect(rgbToHexColor(255,255,-1)).to.be.undefined
    })
})