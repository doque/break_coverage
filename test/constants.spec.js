import { expect } from 'chai';

const constants = require('../constants.js');

describe('Constants', () => {
	it('returns 500 for car', () => {
		expect(constants.car).to.equal(500);
	});

	it('returns 300 for motorcycle', () => {
		expect(constants.motorcycle).to.equal(300);
	});

});
