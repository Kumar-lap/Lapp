"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gethealUsageModel;

var _mongoose = require("mongoose");

function gethealUsageModel() {
  const collectionName = 'heal_usage';

  if (_mongoose.models[collectionName]) {
    return (0, _mongoose.model)(collectionName);
  }

  const healUsageSchema = new _mongoose.Schema({
    openingStock: {
      type: Number,
      required: true
    },
    healReceived: {
      type: Number,
      required: true
    },
    purpose: {
      type: String,
      required: true
    },
    healIssued: {
      type: Number,
      required: true
    },
    healUsed: {
      type: Number,
      required: true
    },
    damage: {
      type: Number,
      required: true
    },
    closingStock: {
      type: Number,
      required: true
    }
  });
  return (0, _mongoose.model)(collectionName, healUsageSchema);
}
//# sourceMappingURL=heal_usage.js.map
