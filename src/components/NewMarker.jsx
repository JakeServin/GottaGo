import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Marker, InfoWindow } from "@react-google-maps/api";
import icon from "../pictures/icon.png";

const divStyle = {
	background: `white`,
	padding: "15px",
};

const NewMarker = ({ marker }) => {
	const [isOpen, setIsOpen] = useState(true);
	const handleClick = () => {
		setIsOpen(true);
	};

	const handleCloseClick = () => {
		setIsOpen(false);
	};

	return (
		<>
			<Marker
				onClick={handleClick}
				key={marker.name}
				icon={{
					scaledSize: new window.google.maps.Size(50, 50),
					url: icon,
				}}
				position={{
					lat: marker.lat,
					lng: marker.long,
				}}
			/>
			{isOpen ? (
				<InfoWindow
					onCloseClick={handleCloseClick}
					position={{
						lat: marker.lat + 0.00001,
						lng: marker.long,
					}}
				>
					<div style={divStyle}>
						<h3>{marker.name}</h3>
						<p>Click the button below to share a new bathroom!</p>
						<Link
							className="ms-auto btn btn-success"
							to={`/newbathroom?lat=${marker.lat}&lng=${marker.long}`}
							target="blank"
						>
							Add new bathroom
						</Link>
					</div>
				</InfoWindow>
			) : null}
		</>
	);
};

export default NewMarker;
