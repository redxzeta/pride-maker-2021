import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import uniqid from "uniqid";
import { addNewMarker } from "../../utils/FireBaseUtils";

const initForm = {
  title: "",
  pronouns: "",
  name: "",
  category: "esports",
  experience: "",
};

const AddStoryModal = ({ coord, show, handleClose, addNew }) => {
  const [addStory, setAddStory] = useState(initForm);
  const { lat, lng } = coord;
  const handleChange = (e) =>
    setAddStory({ ...addStory, [e.target.name]: e.target.value });

  const onSubmit = () => {
    addNewMarker(addStory, lat, lng);

    addNew({
      ...addStory,
      lat: lat,
      lng: lng,
      id: uniqid(addStory.name + "-"),
    });
    handleClose();
  };
  const categories = [
    "Esports",
    "Tech",
    "Community",
    "School",
    "Historical",
    "Personal",
    "Sports",
  ];
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add A Story</Modal.Title>
      </Modal.Header>{" "}
      <Modal.Body>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            value={addStory.title}
            onChange={handleChange}
            type="text"
            placeholder="Enter Title"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Pronouns</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Pronouns"
            name="pronouns"
            value={addStory.pronouns}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={addStory.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Category</Form.Label>
          <Form.Control
            name="category"
            value={addStory.category}
            onChange={handleChange}
            as="select"
          >
            {categories.map((c) => (
              <option key={c} className="text-dark">
                {c}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Share your Experience</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            rows={3}
            name="experience"
            onChange={handleChange}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => onSubmit()}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddStoryModal;
