require("dotenv").config();
require("./db");

const { isAuthenticated } = require("./middleware/jwt.middleware");
const express = require("express");
const app = express();

require("./config")(app);

const indexRoutes = require("./routes/index.routes");
app.use("/api", isAuthenticated, indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/api", authRoutes);

require("./error-handling")(app);

module.exports = app;
