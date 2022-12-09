import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const request = require('request');

var model = 'camry'
request.get({
  url: 'https://api.api-ninjas.com/v1/cars?model=' + model,
  headers: {
    'X-Api-Key': '8/pRJvk+ZwQJnPqSvnqnbw==o05v27eRNMGl1nFx'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});

export default { request };