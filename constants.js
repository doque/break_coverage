import { condition } from './condition.jsx';

const sizes = {
	car: 500,
	motorcycle: condition(true) ? 300 : 600
};

module.exports = sizes;
