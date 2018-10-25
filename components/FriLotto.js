import React, {Component} from 'react'


class FriLotto extends Component{

	render(){
		return(
			<div className="lotto-card fri-lotto">
						<div className="borderLeft">
						</div>
						<div className="img">
							<div className="head-text">
								<img src="/static/images/frilotto.png" />
								<p className="title">
								Fri Lotto						
								</p>
								<p className="sub-top-title">
									$50 Million
								</p>

								<p className="sub-time-title">
									<i className="icon icon-clock-2"></i> 2 Std. 47 Min.
								</p>								
							</div>
							
							<div className="rectangle">
							
								<div className="icon icon-arrow-67 selection-left"></div>	
									<div className="inner-text">
										<span className="title">Draw {this.props.data.nr}</span><br />
										<span className="title-date">{this.props.data.drawingDate}</span>
									</div>	
								<div className="icon icon-arrow-68 selection-right"></div>	
															
							</div>
						</div>

							<div className="lotto-numbers">
								<p className="title">Winning numbers</p>
								<div className="number-circle-container">
									{this.props.data.numbers.map(function(name, index){
					                    return <div key={index} className="number-circle">{name}</div>;
					                  })}									
								</div>
							</div>
						
						<div className="clear"></div>
						<div className="card-links">
							<a>Prize details</a> | <a>Help &amp; FAQ</a>
						</div>
					</div>
			)
	}

}

export default FriLotto