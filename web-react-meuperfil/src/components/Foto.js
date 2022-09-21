import React, { Component } from 'react'
import './Foto.css'
export default class Foto extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="foto">
				<img src={this.props.img_src} />
			</div>
		)
	}
}