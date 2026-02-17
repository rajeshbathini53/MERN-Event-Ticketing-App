router.post("/:eventId", async (req, res) => {
  const event = await Event.findById(req.params.eventId);

  const status =
    event.approvalMode === "auto" ? "approved" : "pending";

  const reg = await Registration.create({
    ...req.body,
    eventId: req.params.eventId,
    status,
  });

  res.json(reg);
});

router.get("/event/:eventId", async (req, res) => {
  const regs = await Registration.find({
    eventId: req.params.eventId,
  });

  res.json(regs);
});
