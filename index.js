import * as White from '@/index'

class App extends White.Component{
	constructor(props) {
		super(props);
		this.state = {
			html: 123
		};
	}
	render() {
		return <div>{this.props.a}</div>
	}
}


White.Dom.mount(<App a={1}><App a={2}></App>{321}</App>, document.getElementById('root'))