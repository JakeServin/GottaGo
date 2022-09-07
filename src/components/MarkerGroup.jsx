import React, {useState} from 'react'
import {
	Marker,
	InfoWindow,
} from "@react-google-maps/api";

const divStyle = {
	background: `white`,
	border: `1px solid #ccc`,
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
				key={marker.name}
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
            <p><strong>Type:</strong> {marker.type}</p>
						<p>{marker.description}</p>
            <a
              className='btn btn-info text-light me-3'
              href={'#'}
							target="blank"
						>
							More info
						</a>
            <a
              className='ms-auto btn btn-primary'
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