import React, { Component } from 'react'
import $ from 'jquery';
import moment from 'moment';
import Layout from '../components/Layout'
import MonWedLotto from '../components/MonWedLotto'
import Powerball from '../components/Powerball'
import Tattslotto from '../components/Tattslotto'
import OzLotto from '../components/OzLotto'
import '../scss/index.scss'
import '../scss/icon.scss'
import '../scss/daxline-pro.scss'

var logAPI = function ( data ) {
			console.log( data );
		}

class Home extends Component{

 	constructor(){
	    super();
	    const dataStructure = {
	      	numbers: [],
	      	supplementary: [],
	      	drawingDate: ""
	      }

	    this.state = {
	      monWedOz: dataStructure,
	      ozPowerBall: dataStructure,
	      saturdayOz: dataStructure,
	      ozLotto: dataStructure,
	      powerBall: dataStructure
	    };
  }

  componentDidMount(){
	this.getDrawingApi();
	}

	niceDate(date){
		let d = new Date(date.year+'-'+date.month+'='+date.day)
		return moment(d).format('ddd, DD MMM YYYY')
	}
  getDrawingApi(){
    $.when($.ajax({
      url: "https://www.lottoland.com/api/drawings",
      dataType: 'jsonp'
    }))
    .then((result)=>{
    	console.log(result)
        this.setState({
          monWedOz:
	          {
		      	numbers: result.monWedOz.last.numbers,
		      	supplementary: result.monWedOz.last.supplementary,
		      	drawingDate: this.niceDate(result.monWedOz.last.date)
		      },
          ozPowerBall: {
		      	numbers: result.ozPowerBall.last.numbers,
		      	supplementary: result.ozPowerBall.last.powerBall,
		      	drawingDate: this.niceDate(result.ozPowerBall.last.date)
		      },
          saturdayOz: {
		      	numbers: result.saturdayOz.last.numbers,
		      	supplementary: result.saturdayOz.last.supplementary,
		      	drawingDate: this.niceDate(result.saturdayOz.last.date)
		      },
          ozLotto: {
		      	numbers: result.ozLotto.last.numbers,
		      	supplementary: result.ozLotto.last.bonus,
		      	drawingDate: this.niceDate(result.ozLotto.last.date)
		      }
        });
      });
  	}

	render(){
		return (
			<div>
				<Layout>
					<div className="text-title-box">
						<h1><span className="black">Check out</span> latest lotto results</h1>
						<img src="/static/images/smile.png" />
					</div>

					<MonWedLotto data={this.state.monWedOz} />
					

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
							<p>Next availble draw: <i className="icon icon-clock-2 selection-left"></i> 03:47</p>
							<img src="/static/images/kenolandball.png" />
							<div className="floatLeft"><p>$<span className="large">10</span> million</p></div>
						</div>
					</div>

					<div className="clear">
					</div>

					<Powerball data={this.state.ozPowerBall} />
					<Tattslotto data={this.state.saturdayOz} />
					<OzLotto data={this.state.ozLotto} />
				
					<div className="clear">
					</div>

					<div className="text-info-banner">
						<img src="/static/images/kenolandball.png" />
						<div className="textbox">
							<p>
								<span className="bold">Over $350,000 in 6 days to 6 lucky winners!</span> KENOLAND keeps that winning feeling rolling! 
								<span className="green">Learn More</span>
							</p>
						</div>
					</div>

					<div className="text-title-box">
						<h1><span className="black">Check out</span> latest lotto results</h1>
						<img src="/static/images/smile.png" />
					</div>

				</Layout>	
		  	</div>
		)
	}
}


export default Home