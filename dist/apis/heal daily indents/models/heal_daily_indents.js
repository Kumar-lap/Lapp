"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gethealDailyIndentsModel;

var _mongoose = require("mongoose");

function gethealDailyIndentsModel() {
  const collectionName = 'heal_daily_indents';

  if (_mongoose.models[collectionName]) {
    return (0, _mongoose.model)(collectionName);
  }

  const healDailyIndentsSchema = new _mongoose.Schema({
    indentNumber: {
      type: String,
      required: true
    },
    requestedOn: {
      type: Date,
      required: true
    },
    purpose: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  });
  return (0, _mongoose.model)(collectionName, healDailyIndentsSchema);
}
//# sourceMappingURL=heal_daily_indents.js.map
