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

const Libraries = ['places']

const containerStyle = {
	width: "100vw",
	height: "100%",
};

let center = {
	lat: 29.424122,
	lng: -98.493629,
};

let mapOptions = {
	zoom: 15,
};

// Ensure touches occur rapidly
const delay = 500
// Sequential touches must be in close vicinity
const minZoomTouchDelta = 10

// Track state of the last touch
let lastTapAt = 0
let lastClientX = 0
let lastClientY = 0

const preventDoubleTapZoom = (event)=> {
  // Exit early if this involves more than one finger (e.g. pinch to zoom)
  if (event.touches.length > 1) {
    return
  }

  const tapAt = new Date().getTime()
  const timeDiff = tapAt - lastTapAt
  const { clientX, clientY } = event.touches[0]
  const xDiff = Math.abs(lastClientX - clientX)
  const yDiff = Math.abs(lastClientY - clientY)
  if (
    xDiff < minZoomTouchDelta &&
    yDiff < minZoomTouchDelta &&
    event.touches.length === 1 &&
    timeDiff < delay
  ) {
    event.preventDefault()
    // Trigger a fake click for the tap we just prevented
    event.target.click()
  }
  lastClientX = clientX
  lastClientY = clientY
  lastTapAt = tapAt
}

const Find = () => {
	const isLoaded  = true

  const [map, setMap] = React.useState(null);
	const [newMarker, setNewMarker] = useState();
	const [search, setSearch] = useState('');
	const [center, setCenter] = useState({
		lat: 29.424122,
		lng: -98.493629,
	});
	const [zoom, setZoom] = useState(15)
	const [markers, setMarkers] = useState([]);
	

	useEffect(() => {
		const getBathrooms = async () => {
			await axios
				.get("http://localhost:5500/bathrooms")
				.then((res) => setMarkers(res.data));
		};
		getBathrooms();
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
				`http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_POSITION_STACK_KEY}&query=${search}`
			)
			.then((res) => {
				console.log(res.data.data[0]);
				setCenter({
					lat: res.data.data[0].latitude,
					lng: res.data.data[0].longitude,
				});
				setZoom(15)
				console.log(center);
			});
	}

	

	return isLoaded ? (
		<div className="content-div">
			<LoadScript
				googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}
				libraries={Libraries}
			>
				<GoogleMap
					className="body"
					options={mapOptions}
					onRightClick={(e) => handleRightClick(e)}
					mapContainerStyle={containerStyle}
					onUnmount={onUnmount}
					center={center}
					zoom={zoom}
				>
					{/* Child components, such as markers, info windows, etc. */}
					<>
						{markers.map((marker) => {
							return (
								<MarkerGroup key={marker._id} marker={marker} />
							);
						})}
						{newMarker ? <NewMarker marker={newMarker} /> : null}
					</>
					<StandaloneSearchBox onTouchStart={preventDoubleTapZoom}>
						<div className="find-wrapper col text-center d-flex justify-content-center align-items-center flex-grow">
							<div
								className="align-self-end"
								style={{
									position: "relative",
								}}
							>
								<input
									className=" form-input "
									type="text"
									placeholder="Search for your location"
									value={search}
									onChange={(e) => setSearch(e.target.value)}
									onBlur={(e) => setSearch(e.target.value)}
									style={{
										float: "end",
										boxSizing: `border-box`,
										border: `1px solid transparent`,
										width: `210px`,
										height: `32px`,
										padding: `0 12px`,
										margin: ` 0`,
										borderRadius: `3px`,
										boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
										fontSize: `14px`,
										outline: `none`,
										textOverflow: `ellipses`,
										position: "relative",
										bottom: "0",
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
							{/* <span
								className="float-right"
								style={{
									margin:"0px",
									fontSize:"larger",
									fontWeight:"",
									position: "relative",
								}}
							>
								Right Click to add new bathroom
							</span> */}
						</div>
					</StandaloneSearchBox>
				</GoogleMap>
			</LoadScript>
		</div>
	) : (
		<></>
	);
};

export default Find;
