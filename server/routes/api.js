const API_BASE = "/api";
const axios = require('axios')
const { validate, ValidationError, Joi } = require('express-validation')
 
const loginValidation = {
  body: Joi.object({
    apellido: Joi.string()
      .required(),
    nombre: Joi.string(),
    dni: Joi.number()
      .max(9999999999) //maximo 10 digitos
      .required(),
  }),
}

module.exports = function(app){
    app.get(`${API_BASE}/`, (req, res) => {
        res.send('api base');
    })

    // POST method route
    app.post(`${API_BASE}/`, validate(loginValidation, {}, {}), function (req, res) {
        //var nombre = req.body.nombre;
        //var apellido = req.body.apellido;
        //var dni = req.body.dni;
        //res.send(`POST request sent to the api: ${var1}`);

        axios.post('https://jsonplaceholder.typicode.com/users', req.body)
        .then((res) => {
          //console.log(`statusCode: ${res.statusCode}`)
          console.log("status code: " + res.status + " - " + res.statusText);
          console.log(res.data);
        })
        .catch((error) => {
          console.error(error);
        })

        res.send('{"response":"valid"}');

    });
}