"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gethologramsModel;

var _mongoose = require("mongoose");

function gethologramsModel() {
  const collectionName = 'holograms';

  if (_mongoose.models[collectionName]) {
    return (0, _mongoose.model)(collectionName);
  }

  const hologramsSchema = new _mongoose.Schema({
    spoolBarCode: {
      type: String,
      required: true
    },
    healStartCode: {
      type: String,
      required: true
    },
    spoolEndCode: {
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
  return (0, _mongoose.model)(collectionName, hologramsSchema);
}
//# sourceMappingURL=holograms.js.map
