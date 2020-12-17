"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gethealFeedModel;

var _mongoose = require("mongoose");

function gethealFeedModel() {
  const collectionName = 'heal_feed';

  if (_mongoose.models[collectionName]) {
    return (0, _mongoose.model)(collectionName);
  }

  const healFeedSchema = new _mongoose.Schema({
    spoolBarCode: {
      type: String,
      required: true
    },
    healStartCode: {
      type: String,
      required: true
    },
    healEndCode: {
      type: String,
      required: true
    },
    purpose: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  });
  return (0, _mongoose.model)(collectionName, healFeedSchema);
}
//# sourceMappingURL=heal_feed.js.map
