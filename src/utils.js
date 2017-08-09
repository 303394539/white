import {
	WHITE_ELEMENT_TYPE,
	HTML_ELEMENT_TYPE
} from './constant'

const _uuid = (len, radix) => {
	let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
	let uuid = [],
		i;
	radix = radix || chars.length;

	if (len) {
		// Compact form
		for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
	} else {
		// rfc4122, version 4 form
		let r;

		// rfc4122 requires these characters
		uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
		uuid[14] = '4';

		// Fill in random data.  At i==19 set the high bits of clock sequence as
		// per rfc4122, sec. 4.1.5
		for (i = 0; i < 36; i++) {
			if (!uuid[i]) {
				r = 0 | Math.random() * 16;
				uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
			}
		}
	}

	return uuid.join('');
}

const _getWhitePropertyName = (name = "") => {
	return `__${name ? name : uuid(6)}__`;
}

const _isWindow = (obj) => {
	return obj != null && obj === obj.window;
};

const _defineProperty = Object.defineProperty;
const _defineProperties = Object.defineProperties;

const OBJECT_PROTOTYPE = Object.prototype;
const EXP_TYPE = /\s([a-z|A-Z]+)/;

const _type = (obj) => {
	return OBJECT_PROTOTYPE.toString.call(obj).match(EXP_TYPE)[1].toLowerCase();
}

export default {
	uuid: _uuid,
	getWhitePropertyName: _getWhitePropertyName,
	defineProperty: _defineProperty,
	defineProperties: _defineProperties,
	isWindow: _isWindow,
	type: _type,
	isObject(obj) {
		return _type(obj) === 'object';
	},
	isString(obj) {
		return _type(obj) === 'string';
	},
	isPlainObject(obj) {
		return obj && !obj.nodeType && !_isWindow(obj) && typeof obj === 'object' && !Object.getPrototypeOf(obj) && obj.constructor && typeof obj.constructor === 'function';
	},
	isValidElement(obj) {
		return typeof obj === 'object' && obj !== null && obj[_getWhitePropertyName('type')] === WHITE_ELEMENT_TYPE;
	},
	isValidHTMLElement(obj) {
		return typeof obj === 'object' && obj !== null && obj[_getWhitePropertyName('htmlType')] === HTML_ELEMENT_TYPE;
	},
	validateThrowString(bool = true, string = "") {
		if (!bool) {
			throw Error(string)
		}
	}
}