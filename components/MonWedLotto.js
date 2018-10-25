import React, {Component} from 'react'


class MonWedLotto extends Component{

	static async getInitialProps(props){
		console.log(props)
	}

	render(){
		return(
			<div className="lotto-card two-thirds mon-wed-lotto">
						<div className="borderLeft">
						</div>
						<div className="img">
							<div className="head-text">
								<p className="title">
								Mon &amp; Wed lotto<br />								
								</p>
								<p className="sub-title">
									Monday and Wednesday Lotto {this.props.data.numbers}
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
							<div className="lotto-numbers">
								<p className="title">Supps</p>
								<div className="number-circle-container">
									{this.props.data.supplementary.map(function(name, index){
					                    return <div key={index} className="number-circle red">{name}</div>;
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

export default MonWedLotto