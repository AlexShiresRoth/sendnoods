import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import Marker from './Marker';

import { maps_api_key } from '../config/keys';

import '../css/main.css';

class RamenSpots extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			lat: null,
			lng: null,
			userLat: null,
			userLng: null,
			center: {
				lat: null,
				lng: null,
			},
			zoom: 12,
		};
	}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position =>
				this.setState({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
					userLat: position.coords.latitude,
					userLng: position.coords.longitude,
				}),
			err => this.setState({ errMessage: err.message })
		);
	}

	componentDidUpdate(prevProps) {
		if (this.props.locations !== prevProps.locations) {
			if (this.props.locations.length > 0) {
				this.setState({
					lat: this.props.locations[0].geometry.location.lat,
					lng: this.props.locations[0].geometry.location.lng,
				});
			}
		}
	}

	render() {
		const renderMarkers = this.props.locations.map(location => {
			return (
				<Marker
					lat={location.geometry.location.lat}
					lng={location.geometry.location.lng}
					key={location.id}
					locationInfo={location}
					text="Ramen Spot"
				/>
			);
		});

		return (
			<div className="middle__container">
				<GoogleMapReact
					bootstrapURLKeys={{ key: maps_api_key }}
					defaultCenter={{ ...this.state.center }}
					defaultZoom={this.state.zoom}
					center={{ lat: this.state.lat, lng: this.state.lng }}
					yesIWantToUseGoogleMapApiInternals
				>
					{this.props.locations.length > 0 ? renderMarkers : []}

					<LocationMarker lat={this.state.userLat} lng={this.state.userLng} text="Current User Location" />
				</GoogleMapReact>
			</div>
		);
	}
}

export default RamenSpots;
