import React, { Component } from 'react'
//import {Card, Icon} from 'semantic-ui-react'
import Layout from '../components/Layout'
import '../scss/index.scss';

class Home extends Component{

	render(){
		return (
			<div>
				<Layout>
					<div className="lotto-card mon-wed-lotto">
						<div className="img">
							<div className="head-text">
								<p className="title">
								Mon &amp; Wed lotto<br />								
							</p>
							<p className="sub-title">
								Monday and Wednesday Lotto
							</p>
							</div>
							
							<div className="rectangle">
							
								<i className="fi-arrow-left selection-left"></i>	
									<div className="inner-text">
										<span className="title">Draw</span><br />
										<span className="title-date">Wed 4th</span>
									</div>	
								<i className="fi-arrow-right selection-right"></i>
															
							</div>
						</div>
					</div>
					<div className="lotto-card">
						<div className="img">
							<p className="title">
								Mon &amp; Wed lotto
							</p>
						</div>
					</div>
					<div className="lotto-card">About Page2</div>
					<div className="lotto-card">About Page3</div>
				</Layout>	
		  	</div>
		)
	}
}


export default Home