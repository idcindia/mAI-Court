const express = require("express");
const userRoutes = require("../controllers/user/user.route");
const blogRoutes = require("../controllers/blog/blog.route")

const app = express();

app.use("/user", userRoutes);
app.use("/blog", blogRoutes)

module.exports = app;
