import Card from "react-bootstrap/Card";

function BasicExample() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Player Stats</Card.Title>
        <Card.Text>
          Name<br></br>
          Level<br></br>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
