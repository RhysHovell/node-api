const UserInteraction = require("../models/userinteraction.model.js");

exports.create = (req, res) => {
  if (!req.body.userId) {
    return res.status(400).send({
      message: "userId can not be empty"
    });
  }

  const userinteraction = new UserInteraction({
    userId: req.body.userId,
    session: req.body.session,
    ipAddress: req.body.ipAddress,
    timestamp: req.body.timestamp,
    proudct: req.body.proudct,
    version: req.body.version,
    flight: req.body.flight,
    activity: req.body.activity,
    action: req.body.action,
    dataDictionary: req.body.dataDictionary
  });

  userinteraction
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error when creating userinteraction."
      });
    });
};
