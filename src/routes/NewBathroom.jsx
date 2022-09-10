import React, { useState, useEffect } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import icon from "../pictures/icon.png";
import {
	GoogleMap,
	useJsApiLoader,
	Marker,
} from "@react-google-maps/api";
import axios from "axios";


const NewBathroom = () => {
  const [map, setMap] = React.useState(null);
  const [newMarker, setNewMarker] = useState({});
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
  const navigate = useNavigate();

	

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDXZWVRUBqSZpQk8uAqlPqxjZrQ6i45yCc",
  });

  const containerStyle = {
		width: "100%",
    height: "100%",
    borderRadius: "5px"
  };

  useEffect(() => {
    if (lat != null && lng != null) {
      setCenter({
        lat: parseFloat(lat),
        long: parseFloat(lng),
      });
      setNewMarker({
        lat: parseFloat(lat),
        long: parseFloat(lng),
      });
    }
    else {
      setCenter({
        lat: 29.424122,
        lng: -98.493629,
      });
      setNewMarker({
        lat: 29.424122,
        lng: -98.493629,
      })
		}
  }, [])
  
 

 

  const handleRightClick = (e) => {
    console.log(e.latLng.lng());
    setCenter({
		lat: e.latLng.lat(),
		long: e.latLng.lng(),
	});
		setNewMarker({
			lat: e.latLng.lat(),
			long: e.latLng.lng(),
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

  const handleSubmit = async() => {
    const newBathroom = {
      name: bathroomName,
      type: type,
      lat: center.lat,
      long: center.long,
      description: description
    }
    console.log(newBathroom)
    const response = await axios.post("http://localhost:5500/newbathroom", newBathroom).then(res=> res.data);
    if (response != null) navigate('/find')
  }

	return (
		<div>
			<h1 className="">Add new bathroom</h1>
			<div className="container m-5 p-5">
				<div className="row">
					<div className="col">
						<div className="form-floating my-3">
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
						<h4>Right-Click to add bathroom</h4>
						{isLoaded ? (
							<GoogleMap
								onRightClick={(e) => handleRightClick(e)}
								mapContainerStyle={containerStyle}
								center={center}
								onLoad={onLoad}
								onUnmount={onUnmount}
								zoom={10}
							>
								{/* Child components, such as markers, info windows, etc. */}
								{newMarker ? (
									<Marker
										icon={{
											scaledSize:
												new window.google.maps.Size(
													50,
													50
												),
											url: icon,
										}}
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
