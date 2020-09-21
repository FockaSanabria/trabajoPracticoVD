const express = require('express');
const app = express();
const { PORT } = require("./config");
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require("./routes/views")(app);
require("./routes/api")(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
})