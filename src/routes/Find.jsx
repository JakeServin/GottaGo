import React, { useState, useEffect } from "react";
import { Wrapper, Status,  } from "@googlemaps/react-wrapper";
import {
	GoogleMap,
	useJsApiLoader,
	Marker,
	InfoWindow,
	StandaloneSearchBox,
	LoadScript
} from "@react-google-maps/api";
import axios from "axios";
import MarkerGroup from "../components/MarkerGroup";
import NewMarker from "../components/NewMarker";

const containerStyle = {
	width: "100vw",
	height: "90vh",
};

let center = {
	lat: 29.424122,
	lng: -98.493629,
};

var mapOptions = {
	zoom: 15,
};

const Find = () => {
	const isLoaded  = true

  const [map, setMap] = React.useState(null);
	const [newMarker, setNewMarker] = useState();
	const [search, setSearch] = useState('');
	const [center, setCenter] = useState({
		lat: 29.424122,
		lng: -98.493629,
	});

	const [markers, setMarkers] = useState([]);
	useEffect(() => {
		const getBathrooms = async () => {
			await axios
				.get("http://localhost:5500/bathrooms")
				.then((res) => setMarkers(res.data));
		};
		getBathrooms();
		console.log(markers);
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

	const handleSearchClick = async () => {
		await axios
			.get(
				`http://api.positionstack.com/v1/forward?access_key=33c4db967cfae0438ac6e8b0db34bd12&query=${search}`
			)
			.then((res) => {
				console.log(res.data.data[0]);
				setCenter({
					lat: res.data.data[0].latitude,
					lng: res.data.data[0].longitude,
				});
				console.log(center);
			});
	}

	

	return isLoaded ? (
		<LoadScript
			googleMapsApiKey="AIzaSyDXZWVRUBqSZpQk8uAqlPqxjZrQ6i45yCc"
			libraries={["places"]}
		>
			<GoogleMap
				className="body"
				options={mapOptions}
				onRightClick={(e) => handleRightClick(e)}
				mapContainerStyle={containerStyle}
				onUnmount={onUnmount}
				center={center}
			>
				{/* Child components, such as markers, info windows, etc. */}
				<>
					{markers.map((marker) => {
						return (
							<MarkerGroup key={marker.name} marker={marker} />
						);
					})}
					{newMarker ? <NewMarker marker={newMarker} /> : null}
				</>
				<StandaloneSearchBox
				>
					<div className="ms-auto text-center">
						<input
							className="mt-1 form-input "
							type="text"
							placeholder="Search for your location"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							onBlur={(e) => setSearch(e.target.value)}
							style={{
								boxSizing: `border-box`,
								border: `1px solid transparent`,
								width: `240px`,
								height: `32px`,
								padding: `0 12px`,
								borderRadius: `3px`,
								boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
								fontSize: `14px`,
								outline: `none`,
								textOverflow: `ellipses`,
								position: "relative",

							}}
						/>
						<button
							className="m-1 btn btn-primary"
							style={{
								position: "relative",
							}}
							onClick={handleSearchClick}
						>
							Search
						</button>
					</div>
				</StandaloneSearchBox>
			</GoogleMap>
		</LoadScript>
	) : (
		<></>
	);
};

export default Find;
