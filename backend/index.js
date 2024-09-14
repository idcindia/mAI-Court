require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const database = require("./config/db");
const entryRoutes = require("./routes/index");
const bodyParser = require("body-parser");


const port = process.env.PORT || 5000;

database();
const corsOptions = {
  origin: [
    "https://mai-court.vercel.app",  
    "http://localhost:3000",         
  ],
  credentials: true, 
};
app.use(cors(corsOptions));


app.use(bodyParser.json());


//routes
 app.use('/api', entryRoutes);

app.get("/", (req, res) => {
    res.send(`<h1>Server is running on Port ${port}</h1>`);
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
