import PropTypes from 'prop-types'

import Utils from './utils'

import {
	WHITE_ELEMENT_TYPE
} from './constant'

class Component {
	__type__ = WHITE_ELEMENT_TYPE;
	constructor(props) {}
	static defaultProps = {};
	static propTypes = {
		onClick: PropTypes.func
	};
	setState(obj = {}, callback = () => {}) {

	}
	render() {}
}

export default Component