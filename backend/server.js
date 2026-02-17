const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

require("./config/db")();

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/register", require("./routes/registrationRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));
