import { Row, Col, Card } from "react-bootstrap";
const variantStyle = ["primary", "success", "danger", "info", "light", "dark"];
const Stories = ({ markersList }) => {
  return (
    <div>
      <h1>List of User Stories</h1>
      <Row>
        {markersList.map((mark) => {
          const border = variantStyle[Math.floor(Math.random() * 4)];
          return (
            <Col md={4} xs={12} key={mark.id}>
              <Card
                border={border}
                bg="secondary"
                text="light"
                className="card-style"
                style={{ marginBottom: "10px" }}
              >
                <Card.Header>Author: {mark.name}</Card.Header>
                <Card.Body>
                  <Card.Title>Title: {mark.title}</Card.Title>
                  <Card.Text>Category: {mark.category}</Card.Text>
                  <Card.Text>Experience: {mark.experience}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default Stories;
