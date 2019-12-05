import React, { lazy } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getRestaurants } from './actions/restaurants';
import { api_key } from '../config/keys';

const SideBar = lazy(() => import('./SideBar'));
const Form = lazy(() => import('./Form'));
const RamenSpots = lazy(() => import('./RamenSpots'));

//add a location box to each marker
//make it mobile responsive DONE
//add pagination
class MainContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			location: '',
			restaurantsArr: [],
			loading: false,
			pageLoad: true,
			filter: '',
			unFiltered: [],
		};
	}

	onInputChange = event => {
		//get location value from input
		this.setState({
			location: event.target.value,
		});
	};

	setValue = event => {
		event.preventDefault();

		this.setState({
			filter: event.target.value,
		});
	};

	resaurantQuery = async event => {
		event.preventDefault();

		this.setState({ loading: true, restaurantsArr: [] });

		if (this.state.location !== '') {
			const key = api_key;
			const crossOrigin = 'https://secret-ocean-49799.herokuapp.com/';
			try {
				const response = await axios.get(
					`${crossOrigin}https://maps.googleapis.com/maps/api/place/textsearch/json?query=ramen+restaurants+in+${this.state.location}&key=${key}`
				);

				const res = response.data.results;

				this.setState({
					restaurantsArr: res,
					loading: false,
					unFiltered: res,
				});

				this.props.getRestaurants(res);
			} catch (error) {
				console.log(error);
				this.setState({ restaurantsArr: [], loading: false, unFiltered: [] });
				alert(error.message);
			}
		} else {
			//create better handling than just an alert;
			alert('Please enter a destination');
			this.setState({ restaurantsArr: [], loading: false, unFiltered: [] });
		}
	};

	inputReset = event => {
		event.preventDefault();

		this.setState({
			location: '',
			restaurantsArr: [],
			loading: false,
			unFiltered: [],
		});
	};

	clearInput = () => {
		if (this.state.loading && this.state.locations.length > 0) {
			this.inputReset();
		}
	};
	sortResults = event => {
		event.preventDefault();
		let results = this.state.restaurantsArr;

		let unFiltered = this.state.unFiltered;

		switch (this.state.filter.toLowerCase()) {
			case 'no-filter':
				let noFilter = [...unFiltered];
				this.setState({
					restaurantsArr: noFilter,
				});
				break;
			case 'rating-amount':
				let ratingFilter = [...results];
				ratingFilter.sort((a, b) => {
					return b.user_ratings_total - a.user_ratings_total;
				});
				this.setState({ restaurantsArr: ratingFilter });
				break;
			case 'best-rated':
				let bestRated = [...results];
				bestRated.sort((a, b) => b.rating - a.rating);
				this.setState({ restaurantsArr: bestRated });
				break;
			case 'price-low-to-high':
				let lowHigh = [...results];
				lowHigh.sort((a, b) => a.price_level - b.price_level);
				this.setState({ restaurantsArr: lowHigh });
				break;
			case 'price-high-to-low':
				let highLow = [...results];
				highLow.sort((a, b) => b.price_level - a.price_level);
				this.setState({ restaurantsArr: highLow });
				break;
			case 'open':
				let open = [...results];

				this.setState({
					restaurantsArr: open.filter(openNow => openNow.opening_hours.open_now === true),
				});
				break;
			default:
				break;
		}
	};
	render() {
		return (
			<>
				<div className={this.props.mode.mode ? 'main__container dark' : 'main__container'}>
					<Form
						formDefault={this.resaurantQuery}
						formValue={this.state.location}
						formChange={this.onInputChange}
						onClick={this.inputReset}
						clearInput={this.clearInput}
						toggleMode={this.toggleMode}
					/>
					<RamenSpots locations={this.state.restaurantsArr} />
					<div className={this.props.mode.mode ? 'bottom__container dark' : 'bottom__container'}>
						<SideBar
							ramenSpots={this.state.restaurantsArr}
							loading={this.state.loading}
							input={this.state.location}
							filter={this.state.filter}
							onChange={this.setValue}
							sortResults={this.sortResults}
						/>
					</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = state => {
	console.log(state);
	return {
		mode: state.mode,
		restaurants: state.restaurants,
	};
};
export default connect(mapStateToProps, { getRestaurants })(MainContainer);
