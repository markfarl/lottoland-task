import React, { Component } from 'react'
import $ from 'jquery'
import moment from 'moment'
import Layout from '../components/Layout'
import MonWedLotto from '../components/MonWedLotto'
import Kenoland from '../components/Kenoland'
import Powerball from '../components/Powerball'
import Tattslotto from '../components/Tattslotto'
import OzLotto from '../components/OzLotto'
import USpower from '../components/USpower'
import WorldMillions from '../components/WorldMillions'
import MegaMillions from '../components/MegaMillions'
import Keno247 from '../components/Keno247'
import FriLotto from '../components/FriLotto'
import '../scss/index.scss'
import '../scss/icon.scss'
import '../scss/daxline-pro.scss'


class Home extends Component{

 	constructor(){
	    super();
	    const dataStructure = {
	      	numbers: [],
	      	supplementary: [],
	      	nr: "",
	      	drawingDate: ""
	      }

	    this.state = {
			monWedOz: dataStructure,
		   	ozPowerBall: dataStructure,
		  	saturdayOz: dataStructure,
		   	ozLotto: dataStructure,
		   	powerBall: dataStructure,
		   	worldMillions: dataStructure,
		   	megaMillions: dataStructure,
		   	keno247: dataStructure,
		   	fridayLotto: dataStructure
	    };
  	}

  	componentDidMount(){
		this.getDrawingApi()
	}

	twoNum(n){
	    return n > 9 ? "" + n: "0" + n;
	}
	niceDate(date){

		let d = new Date(date.year+'-'+this.twoNum(date.month)+'-'+this.twoNum(date.day)+'T00:00:00.000Z')
		return moment(d, "YYYY-MM-DD").format('ddd, DD MMM YYYY')
	}
	niceDateTime(date){
		console.log(date)
		let d = new Date(date.year+'-'+this.twoNum(date.month)+'-'+this.twoNum(date.day)+'T'+this.twoNum(date.hour)+':'+this.twoNum(date.minute)+':00.000Z')
		return moment(d).format('ddd, DD MMM YYYY')+" at "+moment(d).format('HH:MM')
	}
	checkArrayEmpty(array){
		if(array){
			return array
		}else{
			return []
		}
	}
	checkArrayEmptytoString(array){
		if(array){
			return array[0].toString().split('')
		}else{
			return []
		}
	}
  	getDrawingApi(){
	    $.when($.ajax({
 			url: "https://www.lottoland.com/api/drawings",
	   		dataType: 'jsonp'
	    }))
    	.then((result)=>{
    	console.log(result)
        this.setState({
	      	monWedOz:{
	      		nr: result.monWedOz.last.nr,
	      		numbers: this.checkArrayEmpty(result.monWedOz.last.numbers),
		      	supplementary: this.checkArrayEmpty(result.monWedOz.last.supplementary),
		      	drawingDate: this.niceDate(result.monWedOz.last.date)
		      	},
          	ozPowerBall: {
	      		nr: result.ozPowerBall.last.nr,
		      	numbers: this.checkArrayEmpty(result.ozPowerBall.last.numbers),
		      	supplementary: this.checkArrayEmpty(result.ozPowerBall.last.powerBall),
		      	drawingDate: this.niceDate(result.ozPowerBall.last.date)
		      	},
	      	saturdayOz: {
	      		nr: result.saturdayOz.last.nr,
		      	numbers: this.checkArrayEmpty(result.saturdayOz.last.numbers),
		      	supplementary: this.checkArrayEmpty(result.saturdayOz.last.supplementary),
		      	drawingDate: this.niceDate(result.saturdayOz.last.date)
			      },
	      	ozLotto: {
	      		nr: result.ozLotto.last.nr,
		      	numbers: this.checkArrayEmpty(result.ozLotto.last.numbers),
		      	supplementary: this.checkArrayEmpty(result.ozLotto.last.bonus),
		      	drawingDate: this.niceDate(result.ozLotto.last.date)
		      	},
	      	powerBall: {
	      		nr: result.powerBall.last.nr,
		      	numbers: this.checkArrayEmpty(result.powerBall.last.numbers),
		      	supplementary: this.checkArrayEmpty(result.powerBall.last.powerballs),
		      	drawingDate: this.niceDate(result.powerBall.last.date)
		      	},
	      	worldMillions: {
	      		nr: result.worldMillions.last.nr,
		      	numbers: this.checkArrayEmptytoString(result.worldMillions.last.numbers),
		      	drawingDate: this.niceDate(result.worldMillions.last.date)
		      	},
	      	keno247: {
	      		nr: result.keno247.last.nr,
		      	numbers: this.checkArrayEmpty(result.keno247.last.numbers),
		      	drawingDate: this.niceDateTime(result.keno247.last.date)
		      	},
	      	fridayLotto: {
	      		nr: result.fridayLotto.last.nr,
		      	numbers: this.checkArrayEmptytoString(result.fridayLotto.last.numbers),
		      	drawingDate: this.niceDate(result.fridayLotto.last.date)
		      	},
	      	megaMillions: {
	      		nr: result.megaMillions.last.nr,
		      	numbers: this.checkArrayEmpty(result.megaMillions.last.numbers),
		      	supplementary: this.checkArrayEmpty(result.megaMillions.last.megaballs),
		      	drawingDate: this.niceDate(result.megaMillions.last.date)
		      	}
	        })
      })
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
					<Kenoland  />

					<div className="clear top">
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
						<h1><span className="black">Never lose a ticket</span></h1>
						<img src="/static/images/smile.png" />
					</div>

					<USpower data={this.state.powerBall} />

					<WorldMillions data={this.state.worldMillions} />
					<div className="clear top">
					</div>
					<MegaMillions data={this.state.megaMillions} />
					<Keno247 data={this.state.keno247} />
					<FriLotto data={this.state.fridayLotto} />

				</Layout>	
		  	</div>
		)
	}
}


export default Home