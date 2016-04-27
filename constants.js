import { condition } from './condition.js';

const sizes = {
	car: 500,
	motorcycle: condition(true) ? 300 : 600
};

module.exports = sizes;
