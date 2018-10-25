import React, {Component} from 'react'


class Header extends Component{
	render(){
		return(
			<div className="nav-bar">
				<img className="logo" src="/static/images/logo.png"/>
				<div className="join-button">
					JOIN
				</div>
				<div className="promo-text">
					Home of lotto betting
				</div>
			</div>
			)
	}

}

export default Header