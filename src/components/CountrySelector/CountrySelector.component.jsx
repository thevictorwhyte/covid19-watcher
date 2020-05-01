import React from 'react';
import './CountrySelector.styles.css';



const CountrySelector = ({statistics}) => {
	const { Countries } = statistics;
	return(
		<div className='country-selector'>
			<div>
				<select>
					{
						Countries.map((country, i) =>(
							<option key={i} value={country.CountryCode}>{country.Country}</option>
						))
					}
				</select>

				<button>See stats</button>

			</div>
		</div>
	)

}

export default CountrySelector;