"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProductionLineModel;

var _mongoose = require("mongoose");

function getProductionLineModel() {
  const collectionName = 'production_line';

  if (_mongoose.models[collectionName]) {
    return (0, _mongoose.model)(collectionName);
  }

  const productionLineSchema = new _mongoose.Schema({
    lineName: {
      type: String,
      required: true
    },
    healFeed: {
      type: String,
      required: true
    },
    targetProduction: {
      type: Number,
      required: true
    },
    createdOn: {
      type: Date,
      required: true
    },
    status: {
      type: String
    }
  });
  return (0, _mongoose.model)(collectionName, productionLineSchema);
}
//# sourceMappingURL=production_line.js.map
