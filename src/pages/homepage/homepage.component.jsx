import React from 'react';
import './homepage.styles.css';
import	CountrySelector from '../../components/CountrySelector/CountrySelector.component.jsx';

const Homepage = ({statistics}) => {
	const { TotalConfirmed, TotalDeaths, TotalRecovered, NewRecovered, NewDeaths, NewConfirmed } = statistics.Global;
	if(!TotalConfirmed){
		return <div> nothing dey </div>
	}
	return(
			<div className='page-wrapper'>

				<div className='main-section-wrapper'>

					<div className='header'>
						<h1 className='title align-center'>Covid-19 watcher</h1>
						<span>Latest </span>
					</div>
					<div className='country-selection'>
						<CountrySelector />
						<button>See stats</button>
					</div>

					<div className='total-stats-section'>
						<h2 className='align-center'> Worldwide statistics</h2>
						<div className='total-stats-wrapper'>
							<div className='new-confirmed-cases'>
								<h3 className='total-cases'>New Confirmed Cases</h3>
								<p>{NewConfirmed}</p>
							</div>
							<div className='new-deaths'>
								<h3 className='total-deaths'>New Deaths</h3>
								<p>{NewDeaths}</p>
							</div>
							<div className='new-recovered'>
								<h3 className='total-cases'>New Recovered</h3>
								<p>{NewRecovered}</p>
							</div>
							<div className='total-worldwide-cases'>
								<h3 className='total-cases'>Total Worldwide Cases</h3>
								<p>{TotalConfirmed}</p>
							</div>

							<div className='total-deaths'>
								<h3 className='total-cases'>Total Deaths</h3>
								<p>{TotalDeaths}</p>
							</div>

							<div className='total-recovered'>
								<h3 className='total-cases'>Total Recovered</h3>
								<p>{TotalRecovered}</p>
							</div>
						</div>
						
					</div>

				</div>
				<div className='footer'>
					<span className='align-center'>Developed by Victor Whyte. <strong>More information</strong></span>
				</div>
			</div>
	);
	console.log(statistics);
}


export default Homepage;