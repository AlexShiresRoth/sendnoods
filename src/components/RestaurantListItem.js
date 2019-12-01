import React from 'react';
import { connect } from 'react-redux';
import '../css/main.css';

class RestaurantListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isMobile: false,
			showMore: false,
		};
	}

	//toggle ramen card info in mobile
	toggleCardDetails() {
		if (!this.state.showMore) {
			this.setState({ showMore: true });
		} else {
			this.setState({ showMore: false });
		}
	}
	//render star rating
	getRating = rating => {
		let newArr = [];

		for (let i = 0; i < rating; i++) {
			newArr.push(<i className="fas fa-star" />);
		}

		return newArr;
	};

	//render price symbol
	getPrice = price => {
		let newArr = [];

		if (price) {
			if (price >= 0) {
				newArr.push(<i className="fas fa-dollar-sign" />);
			}
		} else if (!price) {
			let jsxItem = <p style={{ color: '#000' }}>n/a</p>;
			newArr.push(jsxItem);
		}

		return newArr;
	};

	// determine if restaurant is open or not
	getOpenTime = open => {
		if (open) {
			return <p style={{ color: 'green' }}>Open</p>;
		} else {
			return <p style={{ color: 'red' }}>Closed</p>;
		}
	};

	getPhotos = () => {
		let photoArr = this.props.photos;
		let length = this.props.photos.length;
		let random = Math.floor(Math.random() * length);
		return (
			<figure className="image__item">
				<img src={`${photoArr[random]}`} alt="Ramen" />
			</figure>
		);
	};

	getdata = () => {
		return this.props.spot;
	};
	//change to mobile view depending on screen width
	handleScreenSize = () => {
		this.setState({ isMobile: window.innerWidth < 850 });
	};
	componentDidMount() {
		this.handleScreenSize();
		window.addEventListener('resize', this.handleScreenSize);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleScreenSize);
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.state.isMobile !== prevState.isMobile) {
			window.addEventListener('resize', this.handleScreenSize);
		}
	}
	favoritesList = this.props.favorites.favorites.map(favorite => {
		return favorite.name;
	});

	render() {
		const styles = {
			background: '#ff4500',
			borderRadius: '50%',
			color: '#fff',
			padding: '0.5rem',
		};
		const addStyle = event => {
			event.target.style.background = '#ff4500';
			event.target.style.borderRadius = '50%';
			event.target.style.color = '#fff';
			event.target.style.padding = '0.5rem';
		};

		if (!this.state.isMobile) {
			return (
				<div className={this.props.mode.mode ? 'list--item dark-accent' : 'list--item'} key={this.props.id}>
					<div className="img-container">{this.getPhotos()}</div>
					<div className="ramen__title">{this.props.spot.name}</div>
					<div className="rating__container">
						<div className="rating__container--stars">User Rating:{this.getRating(this.props.rating)}</div>
						<div className="rating__container--total">({this.props.ratingTotal})</div>
					</div>
					<div className={this.props.mode.mode ? 'price__container dark-borders' : 'price__container'}>
						Price:<span>{this.getPrice(this.props.price)}</span>
					</div>
					<div className="hours__container">{this.getOpenTime(this.props.open)}</div>
					<div className="address__container">
						<p>Address: {this.props.spot.formatted_address}</p>
						<div className="address__container--favorite">
							<i
								className={`${
									this.props.mode.mode ? 'far fa-heart dark-icon' : 'far fa-heart light-icon'
								} `}
								onClick={e => {
									this.props.addFavorite(e, this.getdata());
									addStyle(e);
								}}
								style={this.favoritesList.includes(this.props.spot.name) ? { ...styles } : null}
							/>
							<p>Add to favorites</p>
						</div>
					</div>
				</div>
			);
		}

		//return mobile view
		else {
			return (
				<div className={this.props.mode.mode ? 'list--item dark-accent' : 'list--item'} key={this.props.id}>
					<div className="list--item--top">
						<div className="img-container">{this.getPhotos()}</div>
						<div className="ramen__title">
							{this.props.spot.name.length >= 20
								? `${this.props.spot.name.substring(0, 20)}...`
								: this.props.spot.name}
							<div className="ramen__title--toggle">
								<p>{this.state.showMore ? 'Hide Details' : 'Show Details'}</p>
								<i
									className={`${
										this.state.showMore ? 'fas fa-chevron-up ' : 'fas fa-chevron-down '
									} ${this.props.mode.mode ? 'dark-icon' : 'light-icon'}`}
									onClick={() => this.toggleCardDetails()}
								/>
							</div>
						</div>
					</div>
					<div
						className={
							this.props.mode.mode
								? `list--item--middle dark-borders ${this.state.showMore ? ' ' : 'hidden'}`
								: `list--item--middle  ${this.state.showMore ? ' ' : 'hidden'}`
						}
					>
						<div className={`rating__container ${this.state.showMore ? ' ' : 'hidden'}`}>
							<div className="rating__container--stars">
								User Rating:{this.getRating(this.props.rating)}
							</div>
							<div className="rating__container--total">({this.props.ratingTotal})</div>
						</div>
						<div className={`address__container ${this.state.showMore ? ' ' : 'hidden'}`}>
							<p>Address: {this.props.spot.formatted_address}</p>
						</div>
					</div>
					<div className={`list--item--bottom ${this.state.showMore ? ' ' : 'hidden'}`}>
						<div className={`price__container ${this.state.showMore ? ' ' : 'hidden'}`}>
							Price:<span>{this.getPrice(this.props.price)}</span>
						</div>
						<div className={`hours__container ${this.state.showMore ? ' ' : 'hidden'}`}>
							{this.getOpenTime(this.props.open)}
						</div>
						<div className="favorite">
							<i
								className={`${
									this.props.mode.mode ? 'far fa-heart dark-icon' : 'far fa-heart light-icon'
								} ${this.favoritesList.includes(this.props.spot.name) ? 'favorited' : ''}`}
								onClick={e => {
									this.props.addFavorite(e, this.getdata());
									addStyle(e);
								}}
								style={this.favoritesList.includes(this.props.spot.name) ? { ...styles } : null}
							/>
						</div>
					</div>
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		mode: state.mode,
		favorites: state.favorites,
	};
};

export default connect(mapStateToProps)(RestaurantListItem);
