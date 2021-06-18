import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";
import { Button, Badge } from "react-bootstrap";
import Heart from "./marker.png";
import Xzeta from "./xzeta.png";
import Min from "./min.png";

const containerStyle = {
  width: "100%",
  height: "800px",
};

const center = {
  lat: 34.0195,
  lng: -118.5912,
};

const option = {
  mapTypeControl: false,
  streetViewControl: false,
};
const colors = ["primary", "success", "danger", "info", "light", "dark"];
const PrideMap = ({
  handleUserAdd,
  userPosition,
  changePlacement,
  markersList,
}) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const [infoWindow, setInfoWindow] = useState(0);
  const [infoUser, setInfoUser] = useState(false);
  const userPlacement = { lat: userPosition.lat, lng: userPosition.lng };
  const changeInfoIndex = (id) => {
    id === infoWindow ? setInfoWindow(9999) : setInfoWindow(id);
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
        onClick={() => setInfoUser(!infoUser)}
        position={userPlacement}
      >
        {infoUser && (
          <InfoWindow position={userPlacement}>
            <div>
              <h5 className="text-primary">Story here?</h5>
              <Button
                onClick={() => {
                  setInfoWindow(false);
                  handleUserAdd();
                }}
              >
                CLICK here
              </Button>
            </div>
          </InfoWindow>
        )}
      </Marker>
      <Marker icon={Xzeta} position={center}>
        <div>
          <h5>Nathan</h5>
        </div>
      </Marker>
      <Marker icon={Min} position={center} />
      {markersList.map((mark) => {
        const bg = colors[Math.floor(Math.random() * 4)];
        return (
          <Marker
            // icon={"https://img.icons8.com/color/48/000000/heart-rainbow.png"}
            icon={Heart}
            key={mark.id}
            position={{ lat: mark.lat, lng: mark.lng }}
            onClick={() => changeInfoIndex(mark.id)}
          >
            {infoWindow === mark.id ? (
              <InfoWindow position={{ lat: mark.lat, lng: mark.lng }}>
                <div>
                  <h4 className="text-primary">{mark.title}</h4>
                  <h5 className="text-primary">By: {mark.name}</h5>
                  <Badge
                    bg={bg}
                    style={{ display: "block", marginBottom: "5px" }}
                  >
                    {mark.category}
                  </Badge>
                  <Button>CLICK here</Button>
                </div>
              </InfoWindow>
            ) : (
              ""
            )}
          </Marker>
        );
      })}
    </GoogleMap>
  ) : (
    <h2>Map Loading...</h2>
  );
};

export default PrideMap;
