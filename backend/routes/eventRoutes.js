const router = require("express").Router();
const Event = require("../models/Event");

router.post("/", async (req, res) => {
  const event = await Event.create(req.body);
  res.json(event);
});

router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

router.get("/:id", async (req, res) => {
  const event = await Event.findById(req.params.id);
  res.json(event);
});

router.put("/:id/approve", async (req, res) => {
  const reg = await Registration.findByIdAndUpdate(
    req.params.id,
    { status: "approved" },
    { new: true }
  );

  res.json(reg);
});


module.exports = router;
