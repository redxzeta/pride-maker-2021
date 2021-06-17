import { useState } from "react";
import PrideMap from "../../components/map/PrideMap";
import "./landing.css";
import { Button } from "react-bootstrap";
import AddStoryModal from "./AddStoryModal";
import { addNewMarker } from "../../utils/FireBaseUtils";
const LandingPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const data = {
    lat: 34,
    long: -118,
    username: "bob",
    story: "heyho",
  };
  return (
    <div className="landing">
      <h1>Landing Page</h1>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <AddStoryModal show={show} handleClose={handleClose} />
      <PrideMap />
      <Button onClick={() => addNewMarker(data)}>CLick</Button>
    </div>
  );
};

export default LandingPage;
