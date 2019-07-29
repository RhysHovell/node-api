const mongoose = require("mongoose");
var _id = mongoose.Schema.Types.ObjectId;

const UserInteractionSchema = mongoose.Schema({
  userId: String,
  session: String,
  ipAddress: String,
  timestamp: Number,
  product: String,
  version: String,
  flight: String,
  activity: String,
  action: String,
  dataDictionary: {
    type: Map,
    of: Object
  }
});

module.exports = mongoose.model("UserInteraction", UserInteractionSchema);
