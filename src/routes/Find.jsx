import React, { useState, useEffect } from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import axios from 'axios';

const containerStyle = {
	width: "100vw",
	height: "100vh",
};

const center = {
	lat: 29.424122,
	lng: -98.493629,
};


const Find = () => {
   const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyDXZWVRUBqSZpQk8uAqlPqxjZrQ6i45yCc",
   });

  const [map, setMap] = React.useState(null);
  
  const [markers, setMarkers] = useState([]);
  useEffect(() => {
    const getBathrooms = async () => {
		await axios
			.get("http://127.0.0.1:5500/bathrooms")
			.then((res) => setMarkers(res.data));
	};
    getBathrooms();
    console.log(markers)
  }, [])
  

   const onLoad = React.useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);
		setMap(map);
   }, []);

   const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
   }, []);

  const handleClick = () => {
    alert()
  }
  
  return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={10}
			onLoad={onLoad}
			onUnmount={onUnmount}
		>
			{/* Child components, such as markers, info windows, etc. */}
      <>
        {markers.map((marker) => {
          const coord = {
            lat: marker.lat,
            lng: marker.long
          }
          console.log(marker.long)
          return (
				<Marker
					key={marker.name}
					position={{
						lat: marker.lat,
						lng: marker.long
					}}
				/>
			);
        })}
        {/* <Marker
          onClick={handleClick}
					key="TEST MARKER"
					position={{
						lat: 29.424122,
						lng: -98.493629,
					}}
				/> */}
			</>
		</GoogleMap>
  ) : (
		<></>
  );
}

export default Find