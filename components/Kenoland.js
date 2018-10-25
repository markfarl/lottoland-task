import React, {Component} from 'react'
import moment from 'moment'

class Kenoland extends Component{

	constructor(){
	    super();
	    this.state = {
		  	seconds: '00',  
		 	minutes: '4' 
		}

		this.secondsRemaining
		this.intervalHandle;
		this.startCountDown = this.startCountDown.bind(this);
		this.tick = this.tick.bind(this);

	}

	componentDidMount(){
		this.startCountDown()
	}
  
   	tick() {
		var min = Math.floor(this.secondsRemaining / 60);
		var sec = this.secondsRemaining - (min * 60);
		this.setState({
		  	minutes: min,
		  	seconds: sec
		})
		if (sec < 10) {
		  	this.setState({
		    	seconds: "0" + this.state.seconds,
		  	})
		}
		if (min < 10) {
			this.setState({
		  		value: "0" + min,
		 	})
		}
		if (min === 0 & sec === 0) {
			clearInterval(this.intervalHandle);
		}
		this.secondsRemaining--
	}

	startCountDown() {
		this.intervalHandle = setInterval(this.tick, 1000);
		let time = this.state.minutes;
		this.secondsRemaining = time * 60;
	}

	

	render(){
		return(
			<div className="lotto-card kenoland">
				<div className="img header">
					<div className="head-text">
						<p className="title">
						KENOLAND								
						</p>
						<p className="sub-title">
							Draws every 4 minutes
						</p>
					</div>
				</div>
				<div className="body">
					<p>Next availble draw: <i className="icon icon-clock-2"></i> {this.state.minutes} : {this.state.seconds}</p>
					<img src="/static/images/kenolandball.png" />
					<div className="floatLeft"><p>$<span className="large">10</span> million</p></div>
					<div className="bet-button">
						<h1>1 Quicky $1.00</h1>
						<p>Bet Now</p>
					</div>
				</div>
			</div>
		)
	}

}

export default Kenoland;