import React, { useState, useEffect } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import icon from "../pictures/icon.png";
import {
	GoogleMap,
	useJsApiLoader,
  Marker,
  LoadScript,
  StandaloneSearchBox
} from "@react-google-maps/api";
import axios from "axios";
const libraries = ["places"];
let mapOptions = {
	   zoom: 15,
};

const NewBathroom = () => {
  const [map, setMap] = React.useState(null);
  const [bathroomName, setBathroomName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('')
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')
  const [center, setCenter] = useState({
    lat: parseFloat(lat),
	lng: parseFloat(lng),
  });
  const [newMarker, setNewMarker] = useState({
    lat: parseFloat(lat),
    lng: parseFloat(lng),
});
const navigate = useNavigate();
const isLoaded = true;

  const containerStyle = {
		width: "100%",
    height: "100%",
    borderRadius: "5px"
  };

  useEffect(() => {
    if (lat != null && lng != null) {
      setCenter({
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      });
      setNewMarker({
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      });
    }
    else {
      setCenter({
        lat: 29.424122,
        lng: -98.493629,
      });
		}
  }, [])
  
 

 

  const handleRightClick = (e) => {
  
		setNewMarker({
			lat: e.latLng.lat(),
			lng: e.latLng.lng(),
		});
  };

  

  const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
  }, []);

  const handleSubmit = async() => {
    const newBathroom = {
      name: bathroomName,
      type: type,
      lat: newMarker.lat,
      long: newMarker.lng,
      description: description
    }
    console.log(newBathroom)
    const response = await axios
		.post("https://gotta-go-app.herokuapp.com/newbathroom", newBathroom)
		.then((res) => res.data);
    if (response != null) navigate('/find')
  }

	return (
		<div className="content-div d-flex justify-content-center align-items-center bg-grey">
			<div className="container m-5 p-5 newbathroom-wrapper bg-white ">
				<h1 className="mb-3">Add new bathroom</h1>
				<div className="row d-flex justify-content-center ">
					<div className="col">
						<div className="form-floating mb-3">
							<input
								type="text"
								className="form-control"
								id="floatingInput"
								placeholder="Park Bathroom"
								value={bathroomName}
								onChange={(e) =>
									setBathroomName(e.target.value)
								}
							/>
							<label for="floatingInput">Bathroom Name</label>
						</div>
						<select
							value={type}
							className="form-select form-select-l mb-3"
							aria-label="Default select example"
							onChange={(e) => setType(e.target.value)}
						>
							<option selected>Select bathroom type</option>
							<option value="Gas Station">Gas Station</option>
							<option value="Store">Store</option>
							<option value="Park">Park</option>
							<option value="Other">Other</option>
						</select>
						<div className="form-floating mb-3">
							<textarea
								value={description}
								className="form-control"
								placeholder="Add a description..."
								id="floatingTextarea2"
								style={{ resize: "none", height: "150px" }}
								rows="4"
								onChange={(e) => setDescription(e.target.value)}
							/>
							<label for="floatingTextarea2">
								Add a description...
							</label>
						</div>
						<div>
							<a
								className="btn btn-success col-12"
								onClick={handleSubmit}
							>
								Submit
							</a>
						</div>
					</div>
					<div className="col">
						{isLoaded ? (
							<LoadScript
								googleMapsApiKey="AIzaSyDXZWVRUBqSZpQk8uAqlPqxjZrQ6i45yCc"
								libraries={libraries}
							>
								<GoogleMap
									options={mapOptions}
									onRightClick={(e) => handleRightClick(e)}
									mapContainerStyle={containerStyle}
									onUnmount={onUnmount}
									center={center}
								>
									{/* Child components, such as markers, info windows, etc. */}
									{newMarker ? (
										<Marker
											icon={
												{
													// scaledSize:
													// 	new window.google.maps.Size(
													// 		50,
													// 		50
													// 	),
													// url: icon,
												}
											}
											position={{
												lat: newMarker.lat,
												lng: newMarker.lng,
											}}
										/>
									) : null}
								</GoogleMap>
							</LoadScript>
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
