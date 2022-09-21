import React, { Component } from 'react'
import './Secao.css'
export default class Secao extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="secao">
				<h3>{this.props.titulo}</h3>
				{this.props.children}
			</div>
		)
	}
}