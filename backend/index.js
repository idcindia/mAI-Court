require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const database = require("./config/db");
const entryRoutes = require("./routes/index");
const bodyParser = require("body-parser");


const port = 5000;

database();

app.use(cors());
app.use(bodyParser.json());


//routes
 app.use('/api', entryRoutes);

app.get("/", (req, res) => {
    res.send(`<h1>Server is running on Port ${port}</h1>`);
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
