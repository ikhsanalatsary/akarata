import chai from 'chai';
import Helper from './spec_helper.js';
import Stemmer from './../index.js';
const should = chai.should();
const expect = chai.expect;
const ShouldStem = Helper.ShouldTransform;
const ShouldNotTransform = Helper.ShouldNotTransform;
const fs = require('fs');
const reversedLemas = JSON.parse(fs.readFileSync(__dirname + '/reversed.json'));

describe("Reversed Lemas", () => {
	describe("test again reversed lemas from KBBI dictionary", () => {
    for (var i in reversedLemas) {
		  it("'" + reversedLemas[i].kata + "' should be stemmed to '" + reversedLemas[i].lema + "'", () => {
		  	ShouldStem(Stemmer.stem, reversedLemas[i].kata, reversedLemas[i].lema);
		  });
    }
	});
});
