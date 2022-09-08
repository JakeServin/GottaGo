import React, { useState } from "react";
import {
	GoogleMap,
	useJsApiLoader,
	Marker,
	InfoWindow,
} from "@react-google-maps/api";

var mapOptions = {
	disableDoubleClickZoom: true, // <---
};


const NewBathroom = () => {
  const [map, setMap] = React.useState(null);
  const [newMarker, setNewMarker] = useState();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDXZWVRUBqSZpQk8uAqlPqxjZrQ6i45yCc",
  });

  const containerStyle = {
		width: "100%",
    height: "100%",
    borderRadius: "5px"
  };

  const center = {
		lat: 29.424122,
		lng: -98.493629,
  };

  const handleDblClick = (e) => {
		setNewMarker({
			name: "Add new bathroom here",
			lat: e.latLng.lat(),
			long: e.latLng.lng(),
			description: "Click here to add a new bathroom",
		});
  };

  const onLoad = React.useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);
		setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
  }, []);

	return (
		<div>
			<h1 className="">Add new bathroom</h1>
			<div className="container m-5 p-5">
				<div className="row">
					<div className="col">
						<div className="form-floating mb-3">
							<input
								type="text"
								className="form-control"
								id="floatingInput"
								placeholder="Park Bathroom"
							/>
							<label for="floatingInput">Bathroom Name</label>
						</div>
						<select
							className="form-select form-select-l mb-3"
							aria-label="Default select example"
						>
							<option selected>Select bathroom type</option>
							<option value="1">Gas Station</option>
							<option value="2">Store</option>
							<option value="3">Park</option>
							<option value="4">Other</option>
						</select>
						<div className="form-floating mb-3">
							<textarea
								className="form-control"
								placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ resize: "none", height:"150px" }}
                rows="4"
							></textarea>
							<label for="floatingTextarea2">
								Add a description...
							</label>
						</div>
						<div>
							<a className="btn btn-success col-12">Submit</a>
						</div>
					</div>
					<div className="col">
						{isLoaded ? (
              <GoogleMap
                options={mapOptions}
								onDblClick={(e) => handleDblClick(e)}
								mapContainerStyle={containerStyle}
								center={center}
								onLoad={onLoad}
								onUnmount={onUnmount}
							>
								{/* Child components, such as markers, info windows, etc. */}
								{newMarker ? (
									<Marker
										position={{
											lat: newMarker.lat,
											lng: newMarker.long,
										}}
									/>
								) : null}
							</GoogleMap>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewBathroom;
