import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "800px",
};

const center = {
  lat: 34.0195,
  lng: -118.4912,
};

const option = {
  mapTypeControl: false,
  streetViewControl: false,
};
const PrideMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const [userPosition, setUserPosition] = useState({
    lat: 34.0195,
    lng: -118.4912,
  });

  const locations = [
    { lat: 31.56391, lng: -118.154312 },
    { lat: 33.718234, lng: -118.363181 },
    { lat: 33.727111, lng: -118.371124 },
    { lat: 33.848588, lng: -118.209834 },
    { lat: 33.851702, lng: -118.216968 },
    { lat: 34.671264, lng: -118.863657 },
    { lat: 35.304724, lng: -118.662905 },
    { lat: 36.817685, lng: -118.699196 },
    { lat: 36.828611, lng: -118.790222 },
    { lat: 37.75, lng: -118.116667 },
    { lat: 37.759859, lng: -118.128708 },
    { lat: 37.765015, lng: -118.133858 },
    { lat: 37.770104, lng: -118.143299 },
    { lat: 37.7737, lng: -118.145187 },
    { lat: 37.774785, lng: -118.137978 },
    { lat: 37.819616, lng: -118.968119 },
    { lat: 38.330766, lng: -118.695692 },
    { lat: 39.927193, lng: -118.053218 },
    { lat: 41.330162, lng: -118.865694 },
    { lat: 42.734358, lng: -118.439506 },
    { lat: 42.734358, lng: -118.501315 },
    { lat: 42.735258, lng: -118.438 },
    { lat: 43.999792, lng: -118.463352 },
  ];
  const changePlacement = (e) => {
    setUserPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    // setUserPosition({ lat: x, lng: y });
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={userPosition}
      zoom={10}
      option={option}
      onClick={changePlacement}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker
        icon={{
          path: "M17.684,7.925l-5.131-0.67L10.329,2.57c-0.131-0.275-0.527-0.275-0.658,0L7.447,7.255l-5.131,0.67C2.014,7.964,1.892,8.333,2.113,8.54l3.76,3.568L4.924,17.21c-0.056,0.297,0.261,0.525,0.533,0.379L10,15.109l4.543,2.479c0.273,0.153,0.587-0.089,0.533-0.379l-0.949-5.103l3.76-3.568C18.108,8.333,17.986,7.964,17.684,7.925 M13.481,11.723c-0.089,0.083-0.129,0.205-0.105,0.324l0.848,4.547l-4.047-2.208c-0.055-0.03-0.116-0.045-0.176-0.045s-0.122,0.015-0.176,0.045l-4.047,2.208l0.847-4.547c0.023-0.119-0.016-0.241-0.105-0.324L3.162,8.54L7.74,7.941c0.124-0.016,0.229-0.093,0.282-0.203L10,3.568l1.978,4.17c0.053,0.11,0.158,0.187,0.282,0.203l4.578,0.598L13.481,11.723z",
          fillColor: "yellow",
          fillOpacity: 0.9,
          scale: 2,
          strokeColor: "gold",
          strokeWeight: 2,
        }}
        position={userPosition}
      />
      <Marker
        icon={"https://img.icons8.com/color/48/000000/heart-rainbow.png"}
        position={center}
      />
      {locations.map((mark, index) => (
        <Marker
          icon={"https://img.icons8.com/color/48/000000/heart-rainbow.png"}
          key={index}
          position={mark}
        />
      ))}
    </GoogleMap>
  ) : (
    <h2>Map Loading...</h2>
  );
};

export default PrideMap;
