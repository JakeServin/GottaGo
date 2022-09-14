import React, { useState } from 'react'
import {
	Marker,
	InfoWindow,
} from "@react-google-maps/api";
import icon from '../pictures/icon.png'
const divStyle = {
	background: `white`,
	padding: 15,
};

const MarkerGroup = ({ marker }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true)
  }

  const handleCloseClick = () => {
    setIsOpen(false);
  }

  return (
		<>
			<Marker
				onClick={handleClick}
				key={marker._id}
				icon={{
					scaledSize: new window.google.maps.Size(60,60),

					url: icon,
				}}
				position={{
					lat: marker.lat,
					lng: marker.long,
				}}
			/>
			{isOpen ? (
			  <InfoWindow
				  key={`IF${marker._id}`}
					onCloseClick={handleCloseClick}
					position={{
						lat: marker.lat + 0.00001,
						lng: marker.long,
					}}
				>
					<div style={divStyle}>
						<h3>{marker.name}</h3>
						<p>
							<strong>Type:</strong> {marker.type}
						</p>
						<p>{marker.description}</p>
						{/* <a
							className="btn btn-info text-light me-3"
							href={"#"}
							target="blank"
						>
							More info
						</a> */}
						<a
							className="ms-auto btn btn-primary"
							href={`https://www.google.com/maps/dir/?api=1&destination=${marker.lat}%2C${marker.long}`}
							target="blank"
						>
							Get Directions
						</a>
					</div>
				</InfoWindow>
			) : null}
		</>
  );
}

export default MarkerGroup