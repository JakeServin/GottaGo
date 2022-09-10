import React, { useState, useEffect } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {
	GoogleMap,
	useJsApiLoader,
	Marker,
	InfoWindow,
} from "@react-google-maps/api";
import axios from "axios";
import MarkerGroup from "../components/MarkerGroup";
import NewMarker from "../components/NewMarker";

const containerStyle = {
	width: "100vw",
	height: "90vh",
};

const center = {
	lat: 29.424122,
	lng: -98.493629,
};

var mapOptions = {
};

const Find = () => {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyDXZWVRUBqSZpQk8uAqlPqxjZrQ6i45yCc",
	});

  const [map, setMap] = React.useState(null);
  const [newMarker, setNewMarker] = useState();

	const [markers, setMarkers] = useState([]);
	useEffect(() => {
		const getBathrooms = async () => {
			await axios
				.get("http://127.0.0.1:5500/bathrooms")
				.then((res) => setMarkers(res.data));
		};
		getBathrooms();
		console.log(markers);
	}, []);

	const onLoad = React.useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);
		setMap(map);
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);

	const handleRightClick = (e) => {
    setNewMarker({
		name: "Add new bathroom here",
		lat: e.latLng.lat(),
		long: e.latLng.lng(),
		description: "Click here to add a new bathroom",
	});
	};

	return isLoaded ? (
		<div style={{ height: "100%" }}>
			<GoogleMap
				className="body"
				options={mapOptions}
				onRightClick={(e) => handleRightClick(e)}
				mapContainerStyle={containerStyle}
				onLoad={onLoad}
				onUnmount={onUnmount}
			>
				{/* Child components, such as markers, info windows, etc. */}
				<>
					{markers.map((marker) => {
						return <MarkerGroup marker={marker} />;
					})}
					{newMarker ? <NewMarker marker={newMarker} /> : null}
				</>
			</GoogleMap>
		</div>
	) : (
		<></>
	);
};

export default Find;
