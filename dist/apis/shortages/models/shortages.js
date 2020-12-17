"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getshortagesModel;

var _mongoose = require("mongoose");

function getshortagesModel() {
  const collectionName = 'shortages';

  if (_mongoose.models[collectionName]) {
    return (0, _mongoose.model)(collectionName);
  }

  const shortagesSchema = new _mongoose.Schema({
    serialNumber: {
      type: String,
      required: true
    },
    caseBarCode: {
      type: String,
      required: true
    },
    productionCode: {
      type: String,
      required: true
    },
    healCode: {
      type: String,
      required: true
    },
    productionName: {
      type: String,
      required: true
    },
    batchNumber: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  });
  return (0, _mongoose.model)(collectionName, shortagesSchema);
}
//# sourceMappingURL=shortages.js.map
