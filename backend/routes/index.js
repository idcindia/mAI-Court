const express = require("express");
const userRoutes = require("../controllers/user/user.route")

const app = express();

app.use("/user", userRoutes);

module.exports = app;
