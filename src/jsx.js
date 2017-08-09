import PropTypes from 'prop-types'

import Dom from './dom'
import Utils from './utils'

import {
	ERROR_PROPS_NOUPDATE,
	ERROR_NEW_WHITE_ELEMENT
} from './constant'

export default (elementType, props, ...children) => {
	let elementClass = elementType;
	if (Utils.isString(elementType)) {
		elementClass = Dom[elementType.replace(/^\S/, all => {
			return all.toUpperCase();
		})];
	}
	if (elementClass && elementClass.constructor) {
		if(Utils.isObject(elementClass.defaultProps)){
			props = {
				...elementClass.defaultProps,
				...props
			}
		}
		if(Utils.isObject(props) && Utils.isObject(elementClass.propTypes)){
			PropTypes.checkPropTypes(elementClass.propTypes, props, 'props', elementClass.name);
		}
		let element = new elementClass(props);
		if (Utils.isValidElement(element)) {
			Utils.defineProperty(element, "props", {
				set() {
					Utils.validateThrowString(false, ERROR_PROPS_NOUPDATE);
				},
				get() {
					return {
						...props,
						children
					};
				}
			})
			return element;
		} else {
			Utils.validateThrowString(false, ERROR_NEW_WHITE_ELEMENT);
		}
	} else {
		Utils.validateThrowString(false, ERROR_NEW_WHITE_ELEMENT);
	}
}