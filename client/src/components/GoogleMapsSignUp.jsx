import { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = () => {
	return <div className="user-marker"></div>;
};
class GoogleMapsSignUp extends Component {
	constructor() {
		super();
		this.state = {
			map: {
				center: {
					lat: 47.97621,
					lng: 7.901442,
				},
				zoom: 12,
			},
			userMarker: {
				lat: null,
				lng: null,
			},
		};
	}

	setUserMarker = (userCoordinates) => {
		this.props.onGetCoordinates(userCoordinates);
		const { lat, lng } = userCoordinates;
		this.setState({
			userMarker: {
				lat: lat,
				lng: lng,
			},
		});
	};

	render() {
		return (
			<div
				style={{
					height: '17em',
					width: '100%',
					border: '1px solid dimgrey',
				}}
			>
				<GoogleMapReact
					bootstrapURLKeys={{
						key: process.env.REACT_APP_GOOGLE_MAPS_API,
					}}
					defaultCenter={this.state.map.center}
					defaultZoom={this.state.map.zoom}
					onClick={this.setUserMarker}
				>
					<Marker lat={this.state.userMarker.lat} lng={this.state.userMarker.lng} />
				</GoogleMapReact>
			</div>
		);
	}
}

export default GoogleMapsSignUp;
