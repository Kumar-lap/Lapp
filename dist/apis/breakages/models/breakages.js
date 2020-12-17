"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getbreakagesModel;

var _mongoose = require("mongoose");

function getbreakagesModel() {
  const collectionName = 'breakages';

  if (_mongoose.models[collectionName]) {
    return (0, _mongoose.model)(collectionName);
  }

  const breakagesSchema = new _mongoose.Schema({
    productCode: {
      type: String,
      required: true
    },
    brandCode: {
      type: String,
      required: true
    },
    sizeCode: {
      type: String,
      required: true
    },
    productName: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  });
  return (0, _mongoose.model)(collectionName, breakagesSchema);
}
//# sourceMappingURL=breakages.js.map
