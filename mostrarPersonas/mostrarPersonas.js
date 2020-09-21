#!/usr/bin/env node

var rp = require('request-promise');

var options = {
    uri: 'https://reclutamiento-14cf7.firebaseio.com/personas.json',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true 
};
 
rp(options)
    .then(function (repos) {
        console.log(repos); // muestra el resultado por consola
    })
    .catch(function (err) {
        console.log("no se pudo realizar el request")
    });