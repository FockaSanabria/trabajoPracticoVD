const API_BASE = "/api";
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
        //var var1 = req.body.usr;
        //res.send(`POST request sent to the api: ${var1}`);
        //res.send(`valid post`);
    });
}