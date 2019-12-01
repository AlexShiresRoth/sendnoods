import React from 'react';
import { connect } from 'react-redux';
import '../css/main.css';

class Marker extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			hovered: false,
		};
	}

	imgStyles = {
		height: '1.5rem',
		width: '1.5rem',
	};

	setHoverStateEnter = () => {
		this.setState({ hovered: true });
	};
	setHoverStateLeave = () => {
		this.setState({ hovered: false });
	};

	showInfo = () => {
		if (this.state.hovered) {
			const lat = this.props.locationInfo.geometry.location.lat;
			const lng = this.props.locationInfo.geometry.location.lng;
			const place_id = this.props.locationInfo.place_id;
			return (
				<div className={this.props.mode.mode ? 'ramen-popup dark' : 'ramen-popup'}>
					<p>{this.props.locationInfo.name}</p>
					<a href={`https://www.google.com/maps/dir/?api=1&query=${lat},${lng}&query_place_id=${place_id}`}>
						{this.props.locationInfo.formatted_address.substring(0, 40)}...
					</a>
				</div>
			);
		}
	};

	render() {
		return (
			<div
				style={{ position: 'relative' }}
				onMouseEnter={this.setHoverStateEnter}
				onMouseLeave={this.setHoverStateLeave}
				onClick={this.setHoverStateEnter}
			>
				<figure>
					<img src={require(`../images/ramen.png`)} alt={this.props.text} style={this.imgStyles} />
				</figure>
				{this.showInfo()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		mode: state.mode,
	};
};

export default connect(mapStateToProps)(Marker);
