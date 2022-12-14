import Card from "react-bootstrap/Card";
import {useEffect} from 'react';


function BasicExample(props) {
  let playerName = ''
  let playerLvl = ''
  playerName = localStorage.getItem("playerName")
  playerLvl= localStorage.getItem('playerLvl')
  console.log(playerName)
useEffect(() =>{
 playerName = localStorage.getItem("playerName")
 playerLvl= localStorage.getItem('playerLvl')
 if (playerName===''){
  console.log('player name doesnt exist.')
 } else {
  console.log(playerName)
  console.log(typeof playerLvl)
 } 
 
 

  
})
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Player Stats</Card.Title>
        <Card.Text>
          <h2> player name :{playerName}</h2>
          <h2>player level :{playerLvl}</h2>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
