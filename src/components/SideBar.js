import React from 'react';
import RamenList from './RamenList';
import ResultsNav from './ResultsNav';
import { connect } from 'react-redux';
import { addToFavorites } from './actions/favorites';

import '../css/main.css';

class SideBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			favorites: this.favorites,
		};
		this.addFavorite = this.addFavorite.bind(this);
		this.removeFavorite = this.removeFavorite.bind(this);
	}

	favorites = JSON.parse(localStorage.getItem('favorites')) || [];

	mapFavorites = () => {
		this.props.addToFavorites(this.state.favorites);
	};
	componentDidMount() {
		this.mapFavorites();
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.favorites !== prevState.favorites) {
			this.setState({ favorites: this.favorites });
			this.mapFavorites();
		}
	}

	addFavorite = (e, data) => {
		const favExist = this.favorites.map(fav => fav.id);
		//need to check array if name already exists
		if (![...favExist].includes(data.id) && this.favorites.length <= 20) {
			this.favorites.unshift(data);
			localStorage.setItem('favorites', JSON.stringify(this.favorites));
		}
	};
	removeFavorite = (e, data) => {
		const favExist = this.favorites.map(fav => fav.id);
		if ([...favExist].includes(data.id)) {
			this.favorites.splice([...favExist].indexOf(data.id), 1);
			localStorage.setItem('favorites', JSON.stringify(this.favorites));
			this.setState({ favorites: this.favorites });
			e.target.parentNode.style.visibility = 'hidden';
			e.target.style.visibility = 'hidden';
			e.target.parentNode.style.padding = '0';
			e.target.parentNode.style.maxHeight = '0';
		}
	};

	render() {
		return (
			<div className={this.props.mode.mode ? 'side-bar-left dark' : 'side-bar-left'}>
				<ResultsNav
					input={this.props.input}
					loading={this.props.loading}
					restaurants={this.props.ramenSpots}
					filter={this.props.filter}
					sortResults={this.props.sortResults}
					setValue={this.props.onChange}
					favorited={this.state.favorites}
					removeFavorite={this.removeFavorite}
				/>
				<RamenList
					restaurants={this.props.ramenSpots}
					loading={this.props.loading}
					input={this.props.input}
					addFavorite={this.addFavorite}
					favorites={this.favorites}
				/>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		mode: state.mode,
		favorites: state.favorites,
	};
};

export default connect(
	mapStateToProps,
	{ addToFavorites }
)(SideBar);
