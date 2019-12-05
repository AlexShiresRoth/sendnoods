import React from 'react';
import { FavoriteList } from './FavoriteList';
import { connect } from 'react-redux';

import '../css/main.css';

class ResultsNav extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			hovered: false,
			favorites: this.props.favorites.favorites,
			isMobile: false,
		};
		this.handleScreenSize = this.handleScreenSize.bind(this);
	}

	sortResults = event => {
		this.props.sortResults(event);
	};
	getInputValue = event => {
		this.props.setValue(event);
	};
	setHover() {
		this.setState({ hovered: true });
	}
	setHoverLeave() {
		this.setState({ hovered: false });
	}
	handleScreenSize() {
		this.setState({ isMobile: window.innerWidth < 850 });
	}

	componentDidMount() {
		this.handleScreenSize();
		window.addEventListener('resize', this.handleScreenSize);
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.favorites.favorites !== prevProps.favorites.favorites) {
			this.setState({ favorites: this.props.favorites.favorites });
		}
		if (this.state.isMobile !== prevState.isMobile) {
			window.addEventListener('resize', this.handleScreenSize);
		}
	}

	render() {
		return !this.props.loading && this.props.ramenSpots.length > 0 ? (
			<div className={this.props.mode.mode ? 'results__nav dark' : 'results__nav'}>
				<div
					className="results__nav--left"
					onMouseEnter={() => this.setHover()}
					onMouseLeave={() => this.setHoverLeave()}
				>
					<h2>Favorite Spots</h2>
					<i className="fas fa-chevron-down" />
					{this.state.hovered && this.props.favorited ? (
						<FavoriteList
							favorites={this.state.favorites}
							themeMode={this.props.mode.mode}
							removeFavorite={this.props.removeFavorite}
						/>
					) : null}
				</div>
				{!this.state.isMobile ? (
					<div className="results__nav--middle">
						<p>
							<span style={{ color: '#ff4500' }}>{this.props.restaurants.restaurants.length}</span>{' '}
							Results for <span style={{ color: '#ff4500' }}>{this.props.input.toUpperCase()}</span>{' '}
						</p>
					</div>
				) : null}

				<div className="results__nav--right">
					<form onSubmit={this.sortResults}>
						<select onChange={this.getInputValue}>
							<option value="no-filter">No Filter</option>
							<option value="best-rated">Best Rated</option>
							<option value="open">Open Now</option>
							<option value="rating-amount">Most Rated</option>
							<option value="price-low-to-high">Price: Low to High</option>
							<option value="price-high-to-low">Price: High to Low</option>
						</select>
						<button onClick={this.sortResults}>Filter</button>
					</form>
				</div>
			</div>
		) : (
			<div className={this.props.mode.mode ? 'results__nav dark' : 'results__nav'}>
				<div
					className="results__nav--left"
					onMouseEnter={() => this.setHover()}
					onMouseLeave={() => this.setHoverLeave()}
				>
					<p>Favorite Spots</p>
					<i className="fas fa-chevron-down" />
					{this.state.hovered && this.props.favorited ? (
						<FavoriteList
							favorites={this.state.favorites}
							themeMode={this.props.mode.mode}
							removeFavorite={this.props.removeFavorite}
						/>
					) : null}
				</div>
				{!this.state.isMobile ? (
					<div className="results__nav--middle">
						<p>Results Will Be Shown Below.</p>
					</div>
				) : null}
				<div className="results__nav--right">
					<select onChange={this.getInputValue}>
						<option value="no-filter">No Filter</option>
						<option value="best-rated">Best Rated</option>
						<option value="open">Open Now</option>
						<option value="rating-amount">Most Rated</option>
						<option value="price-low-to-high">Price: Low to High</option>
						<option value="price-high-to-low">Price: High to Low</option>
					</select>
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		mode: state.mode,
		favorites: state.favorites,
		restaurants: state.restaurants,
	};
};

export default connect(mapStateToProps)(ResultsNav);
