import axios from "axios";
import React from "react";

// var model = ''
// request.get({
//   url: 'https://api.api-ninjas.com/v1/cars?model=' + model,
//   headers: {
//     'X-Api-Key': '8/pRJvk+ZwQJnPqSvnqnbw==o05v27eRNMGl1nFx'
//   },
// }, function(error, response, body) {
//   if(error) return console.error('Request failed:', error);
//   else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
//   else console.log(body)
// });
const search = async (query) =>
  axios.get(`https://api.api-ninjas.com/v1/cars?limit=2&model=${query}`);

export default { search };
