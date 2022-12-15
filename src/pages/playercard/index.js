import Card from "react-bootstrap/Card";

function BasicExample() {
  return (
    <Card>
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
