import Card from "react-bootstrap/Card";
import "./playercard.css";

function BasicExample(){
  let playerName = "";
  let playerLvl = "";
  let playeremail ="";

 playerName = localStorage.getItem("playerName")
 playerLvl= localStorage.getItem('playerLvl')
 playeremail = localStorage.getItem('email')


return (
    <Card className="card">
      <Card.Body>
        <Card.Text>
          <h1> {playerName}</h1>
          <br/>
          <div className="line1">Email: {playeremail} </div>
          <br/>
          <div className="line2">Player level: {playerLvl}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
