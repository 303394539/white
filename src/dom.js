import Utils from './utils'

import {
	ERROR_NEW_WHITE_ELEMENT
} from './constant'

import Div from './element/div'

const _createFragment = () => {
	
}

class Dom {
	static Div = Div;
	static mount = (whiteElement, container) => {
		if (Utils.isValidElement(whiteElement)) {
			let renderDom = whiteElement.render();
			if(Utils.isValidHTMLElement(renderDom)){
				console.log(renderDom)
			}else{

			}
		} else {
			Utils.validateThrowString(false, ERROR_NEW_WHITE_ELEMENT);
		}
	}
}

export default Dom;