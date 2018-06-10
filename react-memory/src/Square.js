import React, {Component} from 'react';
class Square extends Component {

	render() {
		return(
			<li className={this.props.classname} onClick={() => this.props.onClick()}>
			<div className="per"  style={{background:this.props.bgcolor}}></div>
			</li>
		)
	}
}

export default Square;