import { useState } from "react";
import PrideMap from "../../components/map/PrideMap";
import "./landing.css";
import { Button } from "react-bootstrap";
import AddStoryModal from "./AddStoryModal";

const LandingPage = ({ addNew, markersList }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userPosition, setUserPosition] = useState({
    lat: 34.0195,
    lng: -118.4912,
  });

  const handleUserAdd = () => {
    setShow(true);
  };

  return (
    <div className="landing">
      <h1>Landing Page</h1>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <AddStoryModal
        addNew={(n) => addNew(n)}
        coord={userPosition}
        show={show}
        handleClose={handleClose}
      />
      <PrideMap
        handleUserAdd={(coord) => handleUserAdd(coord)}
        userPosition={userPosition}
        markersList={markersList}
        changePlacement={(e) =>
          setUserPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() })
        }
      />
      {/* <Button onClick={() => addNewMarker(data, data.lat, data.lng)}>
        CLick
      </Button> */}
    </div>
  );
};

export default LandingPage;
