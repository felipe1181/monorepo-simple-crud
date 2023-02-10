const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(cors());

app.use(require("./routes"));

app.listen(PORT, () => {
  console.log(`Servidor online: http://localhost:${PORT}`);
});
