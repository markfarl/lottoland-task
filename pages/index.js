import React, { Component } from 'react'
import $ from 'jquery';
import Layout from '../components/Layout'
import MonWedLotto from '../components/MonWedLotto'
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
	      ozPowerBall: dataStructure
	    };
  }

  componentDidMount(){
	this.getDrawingApi();
	}

	niceDate(date){
		console.log(date)
		let options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
		let d = new Date(date.year+'-'+date.month+'='+date.day)
		return d.toLocaleDateString("en-US",options)
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
		      } ,
          ozPowerBall: result.ozPowerBall
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
							<span>Next availble draw: <div className="icon icon-clock-2 selection-left"></div> 03:47</span>
							<img src="/static/images/kenolandball.png" />
							<div className="floatLeft"><p>$<span className="large">10</span> million</p></div>
						</div>
					</div>
					<div className="lotto-card">
					<div className="borderLeft">
						</div>About Page2</div>
					<div className="lotto-card">
					<div className="borderLeft">
						</div>About Page3</div>
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
				</Layout>	
		  	</div>
		)
	}
}


export default Home