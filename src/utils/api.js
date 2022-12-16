import { useEffect, useState } from"react";
import axios from "axios";
require("dotenv").config()

export default function Api({ model }) {
  const url = "https://api.api-ninjas.com/v1/cars";

  const [car, setCar] = useState([]);

  useEffect(() => {
    console.log(model);
    axios
      .get(`https://api.api-ninjas.com/v1/cars?limit=1&model=${model}`, {
        headers: { "X-Api-Key":process.env.REACT_APP_API_KEY },
      })
      .then((response) => {
        console.log(response.data);
        setCar(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      {car.length > 0 ? (
        <div>
          <h3>Make: {car[0]?.make?.toString()}</h3>
          <h3>MPG: {car[0]?.highway_mpg?.toString()}</h3>
          <h3>Drive : {car[0]?.drive?.toString()}</h3>
          <h3>Cylinders : {car[0]?.cylinders?.toString()}</h3>
          <h3>Transmission : {car[0]?.transmission?.toString()}</h3>
          <h3>Class : {car[0]?.class?.toString()}</h3>
        </div>
      ) : (
        "No such model"
      )}
    </div>
  );
}



// export default { getMe, startGame, Api} 
