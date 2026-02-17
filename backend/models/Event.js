const mongoose = require("mongoose");

module.exports = mongoose.model("Event", {
  title: String,
  description: String,
  date: String,
  venue: String,
  ticketLimit: Number,
  approvalMode: String, // auto / manual
});
